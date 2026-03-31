import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import type {
  ItineraryItemDto,
  TripDayDto,
  TripDetailDto,
  TripStatus,
} from "@repo/shared";
import {
  ArrowLeft,
  CalendarRange,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Crown,
  DollarSign,
  MapPin,
  StickyNote,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const statusStyle: Partial<
  Record<TripStatus, { label: string; className: string }>
> = {
  DRAFT: { label: "Draft", className: "bg-muted text-muted-foreground" },
  ACTIVE: {
    label: "Active",
    className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  },
  COMPLETED: { label: "Completed", className: "bg-primary/15 text-primary" },
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

function formatTime(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ItemRow({ item }: { item: ItineraryItemDto }) {
  const start = formatTime(item.startTime);
  const end = formatTime(item.endTime);
  const timeRange =
    start && end ? `${start} – ${end}` : start ?? end ?? null;

  return (
    <div className="group relative ml-6 border-l-2 border-primary/20 pb-6 pl-6 last:pb-0">
      <div className="bg-primary absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 border-background" />
      <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-foreground font-semibold">{item.title}</h4>
              {item.isCompleted ? (
                <Check className="h-4 w-4 shrink-0 text-emerald-500" />
              ) : null}
            </div>
            {item.description ? (
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {item.description}
              </p>
            ) : null}
          </div>
        </div>
        <div className="text-muted-foreground mt-3 flex flex-wrap gap-3 text-xs">
          {item.placeName ? (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {item.placeName}
            </span>
          ) : null}
          {timeRange ? (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {timeRange}
            </span>
          ) : null}
          {item.estimatedCost != null && item.estimatedCost > 0 ? (
            <span className="flex items-center gap-1">
              <DollarSign className="h-3 w-3" />
              {item.estimatedCost.toLocaleString()}{" "}
              {item.currency ?? "THB"}
            </span>
          ) : null}
        </div>
        {item.note ? (
          <div className="text-muted-foreground mt-2 flex items-start gap-1.5 text-xs">
            <StickyNote className="mt-0.5 h-3 w-3 shrink-0" />
            {item.note}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DaySection({ day }: { day: TripDayDto }) {
  const [expanded, setExpanded] = useState(true);
  const weekday = useMemo(
    () =>
      new Date(day.date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    [day.date],
  );

  return (
    <div className="rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary/15 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold">
            D{day.dayNumber}
          </div>
          <div>
            <h3 className="text-foreground font-semibold">
              {day.title ?? `Day ${day.dayNumber}`}
            </h3>
            <p className="text-muted-foreground text-xs">{weekday}</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="text-muted-foreground h-5 w-5 shrink-0" />
        ) : (
          <ChevronDown className="text-muted-foreground h-5 w-5 shrink-0" />
        )}
      </button>
      {day.note ? (
        <p className="text-muted-foreground mt-2 ml-[52px] text-sm">{day.note}</p>
      ) : null}
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              {day.items.length === 0 ? (
                <p className="text-muted-foreground ml-6 text-sm">
                  No activities yet.
                </p>
              ) : (
                day.items.map((item) => <ItemRow key={item.id} item={item} />)
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function TripDetail() {
  const { tripId } = useParams<{ tripId: string }>();
  const navigate = useNavigate();
  const [trip, setTrip] = useState<TripDetailDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      if (!tripId) {
        navigate("/trips", { replace: true });
        return;
      }

      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/", { replace: true });
        return;
      }

      const res = await api.trips({ tripId }).get();
      const payload = res.data;

      if (
        res.error ||
        !payload ||
        payload.ok !== true ||
        !("data" in payload) ||
        !payload.data
      ) {
        setTrip(null);
        if (payload && "message" in payload) {
          toast.error(
            typeof payload.message === "string"
              ? payload.message
              : "Trip not found",
          );
        } else {
          toast.error("Trip not found");
        }
      } else {
        setTrip(payload.data);
      }
      setLoading(false);
    };

    void run();
  }, [tripId, navigate]);

  const sc = trip ? statusStyle[trip.status] : null;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground text-sm">Loading trip…</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4">
        <p className="text-muted-foreground text-sm">
          This trip is unavailable.
        </p>
        <Button asChild variant="outline">
          <Link to="/trips">Back to my trips</Link>
        </Button>
      </div>
    );
  }

  const budgetLabel =
    trip.budgetTotal != null
      ? `${trip.budgetTotal.toLocaleString()} (budget)`
      : null;

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-muted/15 to-background px-4 py-10">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <Link
          to="/trips"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          My trips
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-8"
        >
          <div className="gradient-hero text-primary-foreground rounded-2xl p-8 shadow-elevated">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-primary-foreground ring-1 ring-white/25 backdrop-blur-sm">
                    {sc?.label ?? trip.status.replaceAll("_", " ")}
                  </span>
                  {trip.isTemplatePublished ? (
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium ring-1 ring-white/25">
                      Published template
                    </span>
                  ) : null}
                </div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {trip.title}
                </h1>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-95">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {trip.destination}
                    {trip.destinationCity
                      ? ` · ${trip.destinationCity}`
                      : null}
                    {trip.destinationCountry
                      ? ` · ${trip.destinationCountry}`
                      : null}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarRange className="h-4 w-4 shrink-0" />
                    {trip.startDate.slice(0, 10)} → {trip.endDate.slice(0, 10)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 shrink-0" />
                    {trip.travelerCount} travelers
                  </span>
                  {budgetLabel ? (
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 shrink-0" />
                      {budgetLabel}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            <div className="space-y-4">
              {trip.description ? (
                <Card className="border-border/50">
                  <CardContent className="text-foreground/90 p-5 text-sm leading-relaxed">
                    {trip.description}
                  </CardContent>
                </Card>
              ) : null}

              <div>
                <h2 className="text-foreground mb-4 text-sm font-semibold tracking-wide uppercase">
                  Itinerary
                </h2>
                <div className="space-y-4">
                  {trip.days.map((day) => (
                    <DaySection key={day.id} day={day} />
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-foreground flex items-center gap-2 font-semibold">
                  <Users className="h-4 w-4" />
                  Members ({trip.members.length})
                </h3>
                <ul className="mt-4 space-y-3">
                  {trip.members.map((m) => (
                    <li key={m.id} className="flex items-center gap-3">
                      {m.user.avatarUrl ? (
                        <img
                          src={m.user.avatarUrl}
                          alt=""
                          className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-border"
                        />
                      ) : (
                        <div className="bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                          {m.user.fullName.slice(0, 1).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {m.user.fullName}
                        </p>
                        {m.user.email ? (
                          <p className="text-muted-foreground truncate text-xs">
                            {m.user.email}
                          </p>
                        ) : null}
                      </div>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-semibold",
                          m.role === "OWNER"
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {m.role === "OWNER" ? (
                          <span className="inline-flex items-center gap-0.5">
                            <Crown className="h-3 w-3" />
                            Owner
                          </span>
                        ) : (
                          "Member"
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
