import { marqueeLogos } from "@/lib/data";

function IntegrationRow({ reverse = false }: { reverse?: boolean }) {
  const list = [...marqueeLogos, ...marqueeLogos];
  return (
    <div
      className={`flex w-max shrink-0 items-center gap-3 ${
        reverse ? "animate-marquee-rev" : "animate-marquee"
      }`}
    >
      {list.map((it, i) => {
        const Icon = it.icon;
        return (
          <div
            key={`${it.name}-${i}`}
            className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg"
          >
            {Icon ? (
              <Icon className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
            ) : (
              <span className="grid h-4 w-4 place-items-center rounded-sm bg-accent/15 text-[9px] font-bold text-accent">
                {it.name[0]}
              </span>
            )}
            <span className="whitespace-nowrap font-medium">{it.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function Marquee({ caption }: { caption?: string }) {
  return (
    <section className="border-y border-border/70 bg-bg-soft/40 py-12">
      {caption && (
        <div className="container-x">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {caption}
          </p>
        </div>
      )}

      <div className={`marquee-mask flex flex-col gap-3 overflow-hidden ${caption ? "mt-8" : ""}`}>
        <div className="flex gap-3">
          <IntegrationRow />
        </div>
        <div className="flex gap-3">
          <IntegrationRow reverse />
        </div>
      </div>
    </section>
  );
}
