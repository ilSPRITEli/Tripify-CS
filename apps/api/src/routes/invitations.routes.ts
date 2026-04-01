import {
  INVITATION_STATUS,
  type InvitationActionResponseDto,
  type InvitationStatus,
} from "@repo/shared";
import { Elysia } from "elysia";
import { authPlugin } from "../plugins/auth";
import {
  acceptInvitation,
  declineInvitation,
  getInvitations,
} from "../services/invitation.service";

export const invitationsRoutes = new Elysia({
  name: "invitations-routes",
  prefix: "/invitations",
})
  .use(authPlugin)
  .get("/", async ({ query, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const typeRaw = query.type;
    let type: "received" | "sent" | undefined;
    if (typeRaw === "received" || typeRaw === "sent") {
      type = typeRaw;
    }

    const statusRaw = query.status;
    let status: InvitationStatus | undefined;
    if (
      typeof statusRaw === "string" &&
      (INVITATION_STATUS as readonly string[]).includes(statusRaw)
    ) {
      status = statusRaw as InvitationStatus;
    }

    const data = await getInvitations(currentUser.id, {
      ...(status ? { status } : {}),
      ...(type ? { type } : {}),
    });

    return { ok: true, data };
  })
  .post("/:invitationId/accept", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const result = await acceptInvitation(
      params.invitationId,
      currentUser.id,
    );
    if (!result.ok) {
      set.status = result.status;
      return { ok: false, message: result.message };
    }

    const data: InvitationActionResponseDto = {
      id: result.id,
      status: result.status,
    };
    return { ok: true, data };
  })
  .post("/:invitationId/decline", async ({ params, currentUser, set }) => {
    if (!currentUser) {
      set.status = 401;
      return { ok: false, message: "Unauthorized" };
    }

    const result = await declineInvitation(
      params.invitationId,
      currentUser.id,
    );
    if (!result.ok) {
      set.status = result.status;
      return { ok: false, message: result.message };
    }

    const data: InvitationActionResponseDto = {
      id: result.id,
      status: result.status,
    };
    return { ok: true, data };
  });
