import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function CreateTrip() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [budgetTotal, setBudgetTotal] = useState("");
  const [travelerCount, setTravelerCount] = useState("2");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  useEffect(() => {
    const run = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/", { replace: true });
        return;
      }
      setReady(true);
    };
    void run();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const travelers = Number.parseInt(travelerCount, 10);
    if (!title.trim() || !destination.trim() || !startDate || !endDate) {
      toast.error("Please fill in title, destination, and dates");
      return;
    }
    if (!Number.isFinite(travelers) || travelers < 1) {
      toast.error("Travelers must be at least 1");
      return;
    }

    const budgetNum =
      budgetTotal.trim() === "" ? undefined : Number.parseFloat(budgetTotal);
    if (
      budgetTotal.trim() !== "" &&
      (!Number.isFinite(budgetNum) || (budgetNum ?? 0) < 0)
    ) {
      toast.error("Budget must be a non-negative number");
      return;
    }

    let cover: string | null | undefined;
    const coverTrim = coverImageUrl.trim();
    if (coverTrim === "") {
      cover = undefined;
    } else {
      try {
        cover = new URL(coverTrim).href;
      } catch {
        toast.error("Cover image must be a valid URL");
        return;
      }
    }

    const body = {
      title: title.trim(),
      description: description.trim() === "" ? null : description.trim(),
      destination: destination.trim(),
      destinationCountry:
        destinationCountry.trim() === "" ? null : destinationCountry.trim(),
      destinationCity:
        destinationCity.trim() === "" ? null : destinationCity.trim(),
      budgetTotal: budgetNum,
      travelerCount: travelers,
      startDate: `${startDate}T00:00:00.000Z`,
      endDate: `${endDate}T00:00:00.000Z`,
      timezone: "Asia/Bangkok",
      coverImageUrl: cover,
    };

    setSubmitting(true);
    const res = await api.trips.post(body);
    setSubmitting(false);

    const payload = res.data;
    if (
      res.error ||
      !payload ||
      payload.ok !== true ||
      !("data" in payload) ||
      !payload.data
    ) {
      const msg =
        payload && "message" in payload && typeof payload.message === "string"
          ? payload.message
          : "Could not create trip";
      toast.error(msg);
      return;
    }

    toast.success("Trip created");
    navigate(`/trips/${payload.data.id}`, { replace: true });
  };

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-muted/20 to-background px-4 py-10">
      <div className="mx-auto w-full max-w-lg">
        <Link
          to="/dashboard"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <Card className="border-border/50 shadow-elevated">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">New trip</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => void handleSubmit(e)}>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  maxLength={150}
                  placeholder="Japan Spring Trip"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                  maxLength={150}
                  placeholder="Tokyo"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="country">Country (optional)</Label>
                  <Input
                    id="country"
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City (optional)</Label>
                  <Input
                    id="city"
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={1000}
                  rows={3}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (optional)</Label>
                  <Input
                    id="budget"
                    type="number"
                    min={0}
                    step="0.01"
                    value={budgetTotal}
                    onChange={(e) => setBudgetTotal(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travelers">Travelers</Label>
                  <Input
                    id="travelers"
                    type="number"
                    min={1}
                    required
                    value={travelerCount}
                    onChange={(e) => setTravelerCount(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="start">Start date</Label>
                  <Input
                    id="start"
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end">End date</Label>
                  <Input
                    id="end"
                    type="date"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover">Cover image URL (optional)</Label>
                <Input
                  id="cover"
                  type="url"
                  value={coverImageUrl}
                  onChange={(e) => setCoverImageUrl(e.target.value)}
                  placeholder="https://..."
                />
              </div>

              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating…
                  </>
                ) : (
                  "Create trip"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
