import { Button } from "@/components/ui/button";
import { LayoutTemplate } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Templates() {
  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-10"
      >
        <div className="gradient-hero rounded-2xl p-8 text-center text-primary-foreground shadow-elevated md:p-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Trip <span className="text-gradient-gold font-bold">Templates</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/85">
            Discover trip plans from the community and clone them for your own
            adventure — launching soon.
          </p>
        </div>

        <div className="flex flex-col items-center py-8 text-center">
          <div className="bg-muted/70 flex h-20 w-20 items-center justify-center rounded-2xl shadow-card">
            <LayoutTemplate className="text-muted-foreground h-10 w-10" />
          </div>
          <h2 className="mt-6 text-lg font-semibold">No templates yet</h2>
          <p className="text-muted-foreground mt-1 max-w-md text-sm">
            Published templates will show up here once that feature is wired to
            the API.
          </p>
          <Button asChild variant="outline" className="mt-6 rounded-full">
            <Link to="/trips">Browse my trips</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
