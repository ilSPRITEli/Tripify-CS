import type { AuthMeDto } from "@repo/shared";
import { Elysia } from "elysia";
import { authPlugin } from "../plugins/auth";

export const authRoutes = new Elysia({ name: "auth-routes", prefix: "/auth" })
  .use(authPlugin)
  .get("/me", ({ set, currentUser, authUser }) => {
    if (!currentUser || !authUser) {
      set.status = 401;
      return {
        ok: false,
        message: "Unauthorized",
      };
    }

    const data: AuthMeDto = {
      id: currentUser.id,
      supabaseAuthId: currentUser.supabaseAuthId,
      email: currentUser.email,
      fullName: currentUser.fullName,
      avatarUrl: currentUser.avatarUrl,
      username: currentUser.username,
      bio: currentUser.bio,
      country: currentUser.country,
    };

    return { ok: true, data };
  });
