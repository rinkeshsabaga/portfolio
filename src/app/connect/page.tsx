import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Let's Connect — Rinkesh Kumar Singh",
  description:
    "Open to roles and collaborations in implementation, customer success, and integration engineering.",
};

export default function ConnectPage() {
  return (
    <div className="relative">
      <Backdrop />
      <PageHeader
        eyebrow="Let's Connect"
        title="Let's build something that just works."
        description="Open to roles and collaborations in implementation, customer success, and integration engineering. Reach out — I usually reply within a day."
      />
      <Contact />
    </div>
  );
}
