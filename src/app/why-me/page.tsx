import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import PageHeader from "@/components/PageHeader";
import Highlight from "@/components/Highlight";
import About from "@/components/About";
import Recommendations from "@/components/Recommendations";

export const metadata: Metadata = {
  title: "Why Me? — Rinkesh Kumar Singh",
  description:
    "Part engineer, part success manager — fully accountable for the outcome.",
};

export default function WhyMePage() {
  return (
    <div className="relative">
      <Backdrop />
      <PageHeader
        eyebrow="Why Me?"
        title="Part engineer, part success manager — fully accountable for the outcome."
        description="I don't hand the build to one team and the relationship to another. I own both — which is why integrations ship faster and accounts churn less."
      />
      <Highlight />
      <About />
      <Recommendations />
    </div>
  );
}
