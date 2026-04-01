import type { CreateTripResponseDto } from "@repo/shared";
import { cloneTemplateSchema } from "@repo/shared/template-schema";
import { Elysia } from "elysia";
import { authPlugin } from "../plugins/auth";
import {
  cloneTemplate,
  getTemplateById,
  getTemplates,
} from "../services/template.service";

export const templatesRoutes = new Elysia({
  name: "templates-routes",
  prefix: "/templates",
})
  .use(authPlugin)
  .get("/", async ({ query }) => {
    const destinationCountry =
      typeof query.destinationCountry === "string"
        ? query.destinationCountry
        : undefined;
    const q = typeof query.q === "string" ? query.q : undefined;

    const data = await getTemplates({
      ...(destinationCountry ? { destinationCountry } : {}),
      ...(q ? { q } : {}),
    });

    return { ok: true, data };
  })
  .get("/:tripId", async ({ params, set }) => {
    const detail = await getTemplateById(params.tripId);
    if (!detail) {
      set.status = 404;
      return { ok: false, message: "Not found" };
    }

    return { ok: true, data: detail };
  })
  .post("/:tripId/clone", async ({ params, body, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const parsed = cloneTemplateSchema.safeParse(body);
    if (!parsed.success) {
      set.status = 400;
      return {
        ok: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const result = await cloneTemplate(
      params.tripId,
      currentUser.id,
      parsed.data,
    );
    if (!result.ok) {
      set.status = result.status;
      return { ok: false, message: result.message };
    }

    const data: CreateTripResponseDto = {
      id: result.id,
      title: result.title,
      status: "DRAFT",
    };

    return { ok: true, data };
  });
