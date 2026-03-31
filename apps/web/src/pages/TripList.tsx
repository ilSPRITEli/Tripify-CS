import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import {
  TRIP_STATUS,
  type TripListItemDto,
  type TripStatus,
} from "@repo/shared";
import { Calendar, Crown, LayoutTemplate, MapPin, Plus } from "lucide-react";
import { motion } from "motion/react";
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

const statusConfig: Partial<
  Record<TripStatus, { label: string; className: string }>
> = {
  ACTIVE: {
    label: "Active",
    className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  },
  DRAFT: { label: "Draft", className: "bg-muted text-muted-foreground" },
  COMPLETED: { label: "Completed", className: "bg-primary/10 text-primary" },
  ENDED_EARLY: {
    label: "Ended early",
    className: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
  },
  ARCHIVED: { label: "Archived", className: "bg-muted text-muted-foreground" },
  CANCELLED: {
    label: "Cancelled",
    className: "bg-destructive/10 text-destructive",
  },
};

function TripCard({ trip, index }: { trip: TripListItemDto; index: number }) {
  const sc = statusConfig[trip.status];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
    >
      <Link
        to={`/trips/${trip.id}`}
        className="group block rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/20 hover:shadow-elevated"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-semibold",
              sc?.className ?? "bg-muted text-muted-foreground",
            )}
          >
            {sc?.label ?? trip.status.replaceAll("_", " ")}
          </span>
          {trip.isTemplatePublished ? (
            <span className="text-accent-foreground flex items-center gap-1 rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold">
              <LayoutTemplate className="h-3 w-3" />
              Template
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-primary">
          {trip.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {trip.destination}
            {trip.destinationCountry ? `, ${trip.destinationCountry}` : null}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            {new Date(trip.startDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
            {" — "}
            {new Date(trip.endDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Crown className="h-3.5 w-3.5" />
          {trip.owner.fullName}
        </div>
      </Link>
    </motion.div>
  );
}

export default function TripList() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const statusParam = (searchParams.get("status") ?? "") as ListFilter;

  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState<TripListItemDto[]>([]);

  const load = useCallback(async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) {
      navigate("/", { replace: true });
      return;
    }

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
  }, [navigate, statusParam]);

  useEffect(() => {
    void load();
  }, [load]);

  const setFilter = (value: ListFilter) => {
    if (value === "") {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ status: value }, { replace: true });
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Trips</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Plan, manage, and track your adventures
          </p>
        </div>
        <Button asChild className="shrink-0 gap-2 rounded-full shadow-card">
          <Link to="/trips/create">
            <Plus className="h-4 w-4" />
            Create trip
          </Link>
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => setFilter(opt.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              statusParam === opt.value
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-muted-foreground mt-10 text-sm">Loading trips…</p>
      ) : trips.length === 0 ? (
        <div className="mt-16 text-center">
          <div className="bg-muted/60 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl shadow-card">
            <MapPin className="text-muted-foreground h-9 w-9" />
          </div>
          <h3 className="mt-6 text-lg font-semibold">No trips yet</h3>
          <p className="text-muted-foreground mt-1 text-sm">
            Create your first trip to start planning.
          </p>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/trips/create">Create trip</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {trips.map((trip, i) => (
            <TripCard key={trip.id} trip={trip} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
