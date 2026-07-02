import { recommendations } from "@/lib/data";
import Reveal from "./Reveal";
import Avatar from "./Avatar";

export default function Recommendations() {
  return (
    <section className="container-x pb-24 pt-4">
      <Reveal className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            LinkedIn recommendations
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          What colleagues say about working with me
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {recommendations.map((r, i) => (
          <Reveal key={r.name} delay={(i % 2) * 0.08}>
            <figure className="card flex h-full flex-col p-6">
              <div className="flex items-start gap-3">
                <Avatar
                  name={r.name}
                  className="h-11 w-11 shrink-0 rounded-full text-sm"
                />
                <div className="min-w-0">
                  <figcaption className="text-sm font-semibold text-fg">
                    {r.name}
                  </figcaption>
                  <p className="text-xs leading-snug text-faint">{r.title}</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="ml-auto h-5 w-5 shrink-0 text-faint"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              <p className="mt-4 text-xs text-faint">
                {r.relationship} · {r.date}
              </p>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
