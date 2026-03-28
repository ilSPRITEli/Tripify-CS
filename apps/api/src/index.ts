import { Elysia } from "elysia";
import { prisma } from "./lib/prisma";

export const app = new Elysia()
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
  .listen(4000);

export type App = typeof app;
console.log(`🦊 Elysia is running on ${app.server?.url}`);
