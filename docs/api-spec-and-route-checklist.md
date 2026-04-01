
ผมแบ่งเนื้อหาเกี่ยวกับ api ไว้สองส่วนตามด้านล่างนี้ครับ
1. `api-spec`
2. `implementation-checklist`

---

# `api-spec`

# Tripify API Spec

## Overview

Tripify is a collaborative trip planning web application.

This API spec is intentionally scoped down for a short demo timeline.

### Core features in scope
- Google login via Supabase
- Create trip
- View my trips
- View trip details
- Day-by-day itinerary planning
- Invite users to join a trip
- Accept / decline invitations
- End trip
- Rate trip after completion
- Publish trip as simple template
- Browse templates
- Clone template into a new trip

### Out of scope for this demo
- Notifications
- Web push
- Cron/reminder system
- Achievement system
- Public profile
- Advanced analytics
- Dedicated template tables

---

## Base URL

### Local
```txt
http://localhost:3001
```

### Production

```txt
https://your-api-domain.vercel.app
```

---

## Authentication

Frontend uses Supabase Google OAuth.

Frontend sends Supabase access token to backend via Bearer token.

### Header format

```http
Authorization: Bearer <supabase_access_token>
```

### Backend behavior

* verify token with Supabase
* upsert current user into local `User` table
* attach current user to request context

---

## Standard Response Format

### Success

```json
{
  "ok": true,
  "data": {}
}
```

### Error

```json
{
  "ok": false,
  "message": "Something went wrong"
}
```

### Validation Error

```json
{
  "ok": false,
  "message": "Validation failed",
  "errors": {}
}
```

---

## Enums

### TripStatus

* `DRAFT`
* `ACTIVE`
* `COMPLETED`
* `ENDED_EARLY`
* `ARCHIVED`
* `CANCELLED`

### TripMemberRole

* `OWNER`
* `MEMBER`

### InvitationStatus

* `PENDING`
* `ACCEPTED`
* `DECLINED`
* `EXPIRED`
* `REVOKED`
* `CANCELLED`

---

# Health

## GET `/health`

Check API availability.

### Response

```json
{
  "ok": true,
  "message": "API is running"
}
```

---

## GET `/db-check`

Check database connectivity.

### Response

```json
{
  "ok": true,
  "data": {
    "userCount": 10
  }
}
```

---

# Auth

## GET `/auth/me`

Get current authenticated user.

### Auth

Required

### Response

```json
{
  "ok": true,
  "data": {
    "id": "usr_123",
    "supabaseAuthId": "supabase_uid",
    "email": "user@example.com",
    "fullName": "John Doe",
    "avatarUrl": "https://...",
    "username": "johndoe",
    "bio": null,
    "country": "Thailand"
  }
}
```

### Unauthorized

```json
{
  "ok": false,
  "message": "Unauthorized"
}
```

---

# Trips

## POST `/trips`

Create a new trip.

### Auth

Required

### Request Body

```json
{
  "title": "Japan Spring Trip",
  "description": "เที่ยวญี่ปุ่นช่วงซากุระ",
  "destination": "Tokyo",
  "destinationCountry": "Japan",
  "destinationCity": "Tokyo",
  "budgetTotal": 45000,
  "travelerCount": 2,
  "startDate": "2026-04-10T00:00:00.000Z",
  "endDate": "2026-04-14T00:00:00.000Z",
  "timezone": "Asia/Bangkok",
  "coverImageUrl": null
}
```

### Behavior

* create `Trip`
* set owner = current user
* create owner membership in `TripMember`
* auto-generate `TripDay` records from startDate to endDate

### Response

```json
{
  "ok": true,
  "data": {
    "id": "trip_123",
    "title": "Japan Spring Trip",
    "status": "DRAFT"
  }
}
```

---

## GET `/trips`

Get current user's trips.

### Auth

Required

### Query Params

* `status?`
* `isTemplatePublished?`

### Example

```txt
/trips?status=ACTIVE
/trips?isTemplatePublished=true
```

### Response

```json
{
  "ok": true,
  "data": [
    {
      "id": "trip_123",
      "title": "Japan Spring Trip",
      "destination": "Tokyo",
      "destinationCountry": "Japan",
      "startDate": "2026-04-10T00:00:00.000Z",
      "endDate": "2026-04-14T00:00:00.000Z",
      "status": "ACTIVE",
      "isTemplatePublished": false,
      "owner": {
        "id": "usr_1",
        "fullName": "John Doe"
      }
    }
  ]
}
```

---

## GET `/trips/:tripId`

Get trip details.

### Auth

Required

### Permission

Only owner or member can access

### Response

```json
{
  "ok": true,
  "data": {
    "id": "trip_123",
    "title": "Japan Spring Trip",
    "description": "เที่ยวญี่ปุ่นช่วงซากุระ",
    "destination": "Tokyo",
    "destinationCountry": "Japan",
    "destinationCity": "Tokyo",
    "budgetTotal": 45000,
    "travelerCount": 2,
    "startDate": "2026-04-10T00:00:00.000Z",
    "endDate": "2026-04-14T00:00:00.000Z",
    "timezone": "Asia/Bangkok",
    "status": "ACTIVE",
    "isTemplatePublished": false,
    "members": [
      {
        "id": "member_1",
        "userId": "usr_1",
        "role": "OWNER",
        "user": {
          "fullName": "John Doe",
          "avatarUrl": "https://..."
        }
      }
    ],
    "days": [
      {
        "id": "day_1",
        "dayNumber": 1,
        "date": "2026-04-10T00:00:00.000Z",
        "title": "Day 1",
        "note": null,
        "items": []
      }
    ]
  }
}
```

---

## PATCH `/trips/:tripId`

Update trip basic information.

### Auth

Required

### Permission

Owner only

### Request Body

```json
{
  "title": "Japan Sakura Trip",
  "description": "updated",
  "budgetTotal": 50000,
  "travelerCount": 3
}
```

### Response

```json
{
  "ok": true,
  "data": {
    "id": "trip_123",
    "title": "Japan Sakura Trip"
  }
}
```

---

## POST `/trips/:tripId/end`

End trip.

### Auth

Required

### Permission

Owner only

### Request Body

```json
{
  "status": "COMPLETED"
}
```

or

```json
{
  "status": "ENDED_EARLY"
}
```

### Behavior

* update trip status
* set `endedAt`

### Response

```json
{
  "ok": true,
  "data": {
    "id": "trip_123",
    "status": "COMPLETED",
    "endedAt": "2026-04-20T12:00:00.000Z"
  }
}
```

---

# Trip Days

## GET `/trips/:tripId/days`

Get all days of a trip.

### Auth

Required

### Permission

Owner or member only

### Response

```json
{
  "ok": true,
  "data": [
    {
      "id": "day_1",
      "dayNumber": 1,
      "date": "2026-04-10T00:00:00.000Z",
      "title": "Day 1",
      "note": null,
      "items": []
    }
  ]
}
```

---

## PATCH `/trip-days/:tripDayId`

Update day information.

### Auth

Required

### Permission

Owner or member only

### Request Body

```json
{
  "title": "Arrival Day",
  "note": "เริ่มเที่ยวช่วงบ่าย"
}
```

### Response

```json
{
  "ok": true,
  "data": {
    "id": "day_1",
    "title": "Arrival Day"
  }
}
```

---

# Itinerary Items

## POST `/trip-days/:tripDayId/items`

Create itinerary item.

### Auth

Required

### Permission

Owner or member only

### Request Body

```json
{
  "title": "Visit Shibuya",
  "description": "เดินเล่นและกินข้าว",
  "placeName": "Shibuya Crossing",
  "placeAddress": "Tokyo, Japan",
  "country": "Japan",
  "city": "Tokyo",
  "startTime": "2026-04-10T06:00:00.000Z",
  "endTime": "2026-04-10T09:00:00.000Z",
  "estimatedCost": 1500,
  "currency": "THB",
  "note": "ซื้อของฝาก",
  "sortOrder": 1
}
```

### Response

```json
{
  "ok": true,
  "data": {
    "id": "item_1",
    "title": "Visit Shibuya"
  }
}
```

---

## PATCH `/itinerary-items/:itemId`

Update itinerary item.

### Auth

Required

### Permission

Owner or member only

### Request Body

```json
{
  "title": "Visit Shibuya and Dinner",
  "estimatedCost": 2000,
  "note": "จองร้านล่วงหน้า"
}
```

### Response

```json
{
  "ok": true,
  "data": {
    "id": "item_1",
    "title": "Visit Shibuya and Dinner"
  }
}
```

---

## DELETE `/itinerary-items/:itemId`

Delete itinerary item.

### Auth

Required

### Permission

Owner or member only

### Response

```json
{
  "ok": true,
  "data": {
    "id": "item_1"
  }
}
```

---

# Invitations

## POST `/trips/:tripId/invitations`

Create trip invitation.

### Auth

Required

### Permission

Owner only

### Request Body

Invite by email:

```json
{
  "inviteeEmail": "friend@example.com",
  "message": "มาเที่ยวด้วยกันไหม"
}
```

Invite by user id:

```json
{
  "inviteeUserId": "usr_2",
  "message": "มาเที่ยวด้วยกันไหม"
}
```

### Response

```json
{
  "ok": true,
  "data": {
    "id": "invite_1",
    "status": "PENDING"
  }
}
```

---

## GET `/invitations`

Get invitation list for current user.

### Auth

Required

### Query Params

* `status?`
* `type?=received|sent`

### Response

```json
{
  "ok": true,
  "data": [
    {
      "id": "invite_1",
      "status": "PENDING",
      "message": "มาเที่ยวด้วยกันไหม",
      "trip": {
        "id": "trip_123",
        "title": "Japan Spring Trip",
        "destination": "Tokyo"
      },
      "inviter": {
        "id": "usr_1",
        "fullName": "John Doe"
      }
    }
  ]
}
```

---

## POST `/invitations/:invitationId/accept`

Accept invitation.

### Auth

Required

### Permission

Invitee only

### Behavior

* update invitation status to `ACCEPTED`
* create `TripMember` if not already exists

### Response

```json
{
  "ok": true,
  "data": {
    "id": "invite_1",
    "status": "ACCEPTED"
  }
}
```

---

## POST `/invitations/:invitationId/decline`

Decline invitation.

### Auth

Required

### Permission

Invitee only

### Response

```json
{
  "ok": true,
  "data": {
    "id": "invite_1",
    "status": "DECLINED"
  }
}
```

---

# Members

## GET `/trips/:tripId/members`

Get trip members.

### Auth

Required

### Permission

Owner or member only

### Response

```json
{
  "ok": true,
  "data": [
    {
      "id": "member_1",
      "role": "OWNER",
      "joinedAt": "2026-03-28T00:00:00.000Z",
      "user": {
        "id": "usr_1",
        "fullName": "John Doe",
        "email": "john@example.com",
        "avatarUrl": "https://..."
      }
    }
  ]
}
```

---

# Ratings

## POST `/trips/:tripId/ratings`

Create trip rating.

### Auth

Required

### Permission

* must be a trip member
* trip must be `COMPLETED` or `ENDED_EARLY`
* one user can rate one trip once

### Request Body

```json
{
  "score": 5,
  "comment": "ทริปสนุกมาก วางแผนง่าย"
}
```

### Response

```json
{
  "ok": true,
  "data": {
    "id": "rating_1",
    "score": 5,
    "comment": "ทริปสนุกมาก วางแผนง่าย"
  }
}
```

---

## GET `/trips/:tripId/ratings`

Get trip ratings.

### Auth

Required

### Permission

Owner or member only

### Response

```json
{
  "ok": true,
  "data": [
    {
      "id": "rating_1",
      "score": 5,
      "comment": "ทริปสนุกมาก วางแผนง่าย",
      "user": {
        "id": "usr_2",
        "fullName": "Jane Doe",
        "avatarUrl": "https://..."
      }
    }
  ]
}
```

---

# Templates (Simple Mode)

## POST `/trips/:tripId/publish-template`

Publish trip as template.

### Auth

Required

### Permission

Owner only

### Behavior

* set `isTemplatePublished = true`
* set `templatePublishedAt = now()`

### Response

```json
{
  "ok": true,
  "data": {
    "id": "trip_123",
    "isTemplatePublished": true,
    "templatePublishedAt": "2026-03-29T12:00:00.000Z"
  }
}
```

---

## GET `/templates`

Get all published templates.

### Auth

Optional or required depending on UI plan

### Query Params

* `destinationCountry?`
* `q?`

### Response

```json
{
  "ok": true,
  "data": [
    {
      "id": "trip_123",
      "title": "Japan Spring Trip",
      "destination": "Tokyo",
      "destinationCountry": "Japan",
      "travelerCount": 2,
      "startDate": "2026-04-10T00:00:00.000Z",
      "endDate": "2026-04-14T00:00:00.000Z",
      "templateUseCount": 3,
      "owner": {
        "id": "usr_1",
        "fullName": "John Doe"
      }
    }
  ]
}
```

---

## GET `/templates/:tripId`

Get template details.

### Rule

Only trips with `isTemplatePublished = true` are valid templates.

### Response

Same shape as trip detail, but only for published templates.

---

## POST `/templates/:tripId/clone`

Clone template into a new trip.

### Auth

Required

### Request Body

```json
{
  "title": "My Japan Trip",
  "startDate": "2026-05-01T00:00:00.000Z",
  "endDate": "2026-05-05T00:00:00.000Z"
}
```

### Behavior

* source trip must have `isTemplatePublished = true`
* create a new trip owned by current user
* copy:

  * trip basic fields
  * trip days
  * itinerary items
* do not copy:

  * members
  * invitations
  * ratings
* increment source `templateUseCount`

### Response

```json
{
  "ok": true,
  "data": {
    "id": "trip_new_1",
    "title": "My Japan Trip"
  }
}
```

---

# Validation Rules

## Trip

* `title` required
* `destination` required
* `travelerCount >= 1`
* `startDate <= endDate`

## Invitation

At least one of:

* `inviteeUserId`
* `inviteeEmail`

## Rating

* `score` must be between `1` and `5`

## Template Clone

* source trip must be published as template

---

# Permission Rules

## Owner

Can:

* update trip
* end trip
* invite users
* publish template

## Member

Can:

* view trip
* view itinerary
* optionally edit itinerary
* accept/decline their own invitations
* rate trip after completion

## Non-member

Cannot:

* access private trip detail
* access members
* rate the trip


---

# `implementation-checklist.md`


# Tripify Implementation Checklist

## Goal
Ship a demo-ready MVP within 3 days.

Focus on:
- stability
- clear demo flow
- core product value

Avoid:
- overengineering
- unnecessary abstractions
- expanding scope

---

# Priority Order

1. Auth
2. Trip create/list/detail
3. Trip day + itinerary CRUD
4. Invitation flow
5. End trip
6. Rating
7. Simple template publish/clone
8. UI polish

---

# Tech Rules

- Frontend: React + Vite
- Backend: Elysia
- Typed client: Eden Treaty
- ORM: Prisma
- Auth/DB/Storage: Supabase
- Deploy: Vercel
- Use `prisma-client-js` because it is the currently working path in this project
- Backend talks to Prisma
- Frontend must not use Prisma directly
- Shared package should stay minimal until actually needed

---

> **Checklist hygiene:** พอฟีเจอร์ใน repo ใช้งานได้จริงแล้ว ให้อัปเดตช่องด้านล่างจาก `[ ]` เป็น `[x]` ในเดียวกับงานนั้น (หรือทันทีหลัง merge) เพื่อให้เอกสารสะท้อนสถานะล่าสุด

# Backend Structure Checklist

## Basic structure
- [x] `src/app.ts`
- [x] `src/index.ts`
- [x] `src/lib/prisma.ts`
- [x] `src/lib/supabase.ts`
- [x] `src/plugins/auth.ts`
- [x] `src/routes/` (optional if time allows)

## Rules
- [x] `app.ts` exports default app
- [x] `index.ts` is for local `listen()` only if needed
- [x] avoid circular imports
- [x] keep import flow one-directional:
  - `index -> app -> plugins/routes -> lib`
- [x] `lib` must not import `app`, `routes`, or `plugins`

---

# Step 0: Debug/Infra

- [x] `GET /health` works locally
- [x] `GET /db-check` works locally
- [ ] `GET /health` works on deployed API
- [ ] `GET /db-check` works on deployed API

### Notes
- If deploy/runtime becomes unstable, prefer simpler working setup over ideal architecture.
- Use working Prisma setup rather than reintroducing risky generator/runtime changes.

---

# Step 1: Auth

## Backend
- [x] create Supabase server client/helper
- [x] create auth plugin using Bearer token
- [x] verify token with Supabase
- [x] upsert current user in local `User` table
- [x] expose current user in request context
- [x] implement `GET /auth/me`

## Frontend
- [x] install Supabase client
- [x] create `supabase.ts`
- [x] create login button
- [x] Google login flow works
- [x] logout works
- [x] session is available on frontend
- [x] Eden Treaty attaches Bearer token to requests
- [x] call `/auth/me` successfully from frontend

## Done when
- [x] user can sign in with Google
- [x] frontend receives session
- [x] backend recognizes current user
- [x] `/auth/me` returns correct user data

---

# Step 2: Trip Create/List/Detail

## Backend
- [x] implement `POST /trips`
- [x] implement `GET /trips`
- [x] implement `GET /trips/:tripId`
- [ ] implement `PATCH /trips/:tripId`

## Business rules
- [x] current user becomes trip owner
- [x] current user is inserted into `TripMember` as `OWNER`
- [x] `TripDay` rows are auto-generated from startDate to endDate

## Frontend
- [x] create trip form
- [x] trip list page
- [x] trip detail page
- [x] show trip metadata
- [x] show member list
- [x] show days

## Done when
- [x] user can create a trip
- [x] user can see their trip in trip list
- [x] user can open trip detail page

---

# Step 3: Day-by-Day Itinerary

## Backend
- [x] implement `GET /trips/:tripId/days`
- [x] implement `PATCH /trip-days/:tripDayId`
- [x] implement `POST /trip-days/:tripDayId/items`
- [x] implement `PATCH /itinerary-items/:itemId`
- [x] implement `DELETE /itinerary-items/:itemId`

## Frontend
- [x] day sections in trip detail
- [x] create itinerary item form/modal
- [x] edit itinerary item
- [x] delete itinerary item
- [x] render itinerary list per day

## Done when
- [x] user can add itinerary items to a day
- [x] user can edit/delete items
- [x] trip detail page clearly shows daily plan

---

# Step 4: Invitation Flow

## Backend
- [x] implement `POST /trips/:tripId/invitations`
- [x] implement `GET /invitations`
- [x] implement `POST /invitations/:invitationId/accept`
- [x] implement `POST /invitations/:invitationId/decline`
- [x] implement `GET /trips/:tripId/members`

## Business rules
- [x] only owner can invite
- [x] invitation can target `inviteeUserId` or `inviteeEmail`
- [x] accepting invitation creates `TripMember` if not already exists
- [x] declining invitation updates status only

## Frontend
- [x] invitation form in trip detail
- [x] invitation list page
- [x] accept button
- [x] decline button
- [x] members section in trip detail

## Done when
- [x] owner can send invitation
- [x] invited user can see invitation
- [x] invited user can accept/decline
- [x] accepted invitation creates trip membership

---

# Step 5: End Trip

## Backend
- [ ] implement `POST /trips/:tripId/end`

## Business rules
- [ ] only owner can end trip
- [ ] allow `COMPLETED` or `ENDED_EARLY`
- [ ] set `endedAt`

## Frontend
- [ ] end trip button
- [ ] end trip confirmation
- [ ] update status in UI

## Done when
- [ ] owner can mark a trip as ended

---

# Step 6: Rating

## Backend
- [ ] implement `POST /trips/:tripId/ratings`
- [ ] implement `GET /trips/:tripId/ratings`

## Business rules
- [ ] only members can rate
- [ ] trip must be completed or ended early
- [ ] one rating per user per trip
- [ ] score range = 1..5

## Frontend
- [ ] rating modal or page
- [ ] star rating UI
- [ ] optional comment field
- [ ] rating list on trip detail

## Done when
- [ ] member can rate completed trip
- [ ] ratings are visible on trip detail

---

# Step 7: Simple Template Flow

## Backend
- [ ] implement `POST /trips/:tripId/publish-template`
- [ ] implement `GET /templates`
- [ ] implement `GET /templates/:tripId`
- [ ] implement `POST /templates/:tripId/clone`

## Business rules
- [ ] template = trip with `isTemplatePublished = true`
- [ ] cloning copies:
  - trip fields
  - trip days
  - itinerary items
- [ ] cloning does NOT copy:
  - members
  - invitations
  - ratings
- [ ] increment `templateUseCount`

## Frontend
- [ ] publish template button
- [ ] templates list page
- [ ] template detail page
- [ ] clone template action

## Done when
- [ ] user can publish trip as template
- [ ] other user can browse templates
- [ ] other user can clone template into new trip

---

# Shared Types Checklist

## Only add when needed
- [x] `ApiResponse<T>`
- [x] `AuthMeResponse`
- [x] `CreateTripDto`
- [ ] `UpdateTripDto`
- [x] `CreateItineraryItemDto`
- [x] `CreateInvitationDto`
- [ ] `CreateRatingDto`

## Rule
- [x] do not overbuild shared package early
- [x] add shared types only when both frontend and backend actually need them

---

# UI Checklist

## Core screens
- [x] Landing page
- [x] Login page
- [x] My Trips page
- [x] Create Trip page
- [x] Trip Detail page
- [x] Invitations page
- [x] Templates page
- [ ] Rate Trip modal/page

## UX direction
- [ ] clean modern UI
- [ ] purple primary
- [ ] yellow/gold accent
- [ ] strong visual hierarchy
- [ ] mobile-friendly
- [ ] use Lottie meaningfully:
  - hero
  - empty states
  - success states

---

# Demo Flow Checklist

## Ideal demo story
- [x] sign in with Google
- [x] create trip
- [x] show auto-generated trip days
- [x] add itinerary items
- [x] invite another user
- [x] accept invitation as second user
- [x] show both users in members list
- [ ] end trip
- [ ] submit rating
- [ ] publish as template
- [ ] clone template

---

# Nice-to-Have Only If Time Remains

- [ ] better dashboard summary
- [ ] prettier loading states
- [ ] extra validation messages
- [ ] small UI polish
- [ ] seed demo data

---

# Explicitly Out of Scope

- [ ] notifications
- [ ] web push
- [ ] reminder scheduling
- [ ] achievements
- [ ] public profile
- [ ] analytics
- [ ] advanced template architecture
- [ ] advanced roles system
- [ ] activity log

---

# Final Rule

If time becomes tight:
- keep auth
- keep trip flow
- keep invitation
- keep rating
- keep simple template
- drop everything else

