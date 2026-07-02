import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";
import IntegrationGrid from "@/components/IntegrationGrid";

export const metadata: Metadata = {
  title: "SaaS Toolkit — Rinkesh Kumar Singh",
  description:
    "The development, integration, automation, CRM, and messaging stack behind the outcomes.",
};

export default function ToolkitPage() {
  return (
    <div className="relative">
      <Backdrop />
      <PageHeader
        eyebrow="SaaS Toolkit"
        title="The toolkit behind the outcomes."
        description="Hands-on with the full integration stack — from writing the webhook handler in Node.js to wiring the payment gateway, CRM, and WhatsApp flow it feeds."
      />
      <Skills />
      <IntegrationGrid />
    </div>
  );
}
