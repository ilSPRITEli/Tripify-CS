import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Textarea } from "@/components/ui/textarea";
import { api, itineraryApi } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import type {
  ItineraryItemDto,
  RatingDto,
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
  Flag,
  LayoutTemplate,
  Loader2,
  Mail,
  MapPin,
  Pencil,
  Plus,
  Star,
  StickyNote,
  Trash2,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
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

function formatTripDayYmd(value: string | Date) {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) {
    return typeof value === "string" ? value.slice(0, 10) : "—";
  }
  return d.toISOString().slice(0, 10);
}

function isoToDatetimeLocal(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function datetimeLocalToIso(local: string): string | undefined {
  if (!local.trim()) return undefined;
  const d = new Date(local);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

function extractApiErrorMessage(payload: unknown, fallback: string): string {
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

function ItemRow({
  item,
  onRefresh,
}: {
  item: ItineraryItemDto;
  onRefresh: () => Promise<void>;
}) {
  const start = formatTime(item.startTime);
  const end = formatTime(item.endTime);
  const timeRange = start && end ? `${start} – ${end}` : (start ?? end ?? null);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description ?? "");
  const [placeName, setPlaceName] = useState(item.placeName ?? "");
  const [placeAddress, setPlaceAddress] = useState(item.placeAddress ?? "");
  const [country, setCountry] = useState(item.country ?? "");
  const [city, setCity] = useState(item.city ?? "");
  const [startLocal, setStartLocal] = useState(isoToDatetimeLocal(item.startTime));
  const [endLocal, setEndLocal] = useState(isoToDatetimeLocal(item.endTime));
  const [estimatedCost, setEstimatedCost] = useState(
    item.estimatedCost != null ? String(item.estimatedCost) : "",
  );
  const [currency, setCurrency] = useState(item.currency ?? "THB");
  const [note, setNote] = useState(item.note ?? "");
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  useEffect(() => {
    if (!editOpen) return;
    setTitle(item.title);
    setDescription(item.description ?? "");
    setPlaceName(item.placeName ?? "");
    setPlaceAddress(item.placeAddress ?? "");
    setCountry(item.country ?? "");
    setCity(item.city ?? "");
    setStartLocal(isoToDatetimeLocal(item.startTime));
    setEndLocal(isoToDatetimeLocal(item.endTime));
    setEstimatedCost(
      item.estimatedCost != null ? String(item.estimatedCost) : "",
    );
    setCurrency(item.currency ?? "THB");
    setNote(item.note ?? "");
    setIsCompleted(item.isCompleted);
  }, [editOpen, item]);

  const submitEdit = async () => {
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    setSaving(true);
    const body: Record<string, unknown> = {
      title: title.trim(),
      description: description.trim() || null,
      placeName: placeName.trim() || null,
      placeAddress: placeAddress.trim() || null,
      country: country.trim() || null,
      city: city.trim() || null,
      note: note.trim() || null,
      currency: currency.trim() || null,
      isCompleted,
    };
    const sIso = datetimeLocalToIso(startLocal);
    const eIso = datetimeLocalToIso(endLocal);
    if (sIso !== undefined) body.startTime = sIso;
    else body.startTime = null;
    if (eIso !== undefined) body.endTime = eIso;
    else body.endTime = null;
    const costNum = estimatedCost.trim() === "" ? null : Number(estimatedCost);
    if (costNum !== null && Number.isNaN(costNum)) {
      toast.error("Invalid cost");
      setSaving(false);
      return;
    }
    body.estimatedCost = costNum;

    const res = await itineraryApi["itinerary-items"]({ itemId: item.id }).patch(
      body,
    );
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not update item"));
      setSaving(false);
      return;
    }
    toast.success("Activity updated");
    setEditOpen(false);
    setSaving(false);
    await onRefresh();
  };

  const confirmDelete = async () => {
    setSaving(true);
    const res = await itineraryApi["itinerary-items"]({ itemId: item.id }).delete();
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not delete"));
      setSaving(false);
      return;
    }
    toast.success("Activity removed");
    setDeleteOpen(false);
    setSaving(false);
    await onRefresh();
  };

  return (
    <>
      <div className="group relative ml-6 border-l-2 border-primary/20 pb-6 pl-6 last:pb-0">
        <div className="bg-primary absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 border-background" />
        <div className="border-border/80 shadow-card hover:shadow-card-hover rounded-xl border bg-card p-4 transition-shadow">
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
            <div className="flex shrink-0 gap-1 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setEditOpen(true)}
                aria-label="Edit activity"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive h-8 w-8"
                onClick={() => setDeleteOpen(true)}
                aria-label="Delete activity"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
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
                {item.estimatedCost.toLocaleString()} {item.currency ?? "THB"}
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

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit activity</DialogTitle>
            <DialogDescription>
              Update details or mark this activity as done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="grid gap-2">
              <Label htmlFor={`title-${item.id}`}>Title</Label>
              <Input
                id={`title-${item.id}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`desc-${item.id}`}>Description</Label>
              <Textarea
                id={`desc-${item.id}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-2">
                <Label htmlFor={`place-${item.id}`}>Place</Label>
                <Input
                  id={`place-${item.id}`}
                  value={placeName}
                  onChange={(e) => setPlaceName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`city-${item.id}`}>City</Label>
                <Input
                  id={`city-${item.id}`}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`addr-${item.id}`}>Address</Label>
              <Input
                id={`addr-${item.id}`}
                value={placeAddress}
                onChange={(e) => setPlaceAddress(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`country-${item.id}`}>Country</Label>
              <Input
                id={`country-${item.id}`}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-2">
                <Label htmlFor={`start-${item.id}`}>Start (local)</Label>
                <Input
                  id={`start-${item.id}`}
                  type="datetime-local"
                  value={startLocal}
                  onChange={(e) => setStartLocal(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`end-${item.id}`}>End (local)</Label>
                <Input
                  id={`end-${item.id}`}
                  type="datetime-local"
                  value={endLocal}
                  onChange={(e) => setEndLocal(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-2">
                <Label htmlFor={`cost-${item.id}`}>Estimated cost</Label>
                <Input
                  id={`cost-${item.id}`}
                  inputMode="decimal"
                  value={estimatedCost}
                  onChange={(e) => setEstimatedCost(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`cur-${item.id}`}>Currency</Label>
                <Input
                  id={`cur-${item.id}`}
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`note-${item.id}`}>Note</Label>
              <Textarea
                id={`note-${item.id}`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
              />
            </div>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox
                checked={isCompleted}
                onCheckedChange={(v) => setIsCompleted(v === true)}
              />
              Mark completed
            </label>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setEditOpen(false)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button type="button" onClick={() => void submitEdit()} disabled={saving}>
              {saving ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this activity?</AlertDialogTitle>
            <AlertDialogDescription>
              This cannot be undone. “{item.title}” will be removed from the day.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={saving}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => {
                e.preventDefault();
                void confirmDelete();
              }}
              disabled={saving}
            >
              {saving ? "Deleting…" : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function DaySection({
  day,
  onRefresh,
}: {
  day: TripDayDto;
  onRefresh: () => Promise<void>;
}) {
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

  const [editDayOpen, setEditDayOpen] = useState(false);
  const [addItemOpen, setAddItemOpen] = useState(false);
  const [savingDay, setSavingDay] = useState(false);
  const [savingItem, setSavingItem] = useState(false);

  const [dayTitle, setDayTitle] = useState(day.title ?? "");
  const [dayNote, setDayNote] = useState(day.note ?? "");

  useEffect(() => {
    if (!editDayOpen) return;
    setDayTitle(day.title ?? "");
    setDayNote(day.note ?? "");
  }, [editDayOpen, day.title, day.note]);

  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPlace, setItemPlace] = useState("");
  const [itemAddress, setItemAddress] = useState("");
  const [itemCountry, setItemCountry] = useState("");
  const [itemCity, setItemCity] = useState("");
  const [itemStart, setItemStart] = useState("");
  const [itemEnd, setItemEnd] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [itemCurrency, setItemCurrency] = useState("THB");
  const [itemNote, setItemNote] = useState("");

  const resetAddItemForm = () => {
    setItemTitle("");
    setItemDescription("");
    setItemPlace("");
    setItemAddress("");
    setItemCountry("");
    setItemCity("");
    setItemStart("");
    setItemEnd("");
    setItemCost("");
    setItemCurrency("THB");
    setItemNote("");
  };

  const saveDay = async () => {
    setSavingDay(true);
    const res = await itineraryApi["trip-days"]({ tripDayId: day.id }).patch({
      title: dayTitle.trim() || null,
      note: dayNote.trim() || null,
    });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not update day"));
      setSavingDay(false);
      return;
    }
    toast.success("Day updated");
    setEditDayOpen(false);
    setSavingDay(false);
    await onRefresh();
  };

  const createItem = async () => {
    if (!itemTitle.trim()) {
      toast.error("Title is required");
      return;
    }
    setSavingItem(true);
    const body: Record<string, unknown> = {
      title: itemTitle.trim(),
      description: itemDescription.trim() || null,
      placeName: itemPlace.trim() || null,
      placeAddress: itemAddress.trim() || null,
      country: itemCountry.trim() || null,
      city: itemCity.trim() || null,
      note: itemNote.trim() || null,
      currency: itemCurrency.trim() || null,
    };
    const sIso = datetimeLocalToIso(itemStart);
    const eIso = datetimeLocalToIso(itemEnd);
    if (sIso) body.startTime = sIso;
    if (eIso) body.endTime = eIso;
    const costNum = itemCost.trim() === "" ? undefined : Number(itemCost);
    if (costNum !== undefined && Number.isNaN(costNum)) {
      toast.error("Invalid cost");
      setSavingItem(false);
      return;
    }
    if (costNum !== undefined) body.estimatedCost = costNum;

    const res = await itineraryApi["trip-days"]({ tripDayId: day.id }).items.post(
      body,
    );
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not add activity"));
      setSavingItem(false);
      return;
    }
    toast.success("Activity added");
    setAddItemOpen(false);
    resetAddItemForm();
    setSavingItem(false);
    await onRefresh();
  };

  return (
    <div className="border-border/80 shadow-card rounded-2xl border bg-card/70 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <div className="bg-primary/15 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold">
            D{day.dayNumber}
          </div>
          <div className="min-w-0">
            <h3 className="text-foreground font-semibold">
              {day.title ?? `Day ${day.dayNumber}`}
            </h3>
            <p className="text-muted-foreground text-xs">{weekday}</p>
          </div>
          {expanded ? (
            <ChevronUp className="text-muted-foreground ml-auto h-5 w-5 shrink-0" />
          ) : (
            <ChevronDown className="text-muted-foreground ml-auto h-5 w-5 shrink-0" />
          )}
        </button>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => setEditDayOpen(true)}
          >
            <Pencil className="mr-1.5 h-3.5 w-3.5" />
            Edit day
          </Button>
          <Button
            type="button"
            size="sm"
            className="rounded-full"
            onClick={() => {
              resetAddItemForm();
              setAddItemOpen(true);
            }}
          >
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Add activity
          </Button>
        </div>
      </div>
      {day.note ? (
        <p className="text-muted-foreground mt-2 text-sm">{day.note}</p>
      ) : null}

      <Dialog open={editDayOpen} onOpenChange={setEditDayOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit day</DialogTitle>
            <DialogDescription>Title and notes for this day.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="grid gap-2">
              <Label htmlFor={`day-title-${day.id}`}>Title</Label>
              <Input
                id={`day-title-${day.id}`}
                value={dayTitle}
                onChange={(e) => setDayTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`day-note-${day.id}`}>Note</Label>
              <Textarea
                id={`day-note-${day.id}`}
                value={dayNote}
                onChange={(e) => setDayNote(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setEditDayOpen(false)}
              disabled={savingDay}
            >
              Cancel
            </Button>
            <Button type="button" onClick={() => void saveDay()} disabled={savingDay}>
              {savingDay ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={addItemOpen} onOpenChange={setAddItemOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New activity</DialogTitle>
            <DialogDescription>Add something to this day.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="grid gap-2">
              <Label htmlFor={`new-title-${day.id}`}>Title</Label>
              <Input
                id={`new-title-${day.id}`}
                value={itemTitle}
                onChange={(e) => setItemTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`new-desc-${day.id}`}>Description</Label>
              <Textarea
                id={`new-desc-${day.id}`}
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                rows={2}
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-2">
                <Label htmlFor={`new-place-${day.id}`}>Place</Label>
                <Input
                  id={`new-place-${day.id}`}
                  value={itemPlace}
                  onChange={(e) => setItemPlace(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`new-city-${day.id}`}>City</Label>
                <Input
                  id={`new-city-${day.id}`}
                  value={itemCity}
                  onChange={(e) => setItemCity(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`new-addr-${day.id}`}>Address</Label>
              <Input
                id={`new-addr-${day.id}`}
                value={itemAddress}
                onChange={(e) => setItemAddress(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`new-country-${day.id}`}>Country</Label>
              <Input
                id={`new-country-${day.id}`}
                value={itemCountry}
                onChange={(e) => setItemCountry(e.target.value)}
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-2">
                <Label htmlFor={`new-start-${day.id}`}>Start (local)</Label>
                <Input
                  id={`new-start-${day.id}`}
                  type="datetime-local"
                  value={itemStart}
                  onChange={(e) => setItemStart(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`new-end-${day.id}`}>End (local)</Label>
                <Input
                  id={`new-end-${day.id}`}
                  type="datetime-local"
                  value={itemEnd}
                  onChange={(e) => setItemEnd(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-2">
                <Label htmlFor={`new-cost-${day.id}`}>Estimated cost</Label>
                <Input
                  id={`new-cost-${day.id}`}
                  inputMode="decimal"
                  value={itemCost}
                  onChange={(e) => setItemCost(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`new-cur-${day.id}`}>Currency</Label>
                <Input
                  id={`new-cur-${day.id}`}
                  value={itemCurrency}
                  onChange={(e) => setItemCurrency(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`new-note-${day.id}`}>Note</Label>
              <Textarea
                id={`new-note-${day.id}`}
                value={itemNote}
                onChange={(e) => setItemNote(e.target.value)}
                rows={2}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setAddItemOpen(false)}
              disabled={savingItem}
            >
              Cancel
            </Button>
            <Button type="button" onClick={() => void createItem()} disabled={savingItem}>
              {savingItem ? "Adding…" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
                day.items.map((item) => (
                  <ItemRow key={item.id} item={item} onRefresh={onRefresh} />
                ))
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
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteMessage, setInviteMessage] = useState("");
  const [inviteSaving, setInviteSaving] = useState(false);
  const [ratings, setRatings] = useState<RatingDto[]>([]);
  const [endDialogOpen, setEndDialogOpen] = useState(false);
  const [endChoice, setEndChoice] = useState<"COMPLETED" | "ENDED_EARLY">(
    "COMPLETED",
  );
  const [endSaving, setEndSaving] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);
  const [ratingComment, setRatingComment] = useState("");
  const [ratingSaving, setRatingSaving] = useState(false);
  const [publishSaving, setPublishSaving] = useState(false);

  const loadTrip = useCallback(async () => {
    if (!tripId) return;
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
      setRatings([]);
    } else {
      setTrip(payload.data);

      const rr = await api.trips({ tripId }).ratings.get();
      const rp = rr.data;
      if (
        !rr.error &&
        rp &&
        typeof rp === "object" &&
        "ok" in rp &&
        rp.ok === true &&
        "data" in rp &&
        Array.isArray(rp.data)
      ) {
        setRatings(rp.data as RatingDto[]);
      } else {
        setRatings([]);
      }
    }

    const meRes = await api.auth.me.get();
    const mePayload = meRes.data;
    if (
      !meRes.error &&
      mePayload &&
      typeof mePayload === "object" &&
      "ok" in mePayload &&
      mePayload.ok === true &&
      "data" in mePayload &&
      mePayload.data &&
      typeof mePayload.data === "object" &&
      "id" in mePayload.data
    ) {
      setCurrentUserId((mePayload.data as { id: string }).id);
    } else {
      setCurrentUserId(null);
    }
  }, [tripId, navigate]);

  useEffect(() => {
    const run = async () => {
      if (!tripId) {
        navigate("/trips", { replace: true });
        return;
      }

      await loadTrip();
      setLoading(false);
    };

    void run();
  }, [tripId, navigate, loadTrip]);

  const sc = trip ? statusStyle[trip.status] : null;

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading trip…</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-12">
        <p className="text-muted-foreground text-sm">
          This trip is unavailable.
        </p>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/trips">Back to my trips</Link>
        </Button>
      </div>
    );
  }

  const budgetLabel =
    trip.budgetTotal != null
      ? `${trip.budgetTotal.toLocaleString()} (budget)`
      : null;

  const isOwner =
    !!currentUserId &&
    trip.members.some(
      (m) => m.role === "OWNER" && m.userId === currentUserId,
    );

  const isMember =
    !!currentUserId &&
    trip.members.some((m) => m.userId === currentUserId);

  const canEndTrip =
    isOwner &&
    trip.status !== "COMPLETED" &&
    trip.status !== "ENDED_EARLY";

  const tripIsEndedForRating =
    trip.status === "COMPLETED" || trip.status === "ENDED_EARLY";

  const alreadyRated =
    !!currentUserId &&
    ratings.some((r) => r.user.id === currentUserId);

  const canRate =
    isMember && tripIsEndedForRating && !alreadyRated;

  const submitEndTrip = async () => {
    if (!tripId) return;
    setEndSaving(true);
    const res = await api.trips({ tripId }).end.post({ status: endChoice });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not end trip"));
      setEndSaving(false);
      return;
    }
    toast.success(
      endChoice === "COMPLETED" ? "Trip marked complete" : "Trip ended early",
    );
    setEndDialogOpen(false);
    setEndSaving(false);
    await loadTrip();
  };

  const submitRating = async () => {
    if (!tripId || ratingScore < 1) {
      toast.error("Choose a star rating");
      return;
    }
    setRatingSaving(true);
    const res = await api.trips({ tripId }).ratings.post({
      score: ratingScore,
      comment: ratingComment.trim() ? ratingComment.trim() : null,
    });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not submit rating"));
      setRatingSaving(false);
      return;
    }
    toast.success("Thanks for your rating!");
    setRatingScore(0);
    setRatingComment("");
    setRatingSaving(false);
    await loadTrip();
  };

  const submitPublish = async () => {
    if (!tripId) return;
    setPublishSaving(true);
    const res = await api.trips({ tripId })["publish-template"].post({});
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not publish template"));
      setPublishSaving(false);
      return;
    }
    toast.success("Template published");
    setPublishSaving(false);
    await loadTrip();
  };

  const submitInvite = async () => {
    if (!tripId) return;
    const email = inviteEmail.trim();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    setInviteSaving(true);
    const res = await api.trips({ tripId }).invitations.post({
      inviteeEmail: email,
      message: inviteMessage.trim() ? inviteMessage.trim() : null,
    });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not send invitation"));
      setInviteSaving(false);
      return;
    }
    toast.success("Invitation sent");
    setInviteOpen(false);
    setInviteEmail("");
    setInviteMessage("");
    setInviteSaving(false);
  };

  return (
    <div className="container mx-auto py-8">
      <Link
        to="/trips"
        className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
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
        <div className="gradient-hero text-primary-foreground rounded-2xl p-8 shadow-elevated md:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 flex-1 space-y-3">
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
                  {trip.destinationCity ? ` · ${trip.destinationCity}` : null}
                  {trip.destinationCountry
                    ? ` · ${trip.destinationCountry}`
                    : null}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarRange className="h-4 w-4 shrink-0" />
                  {formatTripDayYmd(trip.startDate)} →{" "}
                  {formatTripDayYmd(trip.endDate)}
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
                {trip.endedAt ? (
                  <span className="flex items-center gap-1.5 opacity-95">
                    <Flag className="h-4 w-4 shrink-0" />
                    Ended {formatTripDayYmd(trip.endedAt)}
                  </span>
                ) : null}
              </div>
            </div>
            {(isOwner && !trip.isTemplatePublished) || canEndTrip ? (
              <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
                {isOwner && !trip.isTemplatePublished ? (
                  <Button
                    type="button"
                    variant="secondary"
                    className="border-primary-foreground/25 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 rounded-full"
                    disabled={publishSaving}
                    onClick={() => void submitPublish()}
                  >
                    <LayoutTemplate className="mr-2 h-4 w-4" />
                    {publishSaving ? "Publishing…" : "Publish template"}
                  </Button>
                ) : null}
                {canEndTrip ? (
                  <Button
                    type="button"
                    variant="secondary"
                    className="border-primary-foreground/25 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 rounded-full"
                    onClick={() => {
                      setEndChoice("COMPLETED");
                      setEndDialogOpen(true);
                    }}
                  >
                    <Flag className="mr-2 h-4 w-4" />
                    End trip
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            {trip.description ? (
              <Card className="border-border/60 shadow-card rounded-2xl">
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
                  <DaySection
                    key={day.id}
                    day={day}
                    onRefresh={loadTrip}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-foreground mb-4 text-sm font-semibold tracking-wide uppercase">
                Ratings
              </h2>
              {canRate ? (
                <Card className="border-border/60 shadow-card mb-6 rounded-2xl">
                  <CardContent className="space-y-4 p-5">
                    <p className="text-foreground text-sm font-medium">
                      Rate this trip
                    </p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setRatingScore(n)}
                          className="rounded-md p-1 transition-colors"
                          aria-label={`${n} stars`}
                        >
                          <Star
                            className={cn(
                              "h-8 w-8",
                              ratingScore >= n
                                ? "fill-amber-400 text-amber-400"
                                : "text-muted-foreground/40",
                            )}
                          />
                        </button>
                      ))}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="rating-comment">Comment (optional)</Label>
                      <Textarea
                        id="rating-comment"
                        value={ratingComment}
                        onChange={(e) => setRatingComment(e.target.value)}
                        rows={3}
                        placeholder="How was the trip?"
                      />
                    </div>
                    <Button
                      type="button"
                      className="rounded-full"
                      disabled={ratingScore < 1 || ratingSaving}
                      onClick={() => void submitRating()}
                    >
                      {ratingSaving ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        "Submit rating"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ) : tripIsEndedForRating && isMember && alreadyRated ? (
                <p className="text-muted-foreground mb-6 text-sm">
                  You have already rated this trip.
                </p>
              ) : tripIsEndedForRating && !isMember ? (
                <p className="text-muted-foreground mb-6 text-sm">
                  Only trip members can rate.
                </p>
              ) : !tripIsEndedForRating ? (
                <p className="text-muted-foreground mb-6 text-sm">
                  Ratings open after the trip is marked complete or ended early.
                </p>
              ) : null}

              {ratings.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No ratings yet.
                </p>
              ) : (
                <ul className="space-y-4">
                  {ratings.map((r) => (
                    <li
                      key={r.id}
                      className="border-border/80 shadow-card rounded-2xl border bg-card/70 p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold">
                            {r.user.fullName.slice(0, 1).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {r.user.fullName}
                            </p>
                            <div className="mt-0.5 flex gap-0.5">
                              {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "h-3.5 w-3.5",
                                    i < r.score
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-muted-foreground/30",
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {r.comment ? (
                        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                          {r.comment}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="border-border/80 shadow-card rounded-2xl border bg-card p-6">
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

            {isOwner ? (
              <div className="border-border/80 shadow-card rounded-2xl border bg-card p-6">
                <h3 className="text-foreground flex items-center gap-2 font-semibold">
                  <Mail className="h-4 w-4" />
                  Invite
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  Send an email invitation to add someone to this trip.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4 w-full rounded-full"
                  onClick={() => setInviteOpen(true)}
                >
                  Invite by email
                </Button>
              </div>
            ) : null}

            <div className="text-center">
              <Link
                to="/invitations"
                className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline"
              >
                View all invitations
              </Link>
            </div>

            <AlertDialog open={endDialogOpen} onOpenChange={setEndDialogOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>End this trip?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This sets the trip status and records when it finished. You
                    can mark it fully completed or ended early.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex flex-col gap-2 py-2 sm:flex-row">
                  <Button
                    type="button"
                    variant={endChoice === "COMPLETED" ? "default" : "outline"}
                    className="flex-1 rounded-full"
                    onClick={() => setEndChoice("COMPLETED")}
                  >
                    Completed
                  </Button>
                  <Button
                    type="button"
                    variant={
                      endChoice === "ENDED_EARLY" ? "default" : "outline"
                    }
                    className="flex-1 rounded-full"
                    onClick={() => setEndChoice("ENDED_EARLY")}
                  >
                    Ended early
                  </Button>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={endSaving}>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    disabled={endSaving}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={(e) => {
                      e.preventDefault();
                      void submitEndTrip();
                    }}
                  >
                    {endSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving…
                      </>
                    ) : (
                      "Confirm"
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite by email</DialogTitle>
                  <DialogDescription>
                    They will see this trip in Invitations after they sign in
                    with the same email.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 py-2">
                  <div className="grid gap-2">
                    <Label htmlFor="invite-email">Email</Label>
                    <Input
                      id="invite-email"
                      type="email"
                      autoComplete="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      placeholder="friend@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="invite-msg">Message (optional)</Label>
                    <Textarea
                      id="invite-msg"
                      value={inviteMessage}
                      onChange={(e) => setInviteMessage(e.target.value)}
                      rows={3}
                      placeholder="Come join our trip!"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setInviteOpen(false)}
                    disabled={inviteSaving}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={() => void submitInvite()}
                    disabled={inviteSaving}
                  >
                    {inviteSaving ? "Sending…" : "Send invite"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
