import { reviewProof, testimonials, type Testimonial } from "@/lib/data";
import Reveal from "./Reveal";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < n ? "text-amber-400" : "text-border"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function initialsOf(name: string) {
  return name
    .replace(/[^a-zA-Z0-9 .]/g, "")
    .split(/[ .]/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Card({ t }: { t: Testimonial }) {
  const verifiedLabel = t.source === "Shopify" ? "Verified merchant" : "Validated Reviewer";
  return (
    <article className="card mb-5 break-inside-avoid p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
            {initialsOf(t.name)}
          </span>
          <div>
            <div className="text-sm font-semibold text-fg">{t.name}</div>
            <div className="text-xs text-faint">
              {t.role} · {t.segment}
            </div>
          </div>
        </div>
        <span className="shrink-0 font-mono text-[11px] text-faint">{t.date}</span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Stars n={t.rating} />
        <span className="text-xs font-medium text-muted">{t.rating.toFixed(1)}/5</span>
      </div>

      {t.title && (
        <h3 className="mt-3 text-base font-semibold leading-snug text-fg">
          &ldquo;{t.title}&rdquo;
        </h3>
      )}
      <p className="mt-2 text-sm leading-relaxed text-muted">{t.quote}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
        <span className="rounded-md bg-surface/60 px-2 py-1 text-[11px] text-faint">
          {verifiedLabel}
        </span>
        <span className="rounded-md border border-accent/25 bg-accent/10 px-2 py-1 text-[11px] font-medium text-accent">
          {t.source}
        </span>
      </div>
    </article>
  );
}

export default function Testimonials({
  featuredOnly = false,
  heading = true,
}: {
  featuredOnly?: boolean;
  heading?: boolean;
}) {
  const list = featuredOnly ? testimonials.filter((t) => t.featured) : testimonials;

  return (
    <section className="container-x py-8">
      {heading && (
        <Reveal className="mb-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              What customers say
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {reviewProof.namedReviews} five-star reviews name me personally.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Across QuickReply.ai&apos;s {reviewProof.totalReviews} reviews on G2 and the
            Shopify App Store, {reviewProof.namedReviews} of the 5-star ones call me out
            by name for the support and integration work. A few below.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5">
              <Stars n={5} />
              <span className="text-xs font-medium text-muted">
                {reviewProof.rating} average
              </span>
            </span>
            <span className="rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs font-medium text-muted">
              G2 · verified
            </span>
            <span className="rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs font-medium text-muted">
              Shopify App Store · verified merchants
            </span>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.05}>
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {list.map((t) => (
            <Card key={t.name + t.date} t={t} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
