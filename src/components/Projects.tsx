import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="container-x pb-8 pt-8">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={(i % 3) * 0.08}
            className={p.featured ? "lg:col-span-3" : "lg:col-span-2"}
          >
            <article className="card group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-accent">
                    {p.category}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>

              <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-fg">
                    {p.metric}
                  </div>
                  <div className="text-xs text-faint">{p.metricLabel}</div>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface/60 px-2 py-1 text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
