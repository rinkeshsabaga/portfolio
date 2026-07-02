import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="container-x pt-32 pb-4 sm:pt-40">
      <Reveal className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
        )}
      </Reveal>
    </header>
  );
}
