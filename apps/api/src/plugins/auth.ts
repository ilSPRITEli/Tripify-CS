import { bearer } from "@elysiajs/bearer";
import { Elysia } from "elysia";
import { supabase } from "../lib/supabase";
import { upsertAuthUser } from "../services/auth.service";

export const authPlugin = new Elysia({ name: "auth" })
  .use(bearer())
  .derive({ as: "global" }, async ({ bearer, set }) => {
    if (!bearer) {
      return { currentUser: null, authUser: null };
    }

    const { data, error } = await supabase.auth.getUser(bearer);

    if (error || !data.user) {
      set.status = 401;
      return { currentUser: null, authUser: null };
    }

    const authUser = data.user;

    const currentUser = await upsertAuthUser(authUser);

    return { currentUser, authUser };
  });
