import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import type { TemplateListItemDto } from "@repo/shared";
import { CalendarRange, LayoutTemplate, MapPin, Search, Users } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function formatYmd(iso: string) {
  return iso.slice(0, 10);
}

export default function Templates() {
  const [items, setItems] = useState<TemplateListItemDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [country, setCountry] = useState("");
  const [searchQ, setSearchQ] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  const load = useCallback(async () => {
    const res = await api.templates.get({
      query: {
        ...(searchQ.trim() ? { q: searchQ.trim() } : {}),
        ...(searchCountry.trim()
          ? { destinationCountry: searchCountry.trim() }
          : {}),
      },
    });
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
      toast.error("Could not load templates");
    } else {
      setItems(payload.data as TemplateListItemDto[]);
    }
    setLoading(false);
  }, [searchQ, searchCountry]);

  useEffect(() => {
    setLoading(true);
    void load();
  }, [load]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQ(q);
    setSearchCountry(country);
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-8"
      >
        <div className="gradient-hero rounded-2xl p-8 text-center text-primary-foreground shadow-elevated md:p-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Trip <span className="text-gradient-gold font-bold">Templates</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/85">
            Browse published trips and clone one to start your own plan.
          </p>
        </div>

        <form
          onSubmit={submitSearch}
          className="border-border/80 shadow-card flex flex-col gap-3 rounded-2xl border bg-card p-4 sm:flex-row sm:items-end"
        >
          <div className="grid flex-1 gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-muted-foreground text-xs font-medium">
                Search
              </label>
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Title or destination"
                  className="rounded-full pl-9"
                />
              </div>

            </div>
            <div className="space-y-2">
              <label className="text-muted-foreground text-xs font-medium">
                Country
              </label>
              <Input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Japan"
                className="rounded-full"
              />
            </div>
          </div>
          <Button type="submit" className="rounded-full sm:shrink-0">
            Search
          </Button>
        </form>

        {loading ? (
          <p className="text-muted-foreground text-sm">Loading templates…</p>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <div className="bg-muted/70 flex h-20 w-20 items-center justify-center rounded-2xl shadow-card">
              <LayoutTemplate className="text-muted-foreground h-10 w-10" />
            </div>
            <h2 className="mt-6 text-lg font-semibold">No templates found</h2>
            <p className="text-muted-foreground mt-1 max-w-md text-sm">
              Try another search or publish a trip from My Trips.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <Link to="/trips">My trips</Link>
            </Button>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => (
              <li key={t.id}>
                <Link to={`/templates/${t.id}`} className="block h-full">
                  <Card className="border-border/80 shadow-card hover:shadow-card-hover h-full rounded-2xl transition-shadow">
                    <CardContent className="flex h-full flex-col p-5">
                      <h2 className="text-foreground line-clamp-2 font-semibold">
                        {t.title}
                      </h2>
                      <p className="text-muted-foreground mt-1 flex items-center gap-1 text-sm">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">
                          {t.destination}
                          {t.destinationCountry
                            ? ` · ${t.destinationCountry}`
                            : null}
                        </span>
                      </p>
                      <div className="text-muted-foreground mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                        <span className="flex items-center gap-1">
                          <CalendarRange className="h-3.5 w-3.5" />
                          {formatYmd(t.startDate)} → {formatYmd(t.endDate)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {t.travelerCount} travelers
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-4 text-xs">
                        by {t.owner.fullName} · {t.templateUseCount} clones
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
