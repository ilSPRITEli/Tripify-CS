import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { api, apiMessage, treatyResponseBody } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Globe,
  Image,
  Loader2,
  MapPin,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

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

    const payload = treatyResponseBody(res);
    if (
      res.error ||
      !payload ||
      typeof payload !== "object" ||
      !("ok" in payload) ||
      payload.ok !== true ||
      !("data" in payload) ||
      !payload.data
    ) {
      toast.error(apiMessage(payload, "Could not create trip"));
      return;
    }

    toast.success("Trip created");
    navigate(`/trips/${(payload.data as { id: string }).id}`, { replace: true });
  };

  if (!ready) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Create a new trip</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Set up your adventure details
        </p>

        <form className="mt-8 space-y-6" onSubmit={(e) => void handleSubmit(e)}>
          <div className="hidden border-border bg-muted/40 h-36 cursor-not-allowed items-center justify-center rounded-2xl border-2 border-dashed opacity-80">
            <div className="text-center">
              <Image className="text-muted-foreground mx-auto h-8 w-8" />
              <p className="text-muted-foreground mt-2 text-sm">
                Cover image URL below (file upload later)
              </p>
            </div>
          </div>

          <div>
            <Label htmlFor="title">Trip title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={150}
              placeholder="e.g. Japan spring trip"
              className="mt-1.5 rounded-xl"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <Label
                className="flex items-center gap-1.5"
                htmlFor="destination"
              >
                <MapPin className="h-3.5 w-3.5" />
                Destination
              </Label>
              <Input
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                maxLength={150}
                placeholder="Tokyo"
                className="mt-1.5 rounded-xl"
              />
            </div>
            <div>
              <Label className="flex items-center gap-1.5" htmlFor="travelers">
                <Users className="h-3.5 w-3.5" />
                Travelers
              </Label>
              <Input
                id="travelers"
                type="number"
                min={1}
                required
                value={travelerCount}
                onChange={(e) => setTravelerCount(e.target.value)}
                className="mt-1.5 rounded-xl"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="country">Country (optional)</Label>
              <Input
                id="country"
                value={destinationCountry}
                onChange={(e) => setDestinationCountry(e.target.value)}
                maxLength={100}
                className="mt-1.5 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="city">City (optional)</Label>
              <Input
                id="city"
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
                maxLength={100}
                className="mt-1.5 rounded-xl"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={1000}
              rows={3}
              className="mt-1.5 rounded-xl"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label className="flex items-center gap-1.5" htmlFor="budget">
                <DollarSign className="h-3.5 w-3.5" />
                Budget (optional)
              </Label>
              <Input
                id="budget"
                type="number"
                min={0}
                step="0.01"
                value={budgetTotal}
                onChange={(e) => setBudgetTotal(e.target.value)}
                className="mt-1.5 rounded-xl"
              />
            </div>
            <div>
              <Label className="flex items-center gap-1.5" htmlFor="cover">
                <Globe className="h-3.5 w-3.5" />
                Cover image URL (optional)
              </Label>
              <Input
                id="cover"
                type="url"
                value={coverImageUrl}
                onChange={(e) => setCoverImageUrl(e.target.value)}
                placeholder="https://…"
                className="mt-1.5 rounded-xl"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label className="flex items-center gap-1.5" htmlFor="start">
                <Calendar className="h-3.5 w-3.5" />
                Start date
              </Label>
              <Input
                id="start"
                type="date"
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1.5 rounded-xl"
              />
            </div>
            <div>
              <Label className="flex items-center gap-1.5" htmlFor="end">
                <Calendar className="h-3.5 w-3.5" />
                End date
              </Label>
              <Input
                id="end"
                type="date"
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1.5 rounded-xl"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="h-11 w-full rounded-full text-base shadow-card"
            disabled={submitting}
          >
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
      </motion.div>
    </div>
  );
}
