import { featuredBrands } from "@/lib/featured";
import { logoManifest } from "@/lib/logoManifest";
import Reveal from "./Reveal";
import BrandTile from "./BrandTile";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function FeaturedBrands() {
  return (
    <section className="container-x py-8">
      <Reveal className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Featured customers
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Notable brands I&apos;ve worked with
        </h2>
        <p className="mt-3 text-sm text-muted">
          A handpicked slice of the portfolio — from IPL teams and universities to
          household D2C names.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featuredBrands.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface/40 p-5 text-center transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <BrandTile
                name={b.name}
                domain={b.domain}
                logo={b.logo || logoManifest[slug(b.name)]}
                size="lg"
              />
              <span className="text-sm font-medium text-fg">{b.name}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
