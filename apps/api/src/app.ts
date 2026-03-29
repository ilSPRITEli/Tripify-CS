import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { prisma } from "./lib/prisma.js";
import { authPlugin } from "./plugins/auth.js";

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

    return {
      ok: true,
      data: {
        id: currentUser.id,
        email: currentUser.email,
        fullName: currentUser.fullName,
        avatarUrl: currentUser.avatarUrl,
        username: currentUser.username,
        supabaseAuthId: currentUser.supabaseAuthId,
      },
    };
  });

export default app;
export type App = typeof app;
