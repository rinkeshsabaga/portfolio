"use client";

import { useState } from "react";

function monogram(name: string) {
  const words = name.replace(/[^a-zA-Z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  if (!words.length) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

// Deterministic, theme-friendly color for the monogram fallback.
const PALETTE = [
  "#4f46e5", "#0891b2", "#0d9488", "#059669", "#65a30d",
  "#d97706", "#dc2626", "#db2777", "#7c3aed", "#2563eb",
];
function colorFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

export default function BrandTile({
  name,
  domain,
  logo,
  size = "sm",
}: {
  name: string;
  domain?: string;
  logo?: string; // explicit logo (local file or URL) — takes precedence
  size?: "sm" | "lg";
}) {
  // DuckDuckGo returns a real 404 when it has no icon (unlike Google's globe),
  // so onError reliably falls through to the monogram.
  const [failed, setFailed] = useState(false);
  const box = size === "lg" ? "h-16 w-16" : "h-12 w-12";
  const src = logo || (domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : undefined);
  const showImg = !!src && !failed;

  if (showImg) {
    return (
      <span className={`grid ${box} shrink-0 place-items-center overflow-hidden rounded-xl bg-white ${size === "lg" ? "p-2.5" : "p-2"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }

  return (
    <span
      className={`grid ${box} shrink-0 place-items-center rounded-xl ${size === "lg" ? "text-lg" : "text-sm"} font-bold text-white`}
      style={{ backgroundColor: colorFor(name) }}
    >
      {monogram(name)}
    </span>
  );
}
