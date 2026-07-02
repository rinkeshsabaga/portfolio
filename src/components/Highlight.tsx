import { highlight } from "@/lib/data";
import Reveal from "./Reveal";

export default function Highlight() {
  return (
    <section className="container-x py-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 p-8 sm:p-10">
          {/* glow + gradient wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(120deg, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 45%), radial-gradient(60% 120% at 90% 10%, color-mix(in oklab, var(--color-accent-2) 12%, transparent), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-accent/20">★</span>
                {highlight.badge}
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {highlight.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{highlight.body}</p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2 lg:flex-col lg:items-end">
              {highlight.points.map((p) => (
                <span
                  key={p}
                  className="rounded-lg border border-border bg-surface/60 px-3.5 py-2 text-sm font-medium text-fg"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
