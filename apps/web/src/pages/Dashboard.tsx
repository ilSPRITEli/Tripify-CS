import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/api";
import { signOut } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { LogOut, User } from "lucide-react";

type MeData = {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  username: string | null;
  supabaseAuthId: string;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState<MeData | null>(null);
  const [authEmail, setAuthEmail] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/", { replace: true });
        return;
      }

      setAuthEmail(sessionData.session.user.email ?? null);

      const res = await api.auth.me.get();
      const payload = res.data;
      if (
        res.error ||
        !payload ||
        payload.ok !== true ||
        !("data" in payload) ||
        !payload.data
      ) {
        setMe(null);
        if (res.error) {
          toast.error("Could not load your profile");
        }
      } else {
        setMe(payload.data);
      }
      setLoading(false);
    };

    void init();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/", { replace: true });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Sign out failed");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-muted/20 to-background px-4 py-10">
      <div className="mx-auto w-full max-w-lg">
        <Card className="border-border/50 shadow-elevated">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <User className="text-primary h-5 w-5" />
              Your account
            </CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => void handleLogout()}
            >
              <LogOut className="h-4 w-4" />
              Log out
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {me ? (
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground font-medium">Name</dt>
                  <dd className="text-foreground mt-0.5">{me.fullName}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground font-medium">Email</dt>
                  <dd className="text-foreground mt-0.5">{me.email}</dd>
                </div>
                {me.username ? (
                  <div>
                    <dt className="text-muted-foreground font-medium">
                      Username
                    </dt>
                    <dd className="text-foreground mt-0.5">{me.username}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-muted-foreground font-medium">User ID</dt>
                  <dd className="text-foreground mt-0.5 font-mono text-xs">
                    {me.id}
                  </dd>
                </div>
                {me.avatarUrl ? (
                  <div>
                    <dt className="text-muted-foreground mb-1 font-medium">
                      Avatar
                    </dt>
                    <dd>
                      <img
                        src={me.avatarUrl}
                        alt=""
                        className="h-16 w-16 rounded-full object-cover ring-2 ring-border"
                      />
                    </dd>
                  </div>
                ) : null}
              </dl>
            ) : (
              <p className="text-muted-foreground text-sm">
                Signed in as{" "}
                <span className="text-foreground font-medium">
                  {authEmail ?? "—"}
                </span>
                . Profile from the API is not available yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
