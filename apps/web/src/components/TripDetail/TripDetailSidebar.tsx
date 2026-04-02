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
import { cn } from "@/lib/utils";
import type { TripDetailDto } from "@repo/shared";
import { Crown, Loader2, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";

type TripDetailSidebarProps = {
  trip: TripDetailDto;
  isOwner: boolean;
  endDialogOpen: boolean;
  onEndDialogOpenChange: (open: boolean) => void;
  endChoice: "COMPLETED" | "ENDED_EARLY";
  onEndChoiceChange: (c: "COMPLETED" | "ENDED_EARLY") => void;
  endSaving: boolean;
  onConfirmEndTrip: () => void;
  inviteOpen: boolean;
  onInviteOpenChange: (open: boolean) => void;
  inviteEmail: string;
  onInviteEmailChange: (v: string) => void;
  inviteMessage: string;
  onInviteMessageChange: (v: string) => void;
  inviteSaving: boolean;
  onSubmitInvite: () => void;
};

export function TripDetailSidebar({
  trip,
  isOwner,
  endDialogOpen,
  onEndDialogOpenChange,
  endChoice,
  onEndChoiceChange,
  endSaving,
  onConfirmEndTrip,
  inviteOpen,
  onInviteOpenChange,
  inviteEmail,
  onInviteEmailChange,
  inviteMessage,
  onInviteMessageChange,
  inviteSaving,
  onSubmitInvite,
}: TripDetailSidebarProps) {
  return (
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
                <p className="truncate text-sm font-medium">{m.user.fullName}</p>
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
            onClick={() => onInviteOpenChange(true)}
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

      <AlertDialog open={endDialogOpen} onOpenChange={onEndDialogOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>End this trip?</AlertDialogTitle>
            <AlertDialogDescription>
              This sets the trip status and records when it finished. You can mark
              it fully completed or ended early.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-2 py-2 sm:flex-row">
            <Button
              type="button"
              variant={endChoice === "COMPLETED" ? "default" : "outline"}
              className="flex-1 rounded-full"
              onClick={() => onEndChoiceChange("COMPLETED")}
            >
              Completed
            </Button>
            <Button
              type="button"
              variant={endChoice === "ENDED_EARLY" ? "default" : "outline"}
              className="flex-1 rounded-full"
              onClick={() => onEndChoiceChange("ENDED_EARLY")}
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
                void onConfirmEndTrip();
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

      <Dialog open={inviteOpen} onOpenChange={onInviteOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite by email</DialogTitle>
            <DialogDescription>
              They will see this trip in Invitations after they sign in with the
              same email.
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
                onChange={(e) => onInviteEmailChange(e.target.value)}
                placeholder="friend@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="invite-msg">Message (optional)</Label>
              <Textarea
                id="invite-msg"
                value={inviteMessage}
                onChange={(e) => onInviteMessageChange(e.target.value)}
                rows={3}
                placeholder="Come join our trip!"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => onInviteOpenChange(false)}
              disabled={inviteSaving}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => void onSubmitInvite()}
              disabled={inviteSaving}
            >
              {inviteSaving ? "Sending…" : "Send invite"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </aside>
  );
}
