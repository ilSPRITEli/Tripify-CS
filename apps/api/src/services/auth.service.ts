import type { User as SupabaseAuthUser } from "@supabase/supabase-js";
import type { User } from "../generated/prisma";
import { prisma } from "../lib/prisma";

export async function upsertAuthUser(
  authUser: SupabaseAuthUser,
): Promise<User> {
  return prisma.user.upsert({
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
}
