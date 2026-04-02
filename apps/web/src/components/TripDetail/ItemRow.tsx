import { Button } from "@/components/ui/button";
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
import { apiMessage, itineraryApi, treatyResponseBody } from "@/lib/api";
import type { ItineraryItemDto } from "@repo/shared";
import {
  Check,
  Clock,
  DollarSign,
  MapPin,
  Pencil,
  StickyNote,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  datetimeLocalToIso,
  formatTime,
  isoToDatetimeLocal,
} from "./utils";

export function ItemRow({
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
    const payload = treatyResponseBody(res);
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(apiMessage(payload, "Could not update item"));
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
    const payload = treatyResponseBody(res);
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(apiMessage(payload, "Could not delete"));
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
