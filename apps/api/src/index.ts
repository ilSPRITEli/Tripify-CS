import app from "./app.js";

// Vercel invokes the app via default export; do not call listen() in serverless (Bun.serve unsupported there).
if (!process.env.VERCEL) {
  const port = Number(process.env.PORT) || 4000;
  app.listen(port);
  console.log(`🦊 Elysia is running on ${app.server?.url}`);
}

export default app;
