"use client";

import { useState } from "react";
import type { ReactNode } from "react";

function PlugGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-400" fill="none" aria-hidden>
      <path
        d="M9 7V4m6 3V4M7.5 7h9v4a4.5 4.5 0 0 1-9 0V7Zm4.5 9v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LogoTile({
  name,
  domain,
  iconNode,
}: {
  name: string;
  domain?: string;
  iconNode?: ReactNode;
}) {
  const sources = domain
    ? [
        `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
        `https://icons.duckduckgo.com/ip3/${domain}.ico`,
      ]
    : [];
  const [stage, setStage] = useState(0);
  const showImg = stage < sources.length;

  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1.5">
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={sources[stage]}
          alt={`${name} logo`}
          loading="lazy"
          className="h-full w-full object-contain"
          onError={() => setStage((s) => s + 1)}
        />
      ) : iconNode ? (
        <span className="text-neutral-800">{iconNode}</span>
      ) : (
        <PlugGlyph />
      )}
    </span>
  );
}
