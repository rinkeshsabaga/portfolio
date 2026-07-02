import { education, recognition } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="container-x pb-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Education & Recognition
          </span>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal className="lg:col-span-1">
          <div className="card h-full p-6">
            <div className="font-mono text-xs uppercase tracking-wide text-faint">
              Education
            </div>
            {education.map((e) => (
              <div key={e.title} className="mt-3">
                <div className="text-sm font-medium text-fg">{e.title}</div>
                <div className="mt-1 text-xs text-faint">
                  {e.org} · {e.year}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {recognition.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 0.06}>
            <div className="card h-full p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wide text-faint">
                  {r.year ? "Award / Cert" : "Volunteering"}
                </span>
                {r.year && (
                  <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[10px] text-accent">
                    {r.year}
                  </span>
                )}
              </div>
              <div className="mt-3 text-sm font-medium text-fg">{r.title}</div>
              <div className="mt-1 text-xs text-faint">{r.org}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
