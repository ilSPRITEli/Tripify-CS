import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { InvitationListItemDto } from "@repo/shared";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { invitationStatusLabel } from "./utils";

type InvitationCardProps = {
  inv: InvitationListItemDto;
  tab: "received" | "sent";
  actionId: string | null;
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
};

export function InvitationCard({
  inv,
  tab,
  actionId,
  onAccept,
  onDecline,
}: InvitationCardProps) {
  return (
    <Card className="border-border/80 shadow-card rounded-2xl">
      <CardContent className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <Link
              to={`/trips/${inv.trip.id}`}
              className="text-foreground font-semibold hover:underline"
            >
              {inv.trip.title}
            </Link>
            <p className="text-muted-foreground text-sm">
              {inv.trip.destination} · From{" "}
              <span className="text-foreground">{inv.inviter.fullName}</span>
            </p>
            {inv.message ? (
              <p className="text-muted-foreground mt-2 border-l-2 border-primary/30 pl-3 text-sm italic">
                “{inv.message}”
              </p>
            ) : null}
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold",
              inv.status === "PENDING"
                ? "bg-primary/15 text-primary"
                : inv.status === "ACCEPTED"
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                  : "bg-muted text-muted-foreground",
            )}
          >
            {invitationStatusLabel[inv.status] ?? inv.status}
          </span>
        </div>

        {tab === "received" && inv.status === "PENDING" ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              size="sm"
              className="rounded-full"
              disabled={actionId !== null}
              onClick={() => void onAccept(inv.id)}
            >
              {actionId === inv.id ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Accept"
              )}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              disabled={actionId !== null}
              onClick={() => void onDecline(inv.id)}
            >
              Decline
            </Button>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
