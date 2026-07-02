import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const methods = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "LinkedIn", value: "in/rinkeshsingh0110", href: profile.linkedin },
    { label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section className="container-x pb-24 pt-8">
      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="card relative flex h-full flex-col justify-center overflow-hidden p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 opacity-70"
              style={{
                background:
                  "radial-gradient(70% 60% at 20% 0%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)",
              }}
            />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Have an integration that needs to just work?
            </h2>
            <p className="mt-4 max-w-md text-muted">
              I&apos;m open to roles and collaborations in implementation, customer
              success, and integration engineering. The fastest way to reach me is email
              — I usually reply within a day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid h-full gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {methods.map((m) => {
              const content = (
                <div className="flex h-full flex-col justify-center bg-bg-soft p-6 transition-colors hover:bg-surface">
                  <div className="font-mono text-xs uppercase tracking-wide text-faint">
                    {m.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-fg">{m.value}</div>
                </div>
              );
              return m.href ? (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={m.label}>{content}</div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
