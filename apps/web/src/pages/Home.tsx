import logo from "@/assets/icons.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { signInWithGoogle } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { MapPin, Plane } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/dashboard", { replace: true });
      }
    };

    void check();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        if (session) {
          navigate("/dashboard", { replace: true });
        }
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Sign-in failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-background via-muted/30 to-background px-4">
      <motion.div
        className="absolute top-20 left-10 text-primary/10"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Plane className="h-16 w-16" />
      </motion.div>
      <motion.div
        className="absolute right-10 bottom-20 text-accent/15"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <MapPin className="h-12 w-12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-border/50 shadow-elevated backdrop-blur-sm">
          <CardContent className="flex flex-col items-center gap-6 px-8 pt-10 pb-10">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl">
                <img src={logo} alt="Tripify" width={56} height={56} />
              </div>
              <h1 className="text-foreground text-2xl font-bold tracking-tight">
                Welcome to Tripify
              </h1>
              <p className="text-muted-foreground max-w-xs text-center text-sm">
                Plan trips, invite friends, and explore the world together.
              </p>
            </div>

            <Button
              type="button"
              onClick={() => void handleGoogleSignIn()}
              variant="outline"
              size="lg"
              className="h-12 w-full gap-3 text-base font-medium"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>

            <p className="text-muted-foreground text-center text-xs">
              By signing in, you agree to our{" "}
              <span className="cursor-pointer underline">Terms</span> and{" "}
              <span className="cursor-pointer underline">Privacy Policy</span>.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
