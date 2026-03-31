import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Signing you in...");

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        setMessage(error.message);
        return;
      }

      if (!data.session) {
        setMessage("No session found. Try signing in again.");
        return;
      }

      const res = await api.auth.me.get();
      const payload = res.data;

      if (res.error || !payload || payload.ok !== true || !("data" in payload)) {
        const fromBody =
          payload &&
          "message" in payload &&
          typeof payload.message === "string"
            ? payload.message
            : null;
        setMessage(
          fromBody ?? "Could not verify your account with the API",
        );
        return;
      }

      navigate("/dashboard", { replace: true });
    };

    void run();
  }, [navigate]);

  const showRetry = message !== "Signing you in...";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4">
      <p className="text-muted-foreground text-center text-sm">{message}</p>
      {showRetry ? (
        <Link
          to="/login"
          className="text-primary text-sm font-medium underline underline-offset-4"
        >
          Back to sign in
        </Link>
      ) : null}
    </div>
  );
}