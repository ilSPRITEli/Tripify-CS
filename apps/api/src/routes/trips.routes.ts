import {
  TRIP_STATUS,
  type CreateTripResponseDto,
  type TripStatus,
} from "@repo/shared/trip";
import type {
  CreateInvitationResponseDto,
  CreateRatingResponseDto,
  EndTripResponseDto,
  PublishTemplateResponseDto,
} from "@repo/shared";
import { createInvitationSchema } from "@repo/shared/invitation-schema";
import { createRatingSchema } from "@repo/shared/rating-schema";
import { createTripSchema, endTripSchema } from "@repo/shared/trip-schema";
import { Elysia } from "elysia";
import { authPlugin } from "../plugins/auth";
import {
  createInvitation,
  getTripMembers,
} from "../services/invitation.service";
import { createRating, getTripRatings } from "../services/rating.service";
import { publishTemplate } from "../services/template.service";
import {
  createTrip,
  endTrip,
  getMyTrips,
  getTripById,
  getTripDays,
} from "../services/trip.service";

export const tripsRoutes = new Elysia({
  name: "trips-routes",
  prefix: "/trips",
})
  .use(authPlugin)
  .post("/", async ({ body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const parsed = createTripSchema.safeParse(body);
    if (!parsed.success) {
      set.status = 400;
      return {
        ok: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const created = await createTrip(currentUser.id, parsed.data);
    const data: CreateTripResponseDto = {
      id: created.id,
      title: created.title,
      status: created.status as CreateTripResponseDto["status"],
    };

    return { ok: true, data };
  })
  .get("/", async ({ query, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const statusRaw = query.status;
    let status: TripStatus | undefined;
    if (
      typeof statusRaw === "string" &&
      (TRIP_STATUS as readonly string[]).includes(statusRaw)
    ) {
      status = statusRaw as TripStatus;
    }

    const pub = query.isTemplatePublished;
    let isTemplatePublished: boolean | undefined;
    if (pub === "true") {
      isTemplatePublished = true;
    } else if (pub === "false") {
      isTemplatePublished = false;
    }

    const data = await getMyTrips(currentUser.id, {
      ...(status ? { status } : {}),
      ...(isTemplatePublished !== undefined ? { isTemplatePublished } : {}),
    });

    return { ok: true, data };
  })
  .get("/:tripId/days", async ({ params: { tripId }, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const days = await getTripDays(tripId, currentUser.id);
    if (days === null) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return { ok: true, data: days };
  })
  .post(
    "/:tripId/invitations",
    async ({ params: { tripId }, body, currentUser, set }) => {
      if (!currentUser) {
        set.status = 401;
        return { ok: false, message: "Unauthorized" };
      }

      const parsed = createInvitationSchema.safeParse(body);
      if (!parsed.success) {
        set.status = 400;
        return {
          ok: false,
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        };
      }

      const result = await createInvitation(
        tripId,
        currentUser.id,
        parsed.data,
      );
      if (!result.ok) {
        set.status = result.status;
        return { ok: false, message: result.message };
      }

      const data: CreateInvitationResponseDto = {
        id: result.id,
        status: result.status,
      };
      return { ok: true, data };
    },
  )
  .post(
    "/:tripId/publish-template",
    async ({ params: { tripId }, currentUser, set }) => {
      if (!currentUser) {
        set.status = 401;
        return { ok: false, message: "Unauthorized" };
      }

      const result = await publishTemplate(tripId, currentUser.id);
      if (!result.ok) {
        set.status = result.status;
        return { ok: false, message: result.message };
      }

      const data: PublishTemplateResponseDto = result.data;
      return { ok: true, data };
    },
  )
  .get("/:tripId/members", async ({ params: { tripId }, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const members = await getTripMembers(tripId, currentUser.id);
    if (members === null) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return { ok: true, data: members };
  })
  .post("/:tripId/end", async ({ params: { tripId }, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const parsed = endTripSchema.safeParse(body);
    if (!parsed.success) {
      set.status = 400;
      return {
        ok: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const result = await endTrip(tripId, currentUser.id, parsed.data.status);
    if (!result.ok) {
      set.status = result.status;
      return { ok: false, message: result.message };
    }

    const data: EndTripResponseDto = {
      id: result.id,
      status: result.status,
      endedAt: result.endedAt,
    };
    return { ok: true, data };
  })
  .get("/:tripId/ratings", async ({ params: { tripId }, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const list = await getTripRatings(tripId, currentUser.id);
    if (list === null) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return { ok: true, data: list };
  })
  .post("/:tripId/ratings", async ({ params: { tripId }, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const parsed = createRatingSchema.safeParse(body);
    if (!parsed.success) {
      set.status = 400;
      return {
        ok: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const result = await createRating(tripId, currentUser.id, parsed.data);
    if (!result.ok) {
      set.status = result.status;
      return { ok: false, message: result.message };
    }

    const data: CreateRatingResponseDto = result.data;
    return { ok: true, data };
  })
  .get("/:tripId", async ({ params: { tripId }, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const detail = await getTripById(tripId, currentUser.id);
    if (!detail) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return { ok: true, data: detail };
  });
