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
import { FcGoogle } from "react-icons/fc";
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
              <FcGoogle className="size-5" />
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
