import { brands } from "@/lib/data";
import Reveal from "./Reveal";

export default function Brands() {
  return (
    <section className="container-x py-16">
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface/30 px-6 py-10 text-center sm:px-10">
          <p className="text-sm text-muted">
            Trusted with delivery for{" "}
            <span className="font-medium text-fg">600+ brands</span> across EdTech,
            Healthcare, E-commerce &amp; Sports — including:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {brands.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-fg"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
