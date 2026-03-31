import logo from "@/assets/icons.svg";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { signOut } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import type { AuthMeDto } from "@repo/shared";
import {
  LayoutGrid,
  LayoutTemplate,
  LogOut,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    to: "/trips",
    label: "My Trips",
    icon: LayoutGrid,
    match: (p: string) => p === "/trips" || p.startsWith("/trips/"),
  },
  {
    to: "/invitations",
    label: "Invitations",
    icon: Mail,
    match: (p: string) => p.startsWith("/invitations"),
  },
  {
    to: "/templates",
    label: "Templates",
    icon: LayoutTemplate,
    match: (p: string) => p.startsWith("/templates"),
  },
] as const;

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [layoutReady, setLayoutReady] = useState(false);
  const [profile, setProfile] = useState<AuthMeDto | null>(null);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/", { replace: true });
        return;
      }
      setSessionEmail(data.session.user.email ?? null);
      const res = await api.auth.me.get();
      const payload = res.data;
      if (
        res.error ||
        !payload ||
        payload.ok !== true ||
        !("data" in payload) ||
        !payload.data
      ) {
        setProfile(null);
      } else {
        setProfile(payload.data);
      }
      setLayoutReady(true);
    };
    void load();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/", { replace: true });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Sign out failed");
    }
  };

  const displayName = profile?.fullName ?? sessionEmail ?? "Account";
  const avatarUrl = profile?.avatarUrl ?? null;

  if (!layoutReady) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-border bg-card/80 fixed w-full top-0 z-50 border-b backdrop-blur-lg">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8 min-w-0">
            <Link to="/trips" className="flex shrink-0 items-center gap-2">
              <img src={logo} alt="Tripify" className="h-8 w-8" />
              <span className="text-gradient-primary text-xl font-bold tracking-tight">
                Tripify
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = item.match(location.pathname);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="bg-muted flex max-w-[220px] items-center gap-2 rounded-full px-3 py-1.5">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt=""
                  className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-background"
                />
              ) : (
                <div className="bg-primary/15 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                  {displayName.slice(0, 1).toUpperCase()}
                </div>
              )}
              <span className="truncate text-sm font-medium">
                {displayName}
              </span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="text-muted-foreground"
              onClick={() => void handleLogout()}
              aria-label="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-border bg-card md:hidden border-t"
          >
            <nav className="container mx-auto px-4 flex flex-col gap-1 py-4">
              {navItems.map((item) => {
                const active = item.match(location.pathname);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-border mt-4 flex items-center gap-3 border-t pt-4">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt=""
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="bg-muted flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold">
                    {displayName.slice(0, 1).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{displayName}</p>
                  {sessionEmail ? (
                    <p className="text-muted-foreground truncate text-xs">
                      {sessionEmail}
                    </p>
                  ) : null}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => void handleLogout()}
                  aria-label="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </header>

      <main className="min-h-[calc(100vh-4rem)] mt-16">
        <Outlet />
      </main>
    </div>
  );
}
