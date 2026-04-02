import { Button } from "@/components/ui/button";
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
import { itineraryApi } from "@/lib/api";
import type { TripDayDto } from "@repo/shared";
import { ChevronDown, ChevronUp, Pencil, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { ItemRow } from "./ItemRow";
import { datetimeLocalToIso, extractApiErrorMessage } from "./utils";

export function DaySection({
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
