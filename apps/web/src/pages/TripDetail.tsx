import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DaySection } from "@/components/TripDetail/DaySection";
import { TripDetailHero } from "@/components/TripDetail/TripDetailHero";
import { TripDetailRatingsSection } from "@/components/TripDetail/TripDetailRatingsSection";
import { TripDetailSidebar } from "@/components/TripDetail/TripDetailSidebar";
import {
  extractApiErrorMessage,
  statusStyle,
} from "@/components/TripDetail/utils";
import { api } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import type { RatingDto, TripDetailDto } from "@repo/shared";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TripDetail() {
  const { tripId } = useParams<{ tripId: string }>();
  const navigate = useNavigate();
  const [trip, setTrip] = useState<TripDetailDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteMessage, setInviteMessage] = useState("");
  const [inviteSaving, setInviteSaving] = useState(false);
  const [ratings, setRatings] = useState<RatingDto[]>([]);
  const [endDialogOpen, setEndDialogOpen] = useState(false);
  const [endChoice, setEndChoice] = useState<"COMPLETED" | "ENDED_EARLY">(
    "COMPLETED",
  );
  const [endSaving, setEndSaving] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);
  const [ratingComment, setRatingComment] = useState("");
  const [ratingSaving, setRatingSaving] = useState(false);
  const [publishSaving, setPublishSaving] = useState(false);

  const loadTrip = useCallback(async () => {
    if (!tripId) return;
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
      setRatings([]);
    } else {
      setTrip(payload.data);

      const rr = await api.trips({ tripId }).ratings.get();
      const rp = rr.data;
      if (
        !rr.error &&
        rp &&
        typeof rp === "object" &&
        "ok" in rp &&
        rp.ok === true &&
        "data" in rp &&
        Array.isArray(rp.data)
      ) {
        setRatings(rp.data as RatingDto[]);
      } else {
        setRatings([]);
      }
    }

    const meRes = await api.auth.me.get();
    const mePayload = meRes.data;
    if (
      !meRes.error &&
      mePayload &&
      typeof mePayload === "object" &&
      "ok" in mePayload &&
      mePayload.ok === true &&
      "data" in mePayload &&
      mePayload.data &&
      typeof mePayload.data === "object" &&
      "id" in mePayload.data
    ) {
      setCurrentUserId((mePayload.data as { id: string }).id);
    } else {
      setCurrentUserId(null);
    }
  }, [tripId, navigate]);

  useEffect(() => {
    const run = async () => {
      if (!tripId) {
        navigate("/trips", { replace: true });
        return;
      }

      await loadTrip();
      setLoading(false);
    };

    void run();
  }, [tripId, navigate, loadTrip]);

  const sc = trip ? statusStyle[trip.status] : null;

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading trip…</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-12">
        <p className="text-muted-foreground text-sm">This trip is unavailable.</p>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/trips">Back to my trips</Link>
        </Button>
      </div>
    );
  }

  const isOwner =
    !!currentUserId &&
    trip.members.some((m) => m.role === "OWNER" && m.userId === currentUserId);

  const isMember =
    !!currentUserId && trip.members.some((m) => m.userId === currentUserId);

  const canEndTrip =
    isOwner && trip.status !== "COMPLETED" && trip.status !== "ENDED_EARLY";

  const tripIsEndedForRating =
    trip.status === "COMPLETED" || trip.status === "ENDED_EARLY";

  const alreadyRated =
    !!currentUserId && ratings.some((r) => r.user.id === currentUserId);

  const canRate = isMember && tripIsEndedForRating && !alreadyRated;

  const submitEndTrip = async () => {
    if (!tripId) return;
    setEndSaving(true);
    const res = await api.trips({ tripId }).end.post({ status: endChoice });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not end trip"));
      setEndSaving(false);
      return;
    }
    toast.success(
      endChoice === "COMPLETED" ? "Trip marked complete" : "Trip ended early",
    );
    setEndDialogOpen(false);
    setEndSaving(false);
    await loadTrip();
  };

  const submitRating = async () => {
    if (!tripId || ratingScore < 1) {
      toast.error("Choose a star rating");
      return;
    }
    setRatingSaving(true);
    const res = await api.trips({ tripId }).ratings.post({
      score: ratingScore,
      comment: ratingComment.trim() ? ratingComment.trim() : null,
    });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not submit rating"));
      setRatingSaving(false);
      return;
    }
    toast.success("Thanks for your rating!");
    setRatingScore(0);
    setRatingComment("");
    setRatingSaving(false);
    await loadTrip();
  };

  const submitPublish = async () => {
    if (!tripId) return;
    setPublishSaving(true);
    const res = await api.trips({ tripId })["publish-template"].post({});
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not publish template"));
      setPublishSaving(false);
      return;
    }
    toast.success("Template published");
    setPublishSaving(false);
    await loadTrip();
  };

  const submitInvite = async () => {
    if (!tripId) return;
    const email = inviteEmail.trim();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    setInviteSaving(true);
    const res = await api.trips({ tripId }).invitations.post({
      inviteeEmail: email,
      message: inviteMessage.trim() ? inviteMessage.trim() : null,
    });
    const payload = res.data;
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true
    ) {
      toast.error(extractApiErrorMessage(payload, "Could not send invitation"));
      setInviteSaving(false);
      return;
    }
    toast.success("Invitation sent");
    setInviteOpen(false);
    setInviteEmail("");
    setInviteMessage("");
    setInviteSaving(false);
  };

  const statusBadgeLabel =
    sc?.label ?? trip.status.replaceAll("_", " ");

  return (
    <div className="container mx-auto py-8">
      <Link
        to="/trips"
        className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        My trips
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-8"
      >
        <TripDetailHero
          trip={trip}
          statusBadgeLabel={statusBadgeLabel}
          isOwner={isOwner}
          canEndTrip={canEndTrip}
          publishSaving={publishSaving}
          onPublish={submitPublish}
          onOpenEndTrip={() => {
            setEndChoice("COMPLETED");
            setEndDialogOpen(true);
          }}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            {trip.description ? (
              <Card className="border-border/60 shadow-card rounded-2xl">
                <CardContent className="text-foreground/90 p-5 text-sm leading-relaxed">
                  {trip.description}
                </CardContent>
              </Card>
            ) : null}

            <div>
              <h2 className="text-foreground mb-4 text-sm font-semibold tracking-wide uppercase">
                Itinerary
              </h2>
              <div className="space-y-4">
                {trip.days.map((day) => (
                  <DaySection key={day.id} day={day} onRefresh={loadTrip} />
                ))}
              </div>
            </div>

            <TripDetailRatingsSection
              canRate={canRate}
              tripIsEndedForRating={tripIsEndedForRating}
              isMember={isMember}
              alreadyRated={alreadyRated}
              ratingScore={ratingScore}
              onRatingScoreChange={setRatingScore}
              ratingComment={ratingComment}
              onRatingCommentChange={setRatingComment}
              ratingSaving={ratingSaving}
              onSubmitRating={submitRating}
              ratings={ratings}
            />
          </div>

          <TripDetailSidebar
            trip={trip}
            isOwner={isOwner}
            endDialogOpen={endDialogOpen}
            onEndDialogOpenChange={setEndDialogOpen}
            endChoice={endChoice}
            onEndChoiceChange={setEndChoice}
            endSaving={endSaving}
            onConfirmEndTrip={submitEndTrip}
            inviteOpen={inviteOpen}
            onInviteOpenChange={setInviteOpen}
            inviteEmail={inviteEmail}
            onInviteEmailChange={setInviteEmail}
            inviteMessage={inviteMessage}
            onInviteMessageChange={setInviteMessage}
            inviteSaving={inviteSaving}
            onSubmitInvite={submitInvite}
          />
        </div>
      </motion.div>
    </div>
  );
}
