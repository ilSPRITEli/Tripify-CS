import { treaty } from "@elysiajs/eden/treaty2";
import type { Treaty } from "@elysiajs/eden/treaty2";
import type { App } from "../../../api/src/app";
import { supabase } from "./supabase";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("VITE_API_URL is not set");
}

/**
 * Eden Treaty: for non-2xx responses, `data` is null and the parsed JSON body is
 * on `error.value`. Use this when reading `message` (or other fields) from errors.
 */
export function treatyResponseBody(res: {
  data: unknown;
  error?: unknown;
}): unknown {
  if (res.data != null) return res.data;
  const e = res.error;
  if (e != null && typeof e === "object" && "value" in e) {
    return (e as { value: unknown }).value;
  }
  return null;
}

export const api = treaty<App>(apiUrl, {
  async onRequest(_path, options) {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;

    if (token) {
      options.headers = {
        ...options.headers,
        authorization: `Bearer ${token}`,
      };
    }

    return options;
  },
});

type ItineraryErrBody = { ok: boolean; message?: string };

/** Eden’s `App` typing omits hyphenated path keys; this is the same client as `api`. */
export const itineraryApi = api as unknown as {
  "trip-days": (params: { tripDayId: string }) => {
    patch: (body: {
      title?: string | null;
      note?: string | null;
    }) => Promise<Treaty.TreatyResponse<ItineraryErrBody>>;
    items: {
      post: (body: Record<string, unknown>) => Promise<
        Treaty.TreatyResponse<ItineraryErrBody>
      >;
    };
  };
  "itinerary-items": (params: { itemId: string }) => {
    patch: (body: Record<string, unknown>) => Promise<
      Treaty.TreatyResponse<ItineraryErrBody>
    >;
    delete: (body?: Record<string, unknown>) => Promise<
      Treaty.TreatyResponse<ItineraryErrBody>
    >;
  };
};
