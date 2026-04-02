import type { TripDayDto } from "@repo/shared";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { TemplateItemRead } from "./TemplateItemRead";

export function TemplateDayRead({ day }: { day: TripDayDto }) {
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
