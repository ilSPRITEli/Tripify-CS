import type { ApiResponse } from "./api-response";

export type AuthMeDto = {
  id: string;
  supabaseAuthId: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  username: string | null;
  bio: string | null;
  country: string | null;
};

export type AuthMeResponse = ApiResponse<AuthMeDto>;
