
---

# `service-checklist`

````md id="27eqlu"
# Tripify Service Checklist

## Purpose

This document defines the responsibilities of each backend service module.

Service modules contain business logic.  
They are called from route handlers.  
They can use Prisma and helper utilities.  
They must not contain HTTP-specific behavior such as raw request parsing or direct response formatting.

---

# General Service Rules

- Services contain business rules.
- Services can call Prisma.
- Services can call helper utilities.
- Services must return plain data or throw errors.
- Services must not depend on Elysia route context directly.
- Services must not import route modules.
- Services must not import `app.ts`.
- Services should keep dependency flow clean:
  - `routes -> services -> lib/utils`

---

# Error Handling Convention

Each service should:
- throw domain errors when business rules fail
- let route handlers translate those errors into HTTP responses

Examples:
- unauthorized access
- forbidden access
- resource not found
- invalid state transition
- duplicate rating
- invalid invitation target

---

# auth.service.ts

## Responsibility
Provide auth-related business logic if needed.

## Current Required Functions

### `upsertAuthUser(authUser)`
Used to create or update local user record from Supabase auth user.

### Suggested Signature
```ts
async function upsertAuthUser(authUser: SupabaseUser): Promise<User>
````

### Rules

* match by `supabaseAuthId`
* update email, fullName, avatarUrl, providerSubject
* create user if it does not exist

---

# trip.service.ts

## Responsibility

Handle trip creation, trip retrieval, trip updates, trip completion, trip day generation, and itinerary item operations.

---

## `createTrip(ownerId, input)`

### Purpose

Create a new trip and initialize related data.

### Suggested Signature

```ts
async function createTrip(ownerId: string, input: CreateTripDto): Promise<Trip>
```

### Rules

* create trip with `ownerId`
* create owner membership in `TripMember` with role `OWNER`
* generate `TripDay` rows from `startDate` to `endDate`
* validate that `startDate <= endDate`
* validate `travelerCount >= 1`

---

## `getMyTrips(userId, filters)`

### Purpose

Get trips that belong to or include the current user.

### Suggested Signature

```ts
async function getMyTrips(
  userId: string,
  filters?: {
    status?: string
    isTemplatePublished?: boolean
  }
): Promise<TripListItemDto[]>
```

### Rules

* include trips where user is owner
* or include trips where user is a member
* support optional filtering by status
* support optional filtering by `isTemplatePublished`

---

## `getTripById(tripId, userId)`

### Purpose

Get trip detail for authorized user.

### Suggested Signature

```ts
async function getTripById(tripId: string, userId: string): Promise<TripDetailDto>
```

### Rules

* trip must exist
* current user must be owner or member
* include:

  * members
  * days
  * itinerary items
* order days by `dayNumber`
* order itinerary items by `sortOrder`

---

## `updateTrip(tripId, userId, input)`

### Purpose

Update trip basic information.

### Suggested Signature

```ts
async function updateTrip(
  tripId: string,
  userId: string,
  input: UpdateTripDto
): Promise<Trip>
```

### Rules

* trip must exist
* only owner can update
* update only allowed fields

---

## `endTrip(tripId, userId, input)`

### Purpose

Mark trip as finished.

### Suggested Signature

```ts
async function endTrip(
  tripId: string,
  userId: string,
  input: EndTripDto
): Promise<Trip>
```

### Rules

* trip must exist
* only owner can end
* input status must be `COMPLETED` or `ENDED_EARLY`
* set `endedAt = now()`

---

## `getTripDays(tripId, userId)`

### Purpose

Get all trip days for authorized user.

### Suggested Signature

```ts
async function getTripDays(tripId: string, userId: string): Promise<TripDayDto[]>
```

### Rules

* trip must exist
* user must be owner or member
* include itinerary items ordered by `sortOrder`

---

## `updateTripDay(tripDayId, userId, input)`

### Purpose

Update title or note for one trip day.

### Suggested Signature

```ts
async function updateTripDay(
  tripDayId: string,
  userId: string,
  input: UpdateTripDayDto
): Promise<TripDay>
```

### Rules

* trip day must exist
* current user must belong to trip

---

## `createItineraryItem(tripDayId, userId, input)`

### Purpose

Create itinerary item inside a trip day.

### Suggested Signature

```ts
async function createItineraryItem(
  tripDayId: string,
  userId: string,
  input: CreateItineraryItemDto
): Promise<ItineraryItem>
```

### Rules

* trip day must exist
* current user must belong to trip
* create item with provided fields
* default `sortOrder` if not provided

---

## `updateItineraryItem(itemId, userId, input)`

### Purpose

Update itinerary item.

### Suggested Signature

```ts
async function updateItineraryItem(
  itemId: string,
  userId: string,
  input: UpdateItineraryItemDto
): Promise<ItineraryItem>
```

### Rules

* item must exist
* current user must belong to related trip
* update only provided fields

---

## `deleteItineraryItem(itemId, userId)`

### Purpose

Delete itinerary item.

### Suggested Signature

```ts
async function deleteItineraryItem(
  itemId: string,
  userId: string
): Promise<void>
```

### Rules

* item must exist
* current user must belong to related trip

---

# invitation.service.ts

## Responsibility

Handle invitation creation, listing, acceptance, decline, and trip member listing.

---

## `createInvitation(tripId, inviterUserId, input)`

### Purpose

Create invitation for a trip.

### Suggested Signature

```ts
async function createInvitation(
  tripId: string,
  inviterUserId: string,
  input: CreateInvitationDto
): Promise<TripInvitation>
```

### Rules

* trip must exist
* inviter must be trip owner
* input must contain either:

  * `inviteeUserId`
  * or `inviteeEmail`
* invitation status starts as `PENDING`

---

## `getInvitations(userId, filters)`

### Purpose

List invitations for current user.

### Suggested Signature

```ts
async function getInvitations(
  userId: string,
  filters?: {
    status?: string
    type?: "received" | "sent"
  }
): Promise<InvitationListItemDto[]>
```

### Rules

* `received` means current user is invitee
* `sent` means current user is inviter
* support optional status filter

---

## `acceptInvitation(invitationId, userId)`

### Purpose

Accept invitation.

### Suggested Signature

```ts
async function acceptInvitation(
  invitationId: string,
  userId: string
): Promise<TripInvitation>
```

### Rules

* invitation must exist
* current user must be invitee
* invitation must be `PENDING`
* update status to `ACCEPTED`
* set `respondedAt`
* create `TripMember` if not already exists

---

## `declineInvitation(invitationId, userId)`

### Purpose

Decline invitation.

### Suggested Signature

```ts
async function declineInvitation(
  invitationId: string,
  userId: string
): Promise<TripInvitation>
```

### Rules

* invitation must exist
* current user must be invitee
* invitation must be `PENDING`
* update status to `DECLINED`
* set `respondedAt`

---

## `getTripMembers(tripId, userId)`

### Purpose

Return members of a trip.

### Suggested Signature

```ts
async function getTripMembers(
  tripId: string,
  userId: string
): Promise<TripMemberDto[]>
```

### Rules

* trip must exist
* current user must be owner or member
* include basic user info

---

# rating.service.ts

## Responsibility

Handle trip rating creation and listing.

---

## `createRating(tripId, userId, input)`

### Purpose

Create trip rating.

### Suggested Signature

```ts
async function createRating(
  tripId: string,
  userId: string,
  input: CreateRatingDto
): Promise<Rating>
```

### Rules

* trip must exist
* current user must be trip member
* trip status must be `COMPLETED` or `ENDED_EARLY`
* one user can rate one trip only once
* `score` must be between 1 and 5

---

## `getTripRatings(tripId, userId)`

### Purpose

List ratings of a trip.

### Suggested Signature

```ts
async function getTripRatings(
  tripId: string,
  userId: string
): Promise<RatingDto[]>
```

### Rules

* trip must exist
* current user must be owner or member

---

# template.service.ts

## Responsibility

Handle simple template publishing, listing, detail, and cloning.

## Important Rule

A template is not a separate table.
A template is a normal trip with `isTemplatePublished = true`.

---

## `publishTemplate(tripId, userId)`

### Purpose

Publish a trip as a template.

### Suggested Signature

```ts
async function publishTemplate(
  tripId: string,
  userId: string
): Promise<Trip>
```

### Rules

* trip must exist
* only owner can publish
* set:

  * `isTemplatePublished = true`
  * `templatePublishedAt = now()`

---

## `getTemplates(filters)`

### Purpose

List published templates.

### Suggested Signature

```ts
async function getTemplates(filters?: {
  destinationCountry?: string
  q?: string
}): Promise<TemplateListItemDto[]>
```

### Rules

* only trips with `isTemplatePublished = true`
* support optional search/filter

---

## `getTemplateById(tripId)`

### Purpose

Get template detail.

### Suggested Signature

```ts
async function getTemplateById(tripId: string): Promise<TripDetailDto>
```

### Rules

* trip must exist
* trip must have `isTemplatePublished = true`

---

## `cloneTemplate(sourceTripId, newOwnerId, input)`

### Purpose

Create a new trip from a published template.

### Suggested Signature

```ts
async function cloneTemplate(
  sourceTripId: string,
  newOwnerId: string,
  input: CloneTemplateDto
): Promise<Trip>
```

### Rules

* source trip must exist
* source trip must be published
* create new trip owned by current user
* copy:

  * trip basic fields
  * trip days
  * itinerary items
* do not copy:

  * members
  * invitations
  * ratings
* increment source `templateUseCount`
* new trip should create owner membership

---

# Utility Helpers Recommended

## Membership helper

```ts
async function assertTripAccess(tripId: string, userId: string): Promise<void>
```

## Ownership helper

```ts id="0jeyqa"
async function assertTripOwner(tripId: string, userId: string): Promise<void>
```

## Date range helper

```ts id="v3jlwm"
function generateTripDates(startDate: Date, endDate: Date): Date[]
```

## Template clone helper

```ts id="tau6ye"
async function cloneTripDaysAndItems(sourceTripId: string, newTripId: string): Promise<void>
```



---

# `frontend-pages-to-endpoints`

```md id="g7z5ks"
# Tripify Frontend Pages to Endpoints

## Purpose

Define which frontend pages use which backend endpoints and what each page is responsible for rendering.

This document helps align frontend implementation with backend API contracts.

---

# Shared Frontend Rules

- Frontend uses Eden Treaty to call backend.
- Frontend does not access Prisma directly.
- Protected pages require authenticated user.
- Frontend should call `/auth/me` after login to fetch current app user.
- Frontend should use DTO shapes from shared package where available.

---

# 1) Landing Page

## Route
`/`

## Purpose
- introduce the product
- show CTA to sign in
- show product highlights
- show key value propositions

## Main API Usage
No protected data required.

### Optional endpoints
- `GET /templates`
  - to show featured templates preview on landing page

## Main UI Blocks
- hero section
- sign in CTA
- product benefits
- sample template cards
- Lottie hero animation

---

# 2) Login Page

## Route
`/login`

## Purpose
- trigger Google login
- redirect user into app

## Main API Usage
No backend endpoint required directly.

## Main Client Logic
- Supabase Google OAuth
- after session is available:
  - call `GET /auth/me`

## Main UI Blocks
- sign in button
- product branding
- travel-focused illustration or animation

---

# 3) Auth Callback Page

## Route
`/auth/callback`

## Purpose
- handle redirect from Google OAuth
- finalize app login state
- redirect to dashboard or my trips

## Main API Usage
- `GET /auth/me`

## Main UI Blocks
- loading state
- auth processing state
- error fallback state

---

# 4) Dashboard / My Trips Page

## Route
`/trips`

## Purpose
- show all trips related to current user
- allow navigation to create trip
- allow navigation to trip details

## Main API Usage
- `GET /auth/me`
- `GET /trips`

## Possible Filters
- active trips
- completed trips
- templates published by user

## Main UI Blocks
- page header
- create trip CTA
- trip card list
- empty state

---

# 5) Create Trip Page

## Route
`/trips/create`

## Purpose
- collect trip details
- create new trip
- redirect to trip detail

## Main API Usage
- `POST /trips`

## Main UI Blocks
- title input
- destination input
- description input
- budget input
- traveler count input
- start and end date input
- submit button

## Main Success Flow
- create trip
- redirect to `/trips/:tripId`

---

# 6) Trip Detail Page

## Route
`/trips/:tripId`

## Purpose
- show trip overview
- show members
- show trip days and itinerary
- entry point to invite, rate, end trip, publish template

## Main API Usage
- `GET /trips/:tripId`
- `GET /trips/:tripId/members`
- `GET /trips/:tripId/days`
- `GET /trips/:tripId/ratings`

## Main Actions from Page
- `PATCH /trips/:tripId`
- `POST /trips/:tripId/end`
- `POST /trips/:tripId/publish-template`
- `POST /trips/:tripId/invitations`
- `POST /trips/:tripId/ratings`

## Main UI Blocks
- trip header
- trip metadata
- member list
- day-by-day itinerary
- invitation form
- publish template button
- end trip button
- ratings section

---

# 7) Edit Trip Form / Modal

## Route
Could be inline inside trip detail or separate page.

## Purpose
- update trip basic info

## Main API Usage
- `PATCH /trips/:tripId`

## Main UI Blocks
- editable trip fields
- save button
- cancel button

---

# 8) Trip Day Section

## Route
Rendered inside trip detail page

## Purpose
- display day title, note, and itinerary items

## Main API Usage
- `GET /trips/:tripId/days`
- `PATCH /trip-days/:tripDayId`

## Main UI Blocks
- day card
- day note/title editor
- add item button

---

# 9) Create/Edit Itinerary Item Modal

## Route
Modal or drawer inside trip detail page

## Purpose
- create and update itinerary items

## Main API Usage
- `POST /trip-days/:tripDayId/items`
- `PATCH /itinerary-items/:itemId`
- `DELETE /itinerary-items/:itemId`

## Main UI Blocks
- title
- place name
- address
- city / country
- time fields
- estimated cost
- note
- save / delete actions

---

# 10) Invitations Page

## Route
`/invitations`

## Purpose
- show invitations received
- show invitations sent
- allow accept / decline

## Main API Usage
- `GET /invitations`
- `POST /invitations/:invitationId/accept`
- `POST /invitations/:invitationId/decline`

## Main UI Blocks
- tabs: received / sent
- invitation cards
- accept button
- decline button
- status badges

---

# 11) Invite User UI

## Route
Usually inside trip detail page

## Purpose
- send trip invitation

## Main API Usage
- `POST /trips/:tripId/invitations`

## Main UI Blocks
- invite by email field
- optional invite by user id if supported in UI
- message field
- send button

---

# 12) Members Panel

## Route
Rendered inside trip detail page

## Purpose
- show all current trip members

## Main API Usage
- `GET /trips/:tripId/members`

## Main UI Blocks
- avatar list
- names
- role labels

---

# 13) End Trip Confirmation

## Route
Modal inside trip detail page

## Purpose
- allow owner to complete or end trip early

## Main API Usage
- `POST /trips/:tripId/end`

## Main UI Blocks
- confirm dialog
- choose status:
  - completed
  - ended early
- confirm button

---

# 14) Rating Modal / Section

## Route
Can be modal, section, or separate page tied to trip detail

## Purpose
- submit trip rating after completion
- display ratings

## Main API Usage
- `POST /trips/:tripId/ratings`
- `GET /trips/:tripId/ratings`

## Main UI Blocks
- score selection 1–5
- optional comment
- submit button
- rating list

---

# 15) Templates List Page

## Route
`/templates`

## Purpose
- browse published template trips
- open template details
- start clone flow

## Main API Usage
- `GET /templates`

## Query Support
- search query
- destination country filter

## Main UI Blocks
- search bar
- filter controls
- template cards
- empty state

---

# 16) Template Detail Page

## Route
`/templates/:tripId`

## Purpose
- show published template details
- preview itinerary structure
- allow clone action

## Main API Usage
- `GET /templates/:tripId`
- `POST /templates/:tripId/clone`

## Main UI Blocks
- template hero/header
- summary metadata
- day-by-day preview
- clone button

---

# 17) Clone Template Flow

## Route
Modal or separate form

## Purpose
- create a new trip from template
- choose new title and new date range

## Main API Usage
- `POST /templates/:tripId/clone`

## Main UI Blocks
- title input
- new start date
- new end date
- submit button

## Main Success Flow
- create cloned trip
- redirect to new trip detail page

---

# 18) Global Current User State

## Purpose
Used in authenticated layout/header/navbar.

## Main API Usage
- `GET /auth/me`

## Main UI Blocks
- user avatar
- display name
- logout action

---

# Page to Endpoint Matrix

## Landing
- optional: `GET /templates`

## Login
- no backend endpoint directly
- then `GET /auth/me`

## Auth Callback
- `GET /auth/me`

## My Trips
- `GET /trips`

## Create Trip
- `POST /trips`

## Trip Detail
- `GET /trips/:tripId`
- `GET /trips/:tripId/members`
- `GET /trips/:tripId/days`
- `GET /trips/:tripId/ratings`

## Trip Edit
- `PATCH /trips/:tripId`

## Trip Days
- `PATCH /trip-days/:tripDayId`

## Itinerary
- `POST /trip-days/:tripDayId/items`
- `PATCH /itinerary-items/:itemId`
- `DELETE /itinerary-items/:itemId`

## Invitations
- `GET /invitations`
- `POST /trips/:tripId/invitations`
- `POST /invitations/:invitationId/accept`
- `POST /invitations/:invitationId/decline`

## Members
- `GET /trips/:tripId/members`

## End Trip
- `POST /trips/:tripId/end`

## Ratings
- `POST /trips/:tripId/ratings`
- `GET /trips/:tripId/ratings`

## Templates
- `GET /templates`
- `GET /templates/:tripId`
- `POST /trips/:tripId/publish-template`
- `POST /templates/:tripId/clone`
````
