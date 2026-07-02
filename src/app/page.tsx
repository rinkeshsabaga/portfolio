import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import CtaStrip from "@/components/CtaStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlight />
      <Marquee caption="The stack I build & integrate with" />
      <Testimonials featuredOnly />
      <CtaStrip />
    </>
  );
}
