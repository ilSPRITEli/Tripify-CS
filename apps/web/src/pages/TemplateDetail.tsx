import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api";
import type { TripDayDto, TripDetailDto } from "@repo/shared";
import {
  ArrowLeft,
  CalendarRange,
  ChevronDown,
  ChevronUp,
  Clock,
  Copy,
  Crown,
  DollarSign,
  MapPin,
  StickyNote,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function formatTime(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatYmd(value: string) {
  return value.slice(0, 10);
}

function TemplateItemRead({ item }: { item: TripDayDto["items"][number] }) {
  const start = formatTime(item.startTime);
  const end = formatTime(item.endTime);
  const timeRange = start && end ? `${start} – ${end}` : (start ?? end ?? null);

  return (
    <div className="relative ml-6 border-l-2 border-primary/20 pb-6 pl-6 last:pb-0">
      <div className="bg-primary absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 border-background" />
      <div className="border-border/80 rounded-xl border bg-card p-4">
        <h4 className="text-foreground font-semibold">{item.title}</h4>
        {item.description ? (
          <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
        ) : null}
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
              {item.estimatedCost.toLocaleString()} {item.currency ?? "THB"}
            </span>
          ) : null}
        </div>
        {item.note ? (
          <p className="text-muted-foreground mt-2 flex items-start gap-1 text-xs">
            <StickyNote className="mt-0.5 h-3 w-3 shrink-0" />
            {item.note}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function TemplateDayRead({ day }: { day: TripDayDto }) {
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
    <div className="border-border/80 shadow-card rounded-2xl border bg-card/70 p-5">
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
        <p className="text-muted-foreground mt-2 text-sm">{day.note}</p>
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
                  No activities in this template day.
                </p>
              ) : (
                day.items.map((item) => (
                  <TemplateItemRead key={item.id} item={item} />
                ))
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function extractMessage(payload: unknown, fallback: string): string {
  if (
    payload &&
    typeof payload === "object" &&
    "message" in payload &&
    typeof (payload as { message: unknown }).message === "string"
  ) {
    return (payload as { message: string }).message;
  }
  return fallback;
}

export default function TemplateDetail() {
  const { tripId } = useParams<{ tripId: string }>();
  const navigate = useNavigate();
  const [trip, setTrip] = useState<TripDetailDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [cloneOpen, setCloneOpen] = useState(false);
  const [cloneTitle, setCloneTitle] = useState("");
  const [cloneStart, setCloneStart] = useState("");
  const [cloneEnd, setCloneEnd] = useState("");
  const [cloneSaving, setCloneSaving] = useState(false);

  const load = useCallback(async () => {
    if (!tripId) return;
    const res = await api.templates({ tripId }).get();
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true ||
      !("data" in payload) ||
      !payload.data
    ) {
      setTrip(null);
      toast.error(extractMessage(payload, "Template not found"));
    } else {
      const d = payload.data as TripDetailDto;
      setTrip(d);
      setCloneTitle(`${d.title} (my copy)`);
      if (d.days.length > 0) {
        const len = d.days.length;
        const start = new Date(d.startDate);
        const end = new Date(start);
        end.setUTCDate(end.getUTCDate() + len - 1);
        setCloneStart(start.toISOString().slice(0, 10));
        setCloneEnd(end.toISOString().slice(0, 10));
      } else {
        setCloneStart(formatYmd(d.startDate));
        setCloneEnd(formatYmd(d.endDate));
      }
    }
    setLoading(false);
  }, [tripId]);

  useEffect(() => {
    void load();
  }, [load]);

  const submitClone = async () => {
    if (!tripId || !cloneTitle.trim() || !cloneStart || !cloneEnd) {
      toast.error("Fill in title and dates");
      return;
    }
    setCloneSaving(true);
    const res = await api.templates({ tripId }).clone.post({
      title: cloneTitle.trim(),
      startDate: `${cloneStart}T00:00:00.000Z`,
      endDate: `${cloneEnd}T00:00:00.000Z`,
    });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true ||
      !("data" in payload) ||
      !payload.data ||
      typeof payload.data !== "object" ||
      !("id" in payload.data)
    ) {
      toast.error(extractMessage(payload, "Could not clone"));
      setCloneSaving(false);
      return;
    }
    const id = (payload.data as { id: string }).id;
    toast.success("Trip created from template");
    setCloneOpen(false);
    setCloneSaving(false);
    navigate(`/trips/${id}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center gap-4 py-12">
        <p className="text-muted-foreground text-sm">Template unavailable.</p>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/templates">Back to templates</Link>
        </Button>
      </div>
    );
  }

  const owner = trip.members[0];
  const budgetLabel =
    trip.budgetTotal != null
      ? `${trip.budgetTotal.toLocaleString()} (budget)`
      : null;

  return (
    <div className="container mx-auto py-8">
      <Link
        to="/templates"
        className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Templates
      </Link>

      <div className="space-y-8">
        <div className="gradient-hero text-primary-foreground rounded-2xl p-8 shadow-elevated md:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold ring-1 ring-white/25">
                  Template
                </span>
                {trip.templateUseCount != null ? (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs ring-1 ring-white/25">
                    {trip.templateUseCount} uses
                  </span>
                ) : null}
              </div>
              <h1 className="text-3xl font-bold tracking-tight">{trip.title}</h1>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-95">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {trip.destination}
                  {trip.destinationCity ? ` · ${trip.destinationCity}` : null}
                  {trip.destinationCountry
                    ? ` · ${trip.destinationCountry}`
                    : null}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarRange className="h-4 w-4 shrink-0" />
                  {formatYmd(trip.startDate)} → {formatYmd(trip.endDate)}
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
              {owner ? (
                <p className="flex items-center gap-2 text-sm opacity-90">
                  <Crown className="h-4 w-4" />
                  by {owner.user.fullName}
                </p>
              ) : null}
            </div>
            <Button
              type="button"
              className="shrink-0 rounded-full bg-white text-primary hover:bg-white/90"
              onClick={() => setCloneOpen(true)}
            >
              <Copy className="mr-2 h-4 w-4" />
              Use template
            </Button>
          </div>
        </div>

        {trip.description ? (
          <Card className="border-border/60 shadow-card rounded-2xl">
            <CardContent className="text-foreground/90 p-5 text-sm leading-relaxed">
              {trip.description}
            </CardContent>
          </Card>
        ) : null}

        <div>
          <h2 className="text-foreground mb-4 text-sm font-semibold tracking-wide uppercase">
            Itinerary preview
          </h2>
          {trip.days.length > 0 ? (
            <p className="text-muted-foreground mb-4 text-sm">
              This template has <strong>{trip.days.length}</strong> day
              {trip.days.length === 1 ? "" : "s"}. When you clone, your new
              start and end dates must span exactly that many days.
            </p>
          ) : null}
          <div className="space-y-4">
            {trip.days.map((day) => (
              <TemplateDayRead key={day.id} day={day} />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={cloneOpen} onOpenChange={setCloneOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Clone template</DialogTitle>
            <DialogDescription>
              Creates a new trip in your account with this itinerary. Dates must
              cover exactly {trip.days.length || "the same number of"} day
              {trip.days.length === 1 ? "" : "s"} as the template
              {trip.days.length ? ` (${trip.days.length})` : ""}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="grid gap-2">
              <Label htmlFor="clone-title">Trip title</Label>
              <Input
                id="clone-title"
                value={cloneTitle}
                onChange={(e) => setCloneTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="clone-start">Start</Label>
                <Input
                  id="clone-start"
                  type="date"
                  value={cloneStart}
                  onChange={(e) => setCloneStart(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="clone-end">End</Label>
                <Input
                  id="clone-end"
                  type="date"
                  value={cloneEnd}
                  onChange={(e) => setCloneEnd(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setCloneOpen(false)}
              disabled={cloneSaving}
            >
              Cancel
            </Button>
            <Button
              type="button"
              disabled={cloneSaving}
              onClick={() => void submitClone()}
            >
              {cloneSaving ? "Creating…" : "Create trip"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
