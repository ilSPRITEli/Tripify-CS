import type { TripStatus } from "@repo/shared";

export const statusStyle: Partial<
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

export function formatTime(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatTripDayYmd(value: string | Date) {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) {
    return typeof value === "string" ? value.slice(0, 10) : "—";
  }
  return d.toISOString().slice(0, 10);
}

export function isoToDatetimeLocal(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function datetimeLocalToIso(local: string): string | undefined {
  if (!local.trim()) return undefined;
  const d = new Date(local);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

export function extractApiErrorMessage(
  payload: unknown,
  fallback: string,
): string {
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
