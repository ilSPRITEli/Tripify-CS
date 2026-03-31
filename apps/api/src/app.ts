import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { prisma } from "./lib/prisma";
import { authRoutes } from "./routes/auth.routes";
import { tripsRoutes } from "./routes/trips.routes";

const app = new Elysia()
  .use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
    }),
  )
  .use(authRoutes)
  .use(tripsRoutes)
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
  });

export default app;
export type App = typeof app;
