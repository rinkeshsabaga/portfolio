import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import PageHeader from "@/components/PageHeader";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Journey — Rinkesh Kumar Singh",
  description:
    "Four roles, one growth story — from Onboarding Specialist to Senior Implementation Specialist & CSM at QuickReply.ai.",
};

export default function JourneyPage() {
  return (
    <div className="relative">
      <Backdrop />
      <PageHeader
        eyebrow="Journey"
        title="Four roles, one growth story."
        description="From onboarding support to owning a $50K/month portfolio — the path, promotions, and the education and recognition along the way."
      />
      <Experience />
      <Certifications />
      <Education />
    </div>
  );
}
