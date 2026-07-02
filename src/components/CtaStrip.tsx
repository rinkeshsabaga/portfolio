import Link from "next/link";
import Reveal from "./Reveal";

const cards = [
  {
    href: "/customers",
    eyebrow: "Customers",
    title: "See the case studies",
    body: "Gujarat Titans, Meta-featured chatbots, 70–80% recovery lifts.",
  },
  {
    href: "/toolkit",
    eyebrow: "SaaS Toolkit",
    title: "Explore the stack",
    body: "40+ platforms across payments, e-commerce, CRM & automation.",
  },
  {
    href: "/connect",
    eyebrow: "Let's Connect",
    title: "Start a conversation",
    body: "Open to implementation, CS, and integration engineering roles.",
  },
];

export default function CtaStrip() {
  return (
    <section className="container-x py-24">
      <div className="grid gap-5 sm:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.href} delay={i * 0.07}>
            <Link
              href={c.href}
              className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {c.eyebrow}
              </span>
              <span className="mt-3 text-lg font-semibold text-fg">{c.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {c.body}
              </span>
              <span className="mt-4 text-sm font-medium text-accent">
                Explore{" "}
                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
