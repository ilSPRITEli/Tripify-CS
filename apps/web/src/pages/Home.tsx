import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { signInWithGoogle } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { MapPin, Plane, PlaneIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/icons.svg";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/trips", { replace: true });
      }
    };

    void check();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        if (session) {
          navigate("/trips", { replace: true });
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
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-muted),transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-primary)/8,transparent_45%)]" />

      <motion.div
        className="absolute top-16 left-[8%] text-primary/15 md:left-16"
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <PlaneIcon className="h-20 w-20 md:h-24 md:w-24" />
      </motion.div>
      <motion.div
        className="absolute right-[6%] bottom-24 text-accent/20 md:right-14"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <MapPin className="h-14 w-14 md:h-16 md:w-16" />
      </motion.div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-md"
        >
          <Card className="rounded-2xl border-border/60 shadow-elevated backdrop-blur-sm">
            <CardContent className="flex flex-col items-center gap-8 px-8 pt-12 pb-10">
              <div className="flex flex-col items-center gap-4 text-center">
                <img
                  src={Logo}
                  alt="Tripify"
                  className="h-20 w-20 md:h-24 md:w-24"
                />
                <div>
                  <h1 className="text-gradient-primary text-3xl font-bold tracking-tight">
                    Tripify
                  </h1>
                  <p className="text-muted-foreground mt-2 max-w-xs text-sm leading-relaxed">
                    Plan trips, invite friends, and explore the world together.
                  </p>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => void handleGoogleSignIn()}
                variant="outline"
                size="lg"
                className="h-12 w-full gap-3 rounded-xl text-base font-medium shadow-card"
              >
                <FcGoogle className="size-5" />
                Continue with Google
              </Button>

              <p className="text-muted-foreground text-center text-xs leading-relaxed">
                By signing in, you agree to our Terms and Privacy Policy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
