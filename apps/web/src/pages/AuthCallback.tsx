import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function AuthCallback() {
  const [message, setMessage] = useState("Signing you in...");

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        setMessage(error.message);
        return;
      }

      if (!data.session) {
        setMessage("No session found");
        return;
      }

      window.location.href = "/";
    };

    void run();
  }, []);

  return <div>{message}</div>;
}
