import { Elysia } from "elysia";
import { authPlugin } from "../plugins/auth";

export const tripsRoutes = new Elysia({
  name: "trips-routes",
  prefix: "/trips",
})
  .use(authPlugin)
  .get("/", () => ({
    ok: true,
    message: "API is running",
  }));
// .post("/", async ({ body, currentUser, set }) => {
//   if (!currentUser) {
//     set.status = 401;
//     return { ok: false, message: "Unauthorized" };
//   }

//   const parsed = createTripSchema.safeParse(body);
//   if (!parsed.success) {
//     set.status = 400;
//     return {
//       ok: false,
//       message: "Validation failed",
//       errors: parsed.error.flatten().fieldErrors,
//     };
//   }

//   const created = await createTrip(currentUser.id, parsed.data);
//   const data: CreateTripResponseDto = {
//     id: created.id,
//     title: created.title,
//     status: created.status as CreateTripResponseDto["status"],
//   };

//   return { ok: true, data };
// })
// .get("/", async ({ query, currentUser, set }) => {
//   if (!currentUser) {
//     set.status = 401;
//     return { ok: false, message: "Unauthorized" };
//   }

//   const statusRaw = query.status;
//   let status: TripStatus | undefined;
//   if (
//     typeof statusRaw === "string" &&
//     (TRIP_STATUS as readonly string[]).includes(statusRaw)
//   ) {
//     status = statusRaw as TripStatus;
//   }

//   const pub = query.isTemplatePublished;
//   let isTemplatePublished: boolean | undefined;
//   if (pub === "true") {
//     isTemplatePublished = true;
//   } else if (pub === "false") {
//     isTemplatePublished = false;
//   }

//   const data = await getMyTrips(currentUser.id, {
//     ...(status ? { status } : {}),
//     ...(isTemplatePublished !== undefined ? { isTemplatePublished } : {}),
//   });

//   return { ok: true, data };
// })
// .get("/:tripId", async ({ params: { tripId }, currentUser, set }) => {
//   if (!currentUser) {
//     set.status = 401;
//     return { ok: false, message: "Unauthorized" };
//   }

//   const detail = await getTripById(tripId, currentUser.id);
//   if (!detail) {
//     set.status = 404;
//     return { ok: false, message: "Not found" };
//   }

//   return { ok: true, data: detail };
// });
