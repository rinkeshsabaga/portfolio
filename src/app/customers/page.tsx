import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FeaturedBrands from "@/components/FeaturedBrands";
import AccountsDirectory from "@/components/AccountsDirectory";

export const metadata: Metadata = {
  title: "Customers — Rinkesh Kumar Singh",
  description:
    "Case studies with numbers behind them — Gujarat Titans, Hair Originals (Meta-featured), Suwasthi, Regrip, and more.",
};

export default function CustomersPage() {
  return (
    <div className="relative">
      <Backdrop />
      <PageHeader
        eyebrow="Customers"
        title="Case studies with numbers behind them."
        description="A sample of integration and automation builds — each one a real system in production, measured by the outcome it drove."
      />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <FeaturedBrands />
      <AccountsDirectory />
    </div>
  );
}
