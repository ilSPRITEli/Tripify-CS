spec + implementation guide

---

# `dto-and-zod-plan`

````md
# Tripify DTO and Zod Plan

## Goal

Define the shared DTOs and validation schemas used by both frontend and backend.

## Project Rules

- Frontend uses API responses, not Prisma models directly.
- Backend is the only layer that talks to Prisma.
- Shared package should contain:
  - request DTOs
  - response DTOs
  - enums used by both frontend and backend
  - zod validation schemas
- Do not expose raw Prisma model types directly to the frontend.

---

# Enums

## TripStatus
```ts
export const TRIP_STATUS = [
  "DRAFT",
  "ACTIVE",
  "COMPLETED",
  "ENDED_EARLY",
  "ARCHIVED",
  "CANCELLED",
] as const

export type TripStatus = (typeof TRIP_STATUS)[number]
````

## TripMemberRole

```ts
export const TRIP_MEMBER_ROLE = ["OWNER", "MEMBER"] as const

export type TripMemberRole = (typeof TRIP_MEMBER_ROLE)[number]
```

## InvitationStatus

```ts
export const INVITATION_STATUS = [
  "PENDING",
  "ACCEPTED",
  "DECLINED",
  "EXPIRED",
  "REVOKED",
  "CANCELLED",
] as const

export type InvitationStatus = (typeof INVITATION_STATUS)[number]
```

---

# Common Response Types

## ApiResponse

```ts
export type ApiResponse<T> =
  | {
      ok: true
      data: T
    }
  | {
      ok: false
      message: string
      errors?: Record<string, unknown>
    }
```

---

# Auth DTOs

## AuthMeDto

```ts
export type AuthMeDto = {
  id: string
  supabaseAuthId: string
  email: string
  fullName: string
  avatarUrl: string | null
  username: string | null
  bio: string | null
  country: string | null
}
```

---

# Trip DTOs

## CreateTripDto

```ts
export type CreateTripDto = {
  title: string
  description?: string | null
  destination: string
  destinationCountry?: string | null
  destinationCity?: string | null
  budgetTotal?: number | null
  travelerCount: number
  startDate: string
  endDate: string
  timezone?: string
  coverImageUrl?: string | null
}
```

## UpdateTripDto

```ts
export type UpdateTripDto = Partial<{
  title: string
  description: string | null
  destination: string
  destinationCountry: string | null
  destinationCity: string | null
  budgetTotal: number | null
  travelerCount: number
  coverImageUrl: string | null
}>
```

## EndTripDto

```ts
export type EndTripDto = {
  status: "COMPLETED" | "ENDED_EARLY"
}
```

## TripListItemDto

```ts
export type TripListItemDto = {
  id: string
  title: string
  destination: string
  destinationCountry: string | null
  startDate: string
  endDate: string
  status: TripStatus
  isTemplatePublished: boolean
  owner: {
    id: string
    fullName: string
  }
}
```

## TripMemberDto

```ts
export type TripMemberDto = {
  id: string
  userId: string
  role: TripMemberRole
  joinedAt: string
  user: {
    fullName: string
    email?: string
    avatarUrl: string | null
  }
}
```

## ItineraryItemDto

```ts
export type ItineraryItemDto = {
  id: string
  title: string
  description: string | null
  placeName: string | null
  placeAddress: string | null
  country: string | null
  city: string | null
  startTime: string | null
  endTime: string | null
  estimatedCost: number | null
  currency: string | null
  note: string | null
  sortOrder: number
  isCompleted: boolean
}
```

## TripDayDto

```ts
export type TripDayDto = {
  id: string
  dayNumber: number
  date: string
  title: string | null
  note: string | null
  items: ItineraryItemDto[]
}
```

## TripDetailDto

```ts
export type TripDetailDto = {
  id: string
  title: string
  description: string | null
  destination: string
  destinationCountry: string | null
  destinationCity: string | null
  budgetTotal: number | null
  travelerCount: number
  startDate: string
  endDate: string
  timezone: string
  status: TripStatus
  isTemplatePublished: boolean
  members: TripMemberDto[]
  days: TripDayDto[]
}
```

---

# Trip Day DTOs

## UpdateTripDayDto

```ts
export type UpdateTripDayDto = {
  title?: string | null
  note?: string | null
}
```

---

# Itinerary DTOs

## CreateItineraryItemDto

```ts
export type CreateItineraryItemDto = {
  title: string
  description?: string | null
  placeName?: string | null
  placeAddress?: string | null
  country?: string | null
  city?: string | null
  startTime?: string | null
  endTime?: string | null
  estimatedCost?: number | null
  currency?: string | null
  note?: string | null
  sortOrder?: number
}
```

## UpdateItineraryItemDto

```ts
export type UpdateItineraryItemDto = Partial<CreateItineraryItemDto> & {
  isCompleted?: boolean
}
```

---

# Invitation DTOs

## CreateInvitationDto

```ts
export type CreateInvitationDto = {
  inviteeUserId?: string
  inviteeEmail?: string
  message?: string | null
}
```

## InvitationListItemDto

```ts
export type InvitationListItemDto = {
  id: string
  status: InvitationStatus
  message: string | null
  trip: {
    id: string
    title: string
    destination: string
  }
  inviter: {
    id: string
    fullName: string
  }
}
```

---

# Rating DTOs

## CreateRatingDto

```ts
export type CreateRatingDto = {
  score: number
  comment?: string | null
}
```

## RatingDto

```ts
export type RatingDto = {
  id: string
  score: number
  comment: string | null
  user: {
    id: string
    fullName: string
    avatarUrl: string | null
  }
}
```

---

# Template DTOs

## PublishTemplateResponseDto

```ts
export type PublishTemplateResponseDto = {
  id: string
  isTemplatePublished: boolean
  templatePublishedAt: string | null
}
```

## TemplateListItemDto

```ts
export type TemplateListItemDto = {
  id: string
  title: string
  destination: string
  destinationCountry: string | null
  travelerCount: number
  startDate: string
  endDate: string
  templateUseCount: number
  owner: {
    id: string
    fullName: string
  }
}
```

## CloneTemplateDto

```ts
export type CloneTemplateDto = {
  title: string
  startDate: string
  endDate: string
}
```

---

# Zod Schemas

## createTripSchema

```ts
import { z } from "zod"

export const createTripSchema = z
  .object({
    title: z.string().min(1).max(150),
    description: z.string().max(1000).nullable().optional(),
    destination: z.string().min(1).max(150),
    destinationCountry: z.string().max(100).nullable().optional(),
    destinationCity: z.string().max(100).nullable().optional(),
    budgetTotal: z.number().nonnegative().nullable().optional(),
    travelerCount: z.number().int().min(1),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    timezone: z.string().default("Asia/Bangkok"),
    coverImageUrl: z.string().url().nullable().optional(),
  })
  .refine((data) => new Date(data.startDate) <= new Date(data.endDate), {
    message: "startDate must be before or equal to endDate",
    path: ["endDate"],
  })

export type CreateTripInput = z.infer<typeof createTripSchema>
```

## updateTripSchema

```ts
import { z } from "zod"

export const updateTripSchema = z.object({
  title: z.string().min(1).max(150).optional(),
  description: z.string().max(1000).nullable().optional(),
  destination: z.string().min(1).max(150).optional(),
  destinationCountry: z.string().max(100).nullable().optional(),
  destinationCity: z.string().max(100).nullable().optional(),
  budgetTotal: z.number().nonnegative().nullable().optional(),
  travelerCount: z.number().int().min(1).optional(),
  coverImageUrl: z.string().url().nullable().optional(),
})

export type UpdateTripInput = z.infer<typeof updateTripSchema>
```

## endTripSchema

```ts
import { z } from "zod"

export const endTripSchema = z.object({
  status: z.enum(["COMPLETED", "ENDED_EARLY"]),
})

export type EndTripInput = z.infer<typeof endTripSchema>
```

## updateTripDaySchema

```ts
import { z } from "zod"

export const updateTripDaySchema = z.object({
  title: z.string().max(150).nullable().optional(),
  note: z.string().max(1000).nullable().optional(),
})

export type UpdateTripDayInput = z.infer<typeof updateTripDaySchema>
```

## createItineraryItemSchema

```ts
import { z } from "zod"

export const createItineraryItemSchema = z.object({
  title: z.string().min(1).max(150),
  description: z.string().max(1000).nullable().optional(),
  placeName: z.string().max(150).nullable().optional(),
  placeAddress: z.string().max(255).nullable().optional(),
  country: z.string().max(100).nullable().optional(),
  city: z.string().max(100).nullable().optional(),
  startTime: z.string().datetime().nullable().optional(),
  endTime: z.string().datetime().nullable().optional(),
  estimatedCost: z.number().nonnegative().nullable().optional(),
  currency: z.string().max(10).nullable().optional(),
  note: z.string().max(1000).nullable().optional(),
  sortOrder: z.number().int().nonnegative().optional(),
})

export type CreateItineraryItemInput = z.infer<typeof createItineraryItemSchema>
```

## updateItineraryItemSchema

```ts
import { z } from "zod"
import { createItineraryItemSchema } from "./itinerary"

export const updateItineraryItemSchema = createItineraryItemSchema
  .partial()
  .extend({
    isCompleted: z.boolean().optional(),
  })

export type UpdateItineraryItemInput = z.infer<typeof updateItineraryItemSchema>
```

## createInvitationSchema

```ts
import { z } from "zod"

export const createInvitationSchema = z
  .object({
    inviteeUserId: z.string().cuid().optional(),
    inviteeEmail: z.string().email().optional(),
    message: z.string().max(500).nullable().optional(),
  })
  .refine((data) => !!data.inviteeUserId || !!data.inviteeEmail, {
    message: "inviteeUserId or inviteeEmail is required",
    path: ["inviteeUserId"],
  })

export type CreateInvitationInput = z.infer<typeof createInvitationSchema>
```

## createRatingSchema

```ts
import { z } from "zod"

export const createRatingSchema = z.object({
  score: z.number().int().min(1).max(5),
  comment: z.string().max(1000).nullable().optional(),
})

export type CreateRatingInput = z.infer<typeof createRatingSchema>
```

## cloneTemplateSchema

```ts
import { z } from "zod"

export const cloneTemplateSchema = z
  .object({
    title: z.string().min(1).max(150),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
  })
  .refine((data) => new Date(data.startDate) <= new Date(data.endDate), {
    message: "startDate must be before or equal to endDate",
    path: ["endDate"],
  })

export type CloneTemplateInput = z.infer<typeof cloneTemplateSchema>
```

---

# Suggested Shared Package File Layout

```txt
packages/shared/src/
├─ types/
│  ├─ api.ts
│  ├─ auth.ts
│  ├─ trip.ts
│  ├─ invitation.ts
│  ├─ rating.ts
│  └─ template.ts
├─ schemas/
│  ├─ trip.ts
│  ├─ itinerary.ts
│  ├─ invitation.ts
│  ├─ rating.ts
│  └─ template.ts
└─ enums/
   └─ trip.ts
```

---

# `elysia-route-skeleton`

```md
# Tripify Elysia Route Skeleton

## Goal

Provide a stable and practical route/module layout for the current project scope.

## Project Rules

- Keep the dependency flow one-directional:
  - `index -> app -> routes/plugins -> services/lib`
- `lib` must not import from `app`, `routes`, or `plugins`
- `services` contain business logic
- `routes` contain HTTP layer logic
- `plugins` contain reusable Elysia plugins
- `app.ts` exports default app
- `index.ts` is used for local server startup only

---

# Suggested Folder Structure

```txt
apps/api/src/
├─ app.ts
├─ index.ts
├─ lib/
│  ├─ prisma.ts
│  └─ supabase.ts
├─ plugins/
│  └─ auth.ts
├─ routes/
│  ├─ health.ts
│  ├─ auth.ts
│  ├─ trips.ts
│  ├─ trip-days.ts
│  ├─ itinerary-items.ts
│  ├─ invitations.ts
│  ├─ ratings.ts
│  └─ templates.ts
├─ services/
│  ├─ auth.service.ts
│  ├─ trip.service.ts
│  ├─ invitation.service.ts
│  ├─ rating.service.ts
│  └─ template.service.ts
└─ utils/
   ├─ auth.ts
   ├─ trip.ts
   └─ date.ts
````

---

# app.ts

```ts
import { Elysia } from "elysia"
import cors from "@elysiajs/cors"

import { authPlugin } from "./plugins/auth.js"
import { healthRoutes } from "./routes/health.js"
import { authRoutes } from "./routes/auth.js"
import { tripRoutes } from "./routes/trips.js"
import { tripDayRoutes } from "./routes/trip-days.js"
import { itineraryItemRoutes } from "./routes/itinerary-items.js"
import { invitationRoutes } from "./routes/invitations.js"
import { ratingRoutes } from "./routes/ratings.js"
import { templateRoutes } from "./routes/templates.js"

const app = new Elysia()
  .use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  )
  .use(authPlugin)
  .use(healthRoutes)
  .use(authRoutes)
  .use(tripRoutes)
  .use(tripDayRoutes)
  .use(itineraryItemRoutes)
  .use(invitationRoutes)
  .use(ratingRoutes)
  .use(templateRoutes)

export default app
export type App = typeof app
```

---

# index.ts

```ts
import app from "./app.js"

app.listen(3001)

console.log("API running at http://localhost:3001")
```

---

# plugins/auth.ts

```ts
import { Elysia } from "elysia"
import { bearer } from "@elysiajs/bearer"
import { supabase } from "../lib/supabase.js"
import { prisma } from "../lib/prisma.js"

export const authPlugin = new Elysia({ name: "auth" })
  .use(bearer())
  .derive(async ({ bearer, set }) => {
    if (!bearer) {
      return {
        currentUser: null,
        authUser: null,
      }
    }

    const { data, error } = await supabase.auth.getUser(bearer)

    if (error || !data.user) {
      set.status = 401
      return {
        currentUser: null,
        authUser: null,
      }
    }

    const authUser = data.user

    const currentUser = await prisma.user.upsert({
      where: { supabaseAuthId: authUser.id },
      update: {
        email: authUser.email ?? "",
        fullName:
          authUser.user_metadata?.full_name ??
          authUser.user_metadata?.name ??
          "Unknown User",
        avatarUrl:
          authUser.user_metadata?.avatar_url ??
          authUser.user_metadata?.picture ??
          null,
        providerSubject: authUser.user_metadata?.sub ?? null,
      },
      create: {
        supabaseAuthId: authUser.id,
        email: authUser.email ?? "",
        fullName:
          authUser.user_metadata?.full_name ??
          authUser.user_metadata?.name ??
          "Unknown User",
        avatarUrl:
          authUser.user_metadata?.avatar_url ??
          authUser.user_metadata?.picture ??
          null,
        provider: "GOOGLE",
        providerSubject: authUser.user_metadata?.sub ?? null,
      },
    })

    return {
      currentUser,
      authUser,
    }
  })
```

---

# routes/health.ts

```ts
import { Elysia } from "elysia"
import { prisma } from "../lib/prisma.js"

export const healthRoutes = new Elysia()
  .get("/health", () => ({
    ok: true,
    message: "API is running",
  }))
  .get("/db-check", async ({ set }) => {
    try {
      const userCount = await prisma.user.count()

      return {
        ok: true,
        data: { userCount },
      }
    } catch (error) {
      set.status = 500
      return {
        ok: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  })
```

---

# routes/auth.ts

```ts
import { Elysia } from "elysia"

export const authRoutes = new Elysia().get("/auth/me", ({ set, currentUser }) => {
  if (!currentUser) {
    set.status = 401
    return {
      ok: false,
      message: "Unauthorized",
    }
  }

  return {
    ok: true,
    data: {
      id: currentUser.id,
      supabaseAuthId: currentUser.supabaseAuthId,
      email: currentUser.email,
      fullName: currentUser.fullName,
      avatarUrl: currentUser.avatarUrl,
      username: currentUser.username,
      bio: currentUser.bio,
      country: currentUser.country,
    },
  }
})
```

---

# routes/trips.ts

```ts
import { Elysia } from "elysia"
import {
  createTrip,
  getMyTrips,
  getTripById,
  updateTrip,
  endTrip,
} from "../services/trip.service.js"

export const tripRoutes = new Elysia()
  .post("/trips", async ({ body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const trip = await createTrip(currentUser.id, body)

    return {
      ok: true,
      data: trip,
    }
  })
  .get("/trips", async ({ query, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const trips = await getMyTrips(currentUser.id, query)

    return {
      ok: true,
      data: trips,
    }
  })
  .get("/trips/:tripId", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const trip = await getTripById(params.tripId, currentUser.id)

    return {
      ok: true,
      data: trip,
    }
  })
  .patch("/trips/:tripId", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const trip = await updateTrip(params.tripId, currentUser.id, body)

    return {
      ok: true,
      data: trip,
    }
  })
  .post("/trips/:tripId/end", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const trip = await endTrip(params.tripId, currentUser.id, body)

    return {
      ok: true,
      data: trip,
    }
  })
```

---

# routes/trip-days.ts

```ts
import { Elysia } from "elysia"
import { getTripDays, updateTripDay } from "../services/trip.service.js"

export const tripDayRoutes = new Elysia()
  .get("/trips/:tripId/days", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const days = await getTripDays(params.tripId, currentUser.id)

    return {
      ok: true,
      data: days,
    }
  })
  .patch("/trip-days/:tripDayId", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const day = await updateTripDay(params.tripDayId, currentUser.id, body)

    return {
      ok: true,
      data: day,
    }
  })
```

---

# routes/itinerary-items.ts

```ts
import { Elysia } from "elysia"
import {
  createItineraryItem,
  updateItineraryItem,
  deleteItineraryItem,
} from "../services/trip.service.js"

export const itineraryItemRoutes = new Elysia()
  .post("/trip-days/:tripDayId/items", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const item = await createItineraryItem(params.tripDayId, currentUser.id, body)

    return {
      ok: true,
      data: item,
    }
  })
  .patch("/itinerary-items/:itemId", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const item = await updateItineraryItem(params.itemId, currentUser.id, body)

    return {
      ok: true,
      data: item,
    }
  })
  .delete("/itinerary-items/:itemId", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    await deleteItineraryItem(params.itemId, currentUser.id)

    return {
      ok: true,
      data: { id: params.itemId },
    }
  })
```

---

# routes/invitations.ts

```ts
import { Elysia } from "elysia"
import {
  createInvitation,
  getInvitations,
  acceptInvitation,
  declineInvitation,
  getTripMembers,
} from "../services/invitation.service.js"

export const invitationRoutes = new Elysia()
  .post("/trips/:tripId/invitations", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const invitation = await createInvitation(params.tripId, currentUser.id, body)

    return {
      ok: true,
      data: invitation,
    }
  })
  .get("/invitations", async ({ query, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const invitations = await getInvitations(currentUser.id, query)

    return {
      ok: true,
      data: invitations,
    }
  })
  .post("/invitations/:invitationId/accept", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const invitation = await acceptInvitation(params.invitationId, currentUser.id)

    return {
      ok: true,
      data: invitation,
    }
  })
  .post("/invitations/:invitationId/decline", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const invitation = await declineInvitation(params.invitationId, currentUser.id)

    return {
      ok: true,
      data: invitation,
    }
  })
  .get("/trips/:tripId/members", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const members = await getTripMembers(params.tripId, currentUser.id)

    return {
      ok: true,
      data: members,
    }
  })
```

---

# routes/ratings.ts

```ts
import { Elysia } from "elysia"
import { createRating, getTripRatings } from "../services/rating.service.js"

export const ratingRoutes = new Elysia()
  .post("/trips/:tripId/ratings", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const rating = await createRating(params.tripId, currentUser.id, body)

    return {
      ok: true,
      data: rating,
    }
  })
  .get("/trips/:tripId/ratings", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const ratings = await getTripRatings(params.tripId, currentUser.id)

    return {
      ok: true,
      data: ratings,
    }
  })
```

---

# routes/templates.ts

```ts
import { Elysia } from "elysia"
import {
  publishTemplate,
  getTemplates,
  getTemplateById,
  cloneTemplate,
} from "../services/template.service.js"

export const templateRoutes = new Elysia()
  .post("/trips/:tripId/publish-template", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const trip = await publishTemplate(params.tripId, currentUser.id)

    return {
      ok: true,
      data: trip,
    }
  })
  .get("/templates", async ({ query }) => {
    const templates = await getTemplates(query)

    return {
      ok: true,
      data: templates,
    }
  })
  .get("/templates/:tripId", async ({ params }) => {
    const template = await getTemplateById(params.tripId)

    return {
      ok: true,
      data: template,
    }
  })
  .post("/templates/:tripId/clone", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401
      return { ok: false, message: "Unauthorized" }
    }

    const trip = await cloneTemplate(params.tripId, currentUser.id, body)

    return {
      ok: true,
      data: trip,
    }
  })
```

---

# Service Responsibilities

## auth.service.ts

Contains auth-related business logic if needed in future.

## trip.service.ts

Contains:

* createTrip
* getMyTrips
* getTripById
* updateTrip
* endTrip
* getTripDays
* updateTripDay
* createItineraryItem
* updateItineraryItem
* deleteItineraryItem

## invitation.service.ts

Contains:

* createInvitation
* getInvitations
* acceptInvitation
* declineInvitation
* getTripMembers

## rating.service.ts

Contains:

* createRating
* getTripRatings

## template.service.ts

Contains:

* publishTemplate
* getTemplates
* getTemplateById
* cloneTemplate

---

# Business Logic Rules

## createTrip

* create trip
* create owner membership
* generate trip days by date range

## acceptInvitation

* ensure current user is invitee
* update invitation status
* create member if not exists

## endTrip

* only owner can end trip
* set status + endedAt

## createRating

* ensure trip ended
* ensure user is trip member
* ensure user has not already rated this trip

## publishTemplate

* only owner
* set `isTemplatePublished = true`
* set `templatePublishedAt`

## cloneTemplate

* ensure source trip is published template
* copy trip fields
* copy trip days
* copy itinerary items
* do not copy members
* do not copy invitations
* do not copy ratings
* increment source `templateUseCount`

