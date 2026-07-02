import { caseStudies } from "@/lib/data";
import Reveal from "./Reveal";
import BrandTile from "./BrandTile";

export default function CaseStudies() {
  return (
    <section className="container-x py-8">
      <Reveal className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Published & authored
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {caseStudies.length} case studies I&apos;ve written on QuickReply.ai
        </h2>
        <p className="mt-3 text-sm text-muted">
          Real campaigns I architected and documented — each links to the published
          study. Numbers are the brands&apos; actual results.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.url} delay={(i % 3) * 0.06}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <BrandTile name={c.brand} domain={c.domain} />
                  <span className="text-sm font-semibold text-fg">{c.brand}</span>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </div>

              <div className="mt-4 text-2xl font-semibold tracking-tight text-accent">
                {c.metric}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-faint">
                {c.tactic}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.summary}</p>

              <span className="mt-4 text-xs font-medium text-accent">
                Read the case study →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
