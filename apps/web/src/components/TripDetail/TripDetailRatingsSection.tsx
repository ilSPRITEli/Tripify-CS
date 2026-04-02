import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { RatingDto } from "@repo/shared";
import { Loader2, Star } from "lucide-react";

type TripDetailRatingsSectionProps = {
  canRate: boolean;
  tripIsEndedForRating: boolean;
  isMember: boolean;
  alreadyRated: boolean;
  ratingScore: number;
  onRatingScoreChange: (n: number) => void;
  ratingComment: string;
  onRatingCommentChange: (v: string) => void;
  ratingSaving: boolean;
  onSubmitRating: () => void;
  ratings: RatingDto[];
};

export function TripDetailRatingsSection({
  canRate,
  tripIsEndedForRating,
  isMember,
  alreadyRated,
  ratingScore,
  onRatingScoreChange,
  ratingComment,
  onRatingCommentChange,
  ratingSaving,
  onSubmitRating,
  ratings,
}: TripDetailRatingsSectionProps) {
  return (
    <div>
      <h2 className="text-foreground mb-4 text-sm font-semibold tracking-wide uppercase">
        Ratings
      </h2>
      {canRate ? (
        <Card className="border-border/60 shadow-card mb-6 rounded-2xl">
          <CardContent className="space-y-4 p-5">
            <p className="text-foreground text-sm font-medium">Rate this trip</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => onRatingScoreChange(n)}
                  className="rounded-md p-1 transition-colors"
                  aria-label={`${n} stars`}
                >
                  <Star
                    className={cn(
                      "h-8 w-8",
                      ratingScore >= n
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/40",
                    )}
                  />
                </button>
              ))}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rating-comment">Comment (optional)</Label>
              <Textarea
                id="rating-comment"
                value={ratingComment}
                onChange={(e) => onRatingCommentChange(e.target.value)}
                rows={3}
                placeholder="How was the trip?"
              />
            </div>
            <Button
              type="button"
              className="rounded-full"
              disabled={ratingScore < 1 || ratingSaving}
              onClick={() => void onSubmitRating()}
            >
              {ratingSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Submit rating"
              )}
            </Button>
          </CardContent>
        </Card>
      ) : tripIsEndedForRating && isMember && alreadyRated ? (
        <p className="text-muted-foreground mb-6 text-sm">
          You have already rated this trip.
        </p>
      ) : tripIsEndedForRating && !isMember ? (
        <p className="text-muted-foreground mb-6 text-sm">
          Only trip members can rate.
        </p>
      ) : !tripIsEndedForRating ? (
        <p className="text-muted-foreground mb-6 text-sm">
          Ratings open after the trip is marked complete or ended early.
        </p>
      ) : null}

      {ratings.length === 0 ? (
        <p className="text-muted-foreground text-sm">No ratings yet.</p>
      ) : (
        <ul className="space-y-4">
          {ratings.map((r) => (
            <li
              key={r.id}
              className="border-border/80 shadow-card rounded-2xl border bg-card/70 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold">
                    {r.user.fullName.slice(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.user.fullName}</p>
                    <div className="mt-0.5 flex gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-3.5 w-3.5",
                            i < r.score
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted-foreground/30",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {r.comment ? (
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {r.comment}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
