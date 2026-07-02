import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import BrandTile from "./BrandTile";

export default function Certifications() {
  return (
    <section className="container-x pb-8 pt-4">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Licenses & Certifications
          </span>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 2) * 0.07}>
            <article className="card flex h-full gap-4 p-6">
              <BrandTile name={c.issuer} domain={c.domain} size="lg" />
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug text-fg">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                <p className="mt-2 text-xs text-faint">
                  Issued {c.issued}
                  {c.expires && ` · Expires ${c.expires}`}
                </p>
                {c.credentialId && (
                  <p className="mt-0.5 truncate font-mono text-[11px] text-faint">
                    ID {c.credentialId}
                  </p>
                )}
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs font-medium text-accent"
                  >
                    Show credential →
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
