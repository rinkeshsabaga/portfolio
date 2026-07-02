import { impactStats, profile } from "@/lib/data";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Build once, reuse everywhere",
    body: "I turn every bespoke integration into a repeatable plug-in, so the next customer goes live faster than the last.",
  },
  {
    title: "Own the whole outcome",
    body: "From the webhook handler to the QBR — I hold the technical build and the account health together, not one or the other.",
  },
  {
    title: "Automate the busywork",
    body: "If a task repeats, it becomes a script. Custom internal tooling cut manual operational load by 60%.",
  },
];

export default function About() {
  return (
    <section className="container-x pb-24 pt-8">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-5 leading-relaxed text-muted">
            I sit where the product meets the customer&apos;s reality: writing the
            webhook handlers, wiring the payment gateway, and standardizing the
            integration — then owning the relationship, the health check, and the QBR
            that keeps the account renewing.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <span className="text-faint">Based in</span>{" "}
              <span className="font-medium text-fg">{profile.location}</span>
            </div>
            <div>
              <span className="text-faint">Focus</span>{" "}
              <span className="font-medium text-fg">B2B SaaS · MarTech</span>
            </div>
            <div>
              <span className="text-faint">Experience</span>{" "}
              <span className="font-medium text-fg">4+ years</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {impactStats.map((s) => (
              <div key={s.label} className="bg-bg-soft p-6">
                <div className="text-3xl font-semibold tracking-tight text-accent">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-medium text-fg">{s.label}</div>
                <div className="mt-0.5 text-xs text-faint">{s.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="card h-full p-6">
              <div className="font-mono text-xs text-accent">0{i + 1}</div>
              <h3 className="mt-3 text-base font-semibold text-fg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
