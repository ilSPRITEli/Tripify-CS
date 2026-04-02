import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InvitationCard } from "@/components/Invitations/InvitationCard";
import {
  extractMessage,
  invitationStatusLabel,
} from "@/components/Invitations/utils";
import { api } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import type { InvitationListItemDto, InvitationStatus } from "@repo/shared";
import { INVITATION_STATUS } from "@repo/shared";
import { Inbox, Loader2, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Invitations() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"received" | "sent">("received");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [items, setItems] = useState<InvitationListItemDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      navigate("/", { replace: true });
      return;
    }

    const query: { type: "received" | "sent"; status?: InvitationStatus } = {
      type: tab,
    };
    if (statusFilter !== "all") {
      query.status = statusFilter as InvitationStatus;
    }

    const res = await api.invitations.get({ query });
    const payload = res.data;

    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true ||
      !("data" in payload) ||
      !Array.isArray(payload.data)
    ) {
      setItems([]);
      toast.error(extractMessage(payload, "Could not load invitations"));
    } else {
      setItems(payload.data as InvitationListItemDto[]);
    }
    setLoading(false);
  }, [tab, statusFilter, navigate]);

  useEffect(() => {
    setLoading(true);
    void load();
  }, [load]);

  const accept = async (id: string) => {
    setActionId(id);
    const res = await api.invitations({ invitationId: id }).accept.post();
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractMessage(payload, "Could not accept"));
    } else {
      toast.success("You joined the trip");
    }
    setActionId(null);
    await load();
  };

  const decline = async (id: string) => {
    setActionId(id);
    const res = await api.invitations({ invitationId: id }).decline.post();
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractMessage(payload, "Could not decline"));
    } else {
      toast.success("Invitation declined");
    }
    setActionId(null);
    await load();
  };

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Invitations</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Invitations you received and sent.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/trips">My trips</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-muted/60 inline-flex rounded-full p-1">
            <button
              type="button"
              onClick={() => setTab("received")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                tab === "received"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Inbox className="h-4 w-4" />
              Received
            </button>
            <button
              type="button"
              onClick={() => setTab("sent")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                tab === "sent"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Send className="h-4 w-4" />
              Sent
            </button>
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {(INVITATION_STATUS as readonly InvitationStatus[]).map((s) => (
                <SelectItem key={s} value={s}>
                  {invitationStatusLabel[s] ?? s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading…
          </p>
        ) : items.length === 0 ? (
          <Card className="border-border/80 shadow-card rounded-2xl">
            <CardContent className="flex flex-col items-center py-14 text-center">
              <div className="bg-muted/60 flex h-16 w-16 items-center justify-center rounded-2xl">
                <Mail className="text-muted-foreground h-8 w-8" />
              </div>
              <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
                {tab === "received"
                  ? "No invitations here yet. Ask a trip owner to invite your email."
                  : "You have not sent any invitations with the current filters."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <ul className="space-y-4">
            {items.map((inv) => (
              <li key={inv.id}>
                <InvitationCard
                  inv={inv}
                  tab={tab}
                  actionId={actionId}
                  onAccept={accept}
                  onDecline={decline}
                />
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
