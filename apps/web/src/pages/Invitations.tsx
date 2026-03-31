import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Invitations() {
  return (
    <div className="container max-w-2xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mx-auto max-w-lg text-center"
      >
        <div className="bg-muted/60 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl shadow-card">
          <Mail className="text-muted-foreground h-10 w-10" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Invitations</h1>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          Trip invitations from friends will appear here. This part of the
          product is coming in a later milestone.
        </p>
        <Button asChild className="mt-8 rounded-full">
          <Link to="/trips">Back to My Trips</Link>
        </Button>
      </motion.div>
    </div>
  );
}
