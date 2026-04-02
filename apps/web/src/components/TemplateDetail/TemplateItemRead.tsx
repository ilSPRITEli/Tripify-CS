import type { TripDayDto } from "@repo/shared";
import { Clock, DollarSign, MapPin, StickyNote } from "lucide-react";
import { formatTime } from "./utils";

export function TemplateItemRead({
  item,
}: {
  item: TripDayDto["items"][number];
}) {
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
