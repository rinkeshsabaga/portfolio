import { company, companyLocation, companyPeriod, experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="container-x pb-16 pt-8">
      <Reveal className="mb-8 flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border bg-surface/40 px-5 py-4">
        <div>
          <h2 className="text-lg font-semibold text-fg">{company}</h2>
          <p className="text-sm text-faint">{companyLocation}</p>
        </div>
        <span className="font-mono text-xs text-accent">{companyPeriod}</span>
      </Reveal>

      <div className="relative border-l border-border pl-6 sm:pl-8">
        {experience.map((role, i) => (
          <Reveal key={role.title} delay={i * 0.05} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2rem+5px)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-fg">{role.title}</h3>
              <span className="font-mono text-xs text-faint">{role.period}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {role.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
