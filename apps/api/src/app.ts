import type { AuthMeDto } from "@repo/shared";
import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { prisma } from "./lib/prisma";
import { authPlugin } from "./plugins/auth";

const app = new Elysia()
  .use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
    }),
  )
  .use(authPlugin)
  .get("/health", () => ({
    ok: true,
    message: "API is running",
  }))
  .get("/db-check", async ({ set }) => {
    try {
      const userCount = await prisma.user.count();

      return {
        ok: true,
        message: "Database connection is working",
        data: {
          userCount,
        },
      };
    } catch (error) {
      set.status = 500;

      return {
        ok: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  })
  .get("/auth/me", ({ set, currentUser, authUser }) => {
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

export default app;
export type App = typeof app;
