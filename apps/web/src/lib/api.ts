import { treaty } from "@elysiajs/eden/treaty2";
import type { App } from "../../../api/src/app";
import { supabase } from "./supabase";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("VITE_API_URL is not set");
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
