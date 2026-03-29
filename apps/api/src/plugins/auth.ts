import { bearer } from "@elysiajs/bearer";
import { Elysia } from "elysia";
import { prisma } from "../lib/prisma.js";
import { supabase } from "../lib/supabase.js";

export const authPlugin = new Elysia({ name: "auth" })
  .use(bearer())
  .derive({ as: "scoped" }, async ({ bearer, set }) => {
    if (!bearer) {
      return { currentUser: null, authUser: null };
    }

    const { data, error } = await supabase.auth.getUser(bearer);

    if (error || !data.user) {
      set.status = 401;
      return { currentUser: null, authUser: null };
    }

    const authUser = data.user;

    const currentUser = await prisma.user.upsert({
      where: {
        supabaseAuthId: authUser.id,
      },
      update: {
        email: authUser.email ?? "",
        fullName:
          authUser.user_metadata?.full_name ??
          authUser.user_metadata?.name ??
          "Unknown User",
        avatarUrl:
          authUser.user_metadata?.avatar_url ??
          authUser.user_metadata?.picture ??
          null,
        providerSubject: authUser.user_metadata?.sub ?? null,
      },
      create: {
        supabaseAuthId: authUser.id,
        email: authUser.email ?? "",
        fullName:
          authUser.user_metadata?.full_name ??
          authUser.user_metadata?.name ??
          "Unknown User",
        avatarUrl:
          authUser.user_metadata?.avatar_url ??
          authUser.user_metadata?.picture ??
          null,
        provider: "GOOGLE",
        providerSubject: authUser.user_metadata?.sub ?? null,
      },
    });

    return { currentUser, authUser };
  });
