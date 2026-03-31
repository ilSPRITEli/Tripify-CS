import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { Plane } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Signing you in…");

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

      if (
        res.error ||
        !payload ||
        payload.ok !== true ||
        !("data" in payload)
      ) {
        const fromBody =
          payload && "message" in payload && typeof payload.message === "string"
            ? payload.message
            : null;
        setMessage(fromBody ?? "Could not verify your account with the API");
        return;
      }

      navigate("/trips", { replace: true });
    };

    void run();
  }, [navigate]);

  const showRetry = message !== "Signing you in…";

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-sm"
      >
        <Card className="rounded-2xl border-border/60 shadow-elevated">
          <CardContent className="flex flex-col items-center gap-6 px-8 py-10 text-center">
            <div className="gradient-primary flex h-14 w-14 items-center justify-center rounded-xl shadow-sm">
              <Plane className="text-primary-foreground h-7 w-7" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {message}
            </p>
            {showRetry ? (
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/">Back to sign in</Link>
              </Button>
            ) : null}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
