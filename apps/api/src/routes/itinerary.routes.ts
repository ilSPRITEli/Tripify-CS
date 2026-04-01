import {
  createItineraryItemSchema,
  updateItineraryItemSchema,
  updateTripDaySchema,
} from "@repo/shared/itinerary-schema";
import { Elysia } from "elysia";
import { authPlugin } from "../plugins/auth";
import {
  createItineraryItem,
  deleteItineraryItem,
  updateItineraryItem,
  updateTripDay,
} from "../services/trip.service";

const tripDaysRoutes = new Elysia({
  name: "trip-days-routes",
  prefix: "/trip-days",
})
  .use(authPlugin)
  .patch("/:tripDayId", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const parsed = updateTripDaySchema.safeParse(body);
    if (!parsed.success) {
      set.status = 400;
      return {
        ok: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const day = await updateTripDay(
      params.tripDayId,
      currentUser.id,
      parsed.data,
    );
    if (!day) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return {
      ok: true,
      data: { id: day.id, title: day.title },
    };
  })
  .post("/:tripDayId/items", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const parsed = createItineraryItemSchema.safeParse(body);
    if (!parsed.success) {
      set.status = 400;
      return {
        ok: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const item = await createItineraryItem(
      params.tripDayId,
      currentUser.id,
      parsed.data,
    );
    if (!item) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return {
      ok: true,
      data: { id: item.id, title: item.title },
    };
  });

const itineraryItemsRoutes = new Elysia({
  name: "itinerary-items-routes",
  prefix: "/itinerary-items",
})
  .use(authPlugin)
  .patch("/:itemId", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const parsed = updateItineraryItemSchema.safeParse(body);
    if (!parsed.success) {
      set.status = 400;
      return {
        ok: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const item = await updateItineraryItem(
      params.itemId,
      currentUser.id,
      parsed.data,
    );
    if (!item) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return {
      ok: true,
      data: { id: item.id, title: item.title },
    };
  })
  .delete("/:itemId", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const result = await deleteItineraryItem(params.itemId, currentUser.id);
    if (!result) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return { ok: true, data: { id: result.id } };
  });

export const itineraryRoutes = new Elysia({ name: "itinerary" })
  .use(tripDaysRoutes)
  .use(itineraryItemsRoutes);
