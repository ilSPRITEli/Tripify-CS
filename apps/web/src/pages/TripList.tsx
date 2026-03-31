import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";
import { TRIP_STATUS, type TripListItemDto, type TripStatus } from "@repo/shared";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { CalendarRange, LayoutGrid, MapPin, Plus } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

type ListFilter = "" | TripStatus;

const FILTER_OPTIONS: { label: string; value: ListFilter }[] = [
  { label: "All", value: "" },
  { label: "Draft", value: "DRAFT" },
  { label: "Active", value: "ACTIVE" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Ended early", value: "ENDED_EARLY" },
];

function statusBadgeClass(status: TripStatus) {
  const map: Partial<Record<TripStatus, string>> = {
    DRAFT: "bg-muted text-muted-foreground",
    ACTIVE: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    COMPLETED: "bg-primary/15 text-primary",
    ENDED_EARLY: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
    ARCHIVED: "bg-muted text-muted-foreground",
    CANCELLED: "bg-destructive/10 text-destructive",
  };
  return map[status] ?? "bg-muted text-muted-foreground";
}

export default function TripList() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const statusParam = (searchParams.get("status") ?? "") as ListFilter;

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState<TripListItemDto[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    const query: { status?: string } = {};
    if (
      statusParam !== "" &&
      (TRIP_STATUS as readonly string[]).includes(statusParam)
    ) {
      query.status = statusParam;
    }

    const res = await api.trips.get({ query });
    const payload = res.data;

    if (
      res.error ||
      !payload ||
      payload.ok !== true ||
      !("data" in payload) ||
      !Array.isArray(payload.data)
    ) {
      setTrips([]);
      toast.error("Could not load trips");
    } else {
      setTrips(payload.data);
    }
    setLoading(false);
  }, [statusParam]);

  useEffect(() => {
    const run = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/", { replace: true });
        return;
      }
      setReady(true);
    };
    void run();
  }, [navigate]);

  useEffect(() => {
    if (!ready) return;
    void load();
  }, [ready, load]);

  const setFilter = (value: ListFilter) => {
    if (value === "") {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ status: value }, { replace: true });
    }
  };

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-muted/15 to-background px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/dashboard"
              className="text-muted-foreground hover:text-foreground mb-2 inline-block text-sm"
            >
              ← Account
            </Link>
            <h1 className="text-foreground flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <LayoutGrid className="text-primary h-7 w-7" />
              My trips
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Trips you own or are a member of.
            </p>
          </div>
          <Button asChild className="shrink-0 gap-2 self-start sm:self-auto">
            <Link to="/trips/create">
              <Plus className="h-4 w-4" />
              New trip
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((opt) => (
            <Button
              key={opt.label}
              type="button"
              size="sm"
              variant={statusParam === opt.value ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setFilter(opt.value)}
            >
              {opt.label}
            </Button>
          ))}
        </div>

        {loading ? (
          <p className="text-muted-foreground text-sm">Loading trips…</p>
        ) : trips.length === 0 ? (
          <Card className="border-border/50 shadow-elevated">
            <CardContent className="flex flex-col items-center gap-4 py-14 text-center">
              <p className="text-muted-foreground max-w-sm text-sm">
                No trips yet. Create one to start planning days and activities.
              </p>
              <Button asChild>
                <Link to="/trips/create">Create your first trip</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <ul className="space-y-3">
            {trips.map((trip) => (
              <li key={trip.id}>
                <Link to={`/trips/${trip.id}`} className="block">
                  <Card className="border-border/50 hover:border-primary/25 shadow-card transition-colors hover:shadow-elevated">
                    <CardContent className="p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-foreground truncate text-lg font-semibold">
                              {trip.title}
                            </h2>
                            <span
                              className={cn(
                                "rounded-full px-2.5 py-0.5 text-xs font-medium",
                                statusBadgeClass(trip.status),
                              )}
                            >
                              {trip.status.replaceAll("_", " ")}
                            </span>
                            {trip.isTemplatePublished ? (
                              <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
                                Template
                              </span>
                            ) : null}
                          </div>
                          <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="text-primary h-3.5 w-3.5 shrink-0" />
                              {trip.destination}
                              {trip.destinationCountry
                                ? ` · ${trip.destinationCountry}`
                                : null}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <CalendarRange className="h-3.5 w-3.5 shrink-0" />
                              {trip.startDate.slice(0, 10)} →{" "}
                              {trip.endDate.slice(0, 10)}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-xs">
                            Owner:{" "}
                            <span className="text-foreground font-medium">
                              {trip.owner.fullName}
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
