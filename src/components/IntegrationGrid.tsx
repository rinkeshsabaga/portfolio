import { integrations } from "@/lib/data";
import Reveal from "./Reveal";
import LogoTile from "./LogoTile";

export default function IntegrationGrid() {
  return (
    <section className="container-x pb-12">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            The integration wall
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Every integration in QuickReply.ai&apos;s catalog —{" "}
          <span className="font-medium text-fg">{integrations.length} platforms</span> I
          implement, connect, and support for customers across payments, checkout,
          shipping, CRM, marketing, and messaging.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {integrations.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.name}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3 transition-colors hover:border-accent/40 hover:bg-surface"
              >
                <LogoTile
                  name={it.name}
                  domain={it.domain}
                  iconNode={Icon ? <Icon className="h-4 w-4" /> : null}
                />
                <span className="truncate text-sm font-medium text-fg">{it.name}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
