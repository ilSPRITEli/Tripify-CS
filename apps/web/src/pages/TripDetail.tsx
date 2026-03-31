import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import type { TripDetailDto } from "@repo/shared";
import { ArrowLeft, CalendarRange, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TripDetail() {
  const { tripId } = useParams<{ tripId: string }>();
  const navigate = useNavigate();
  const [trip, setTrip] = useState<TripDetailDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      if (!tripId) {
        navigate("/dashboard", { replace: true });
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
          <Link to="/dashboard">Back to dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-muted/20 to-background px-4 py-10">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <Link
          to="/dashboard"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>

        <Card className="border-border/50 shadow-elevated">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              {trip.title}
            </CardTitle>
            <div className="text-muted-foreground flex flex-wrap items-center gap-4 pt-2 text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin className="text-primary h-4 w-4" />
                {trip.destination}
                {trip.destinationCountry
                  ? ` · ${trip.destinationCountry}`
                  : null}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarRange className="h-4 w-4" />
                {trip.startDate.slice(0, 10)} → {trip.endDate.slice(0, 10)}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-xs">
                {trip.status}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {trip.description ? (
              <p className="text-foreground/90 text-sm leading-relaxed">
                {trip.description}
              </p>
            ) : null}

            <div>
              <h2 className="text-foreground mb-3 text-sm font-semibold">
                Members ({trip.members.length})
              </h2>
              <ul className="space-y-2">
                {trip.members.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-center justify-between rounded-lg border border-border/60 px-3 py-2 text-sm"
                  >
                    <span>{m.user.fullName}</span>
                    <span className="text-muted-foreground text-xs">
                      {m.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-foreground mb-3 text-sm font-semibold">
                Days ({trip.days.length})
              </h2>
              <ul className="space-y-2">
                {trip.days.map((d) => (
                  <li
                    key={d.id}
                    className="rounded-lg border border-border/60 px-3 py-2 text-sm"
                  >
                    <div className="font-medium">
                      {d.title ?? `Day ${d.dayNumber}`}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {d.date.slice(0, 10)}
                      {d.items.length > 0
                        ? ` · ${d.items.length} activities`
                        : ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
