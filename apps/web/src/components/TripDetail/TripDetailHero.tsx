import { Button } from "@/components/ui/button";
import type { TripDetailDto } from "@repo/shared";
import {
  CalendarRange,
  DollarSign,
  Flag,
  LayoutTemplate,
  MapPin,
  Users,
} from "lucide-react";
import { formatTripDayYmd } from "./utils";

type TripDetailHeroProps = {
  trip: TripDetailDto;
  statusBadgeLabel: string;
  isOwner: boolean;
  canEndTrip: boolean;
  publishSaving: boolean;
  onPublish: () => void;
  onOpenEndTrip: () => void;
};

export function TripDetailHero({
  trip,
  statusBadgeLabel,
  isOwner,
  canEndTrip,
  publishSaving,
  onPublish,
  onOpenEndTrip,
}: TripDetailHeroProps) {
  const budgetLabel =
    trip.budgetTotal != null
      ? `${trip.budgetTotal.toLocaleString()} (budget)`
      : null;

  return (
    <div className="gradient-hero text-primary-foreground rounded-2xl p-8 shadow-elevated md:p-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-primary-foreground ring-1 ring-white/25 backdrop-blur-sm">
              {statusBadgeLabel}
            </span>
            {trip.isTemplatePublished ? (
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium ring-1 ring-white/25">
                Published template
              </span>
            ) : null}
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{trip.title}</h1>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-95">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              {trip.destination}
              {trip.destinationCity ? ` · ${trip.destinationCity}` : null}
              {trip.destinationCountry ? ` · ${trip.destinationCountry}` : null}
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
                onClick={() => void onPublish()}
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
                onClick={onOpenEndTrip}
              >
                <Flag className="mr-2 h-4 w-4" />
                End trip
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
