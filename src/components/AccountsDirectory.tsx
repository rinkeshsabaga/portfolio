"use client";

import { useMemo, useState } from "react";
import { accounts, accountVerticals } from "@/lib/accounts";
import BrandTile from "./BrandTile";

const PAGE = 72;

export default function AccountsDirectory() {
  const [query, setQuery] = useState("");
  const [vertical, setVertical] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE);

  const q = query.trim().toLowerCase();

  // Accounts matching search only (used for region counts).
  const afterSearch = useMemo(
    () => (q ? accounts.filter((a) => a.name.toLowerCase().includes(q)) : accounts),
    [q]
  );

  // Search + region (used for vertical counts + as base for the grid).
  const afterSearchRegion = useMemo(
    () => (region ? afterSearch.filter((a) => a.region === region) : afterSearch),
    [afterSearch, region]
  );

  const verticalCounts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const a of afterSearchRegion) m[a.vertical] = (m[a.vertical] || 0) + 1;
    return m;
  }, [afterSearchRegion]);

  const regions = useMemo(() => {
    const m: Record<string, number> = {};
    for (const a of afterSearch) if (a.region) m[a.region] = (m[a.region] || 0) + 1;
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  }, [afterSearch]);

  const filtered = useMemo(
    () => (vertical ? afterSearchRegion.filter((a) => a.vertical === vertical) : afterSearchRegion),
    [afterSearchRegion, vertical]
  );

  const shown = filtered.slice(0, visible);
  const resetPage = () => setVisible(PAGE);

  const verticalsPresent = accountVerticals.filter((v) => verticalCounts[v]);

  return (
    <section className="container-x py-8">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent/60" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Account book
        </span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        {accounts.length}+ brands I&apos;ve owned as CSM
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        The real portfolio — search by name, or filter by vertical and region.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[16rem_1fr]">
        {/* Sidebar: search + verticals */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetPage();
            }}
            placeholder="Search brand name…"
            className="w-full rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-sm text-fg outline-none placeholder:text-faint focus:border-accent/50"
          />

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            <button
              onClick={() => {
                setVertical(null);
                resetPage();
              }}
              className={`flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                vertical === null
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:bg-surface hover:text-fg"
              }`}
            >
              <span className="font-medium">All</span>
              <span className="rounded-full bg-surface px-2 py-0.5 text-xs text-faint">
                {afterSearchRegion.length}
              </span>
            </button>
            {verticalsPresent.map((v) => (
              <button
                key={v}
                onClick={() => {
                  setVertical(v);
                  resetPage();
                }}
                className={`flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  vertical === v
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-surface hover:text-fg"
                }`}
              >
                <span className="whitespace-nowrap font-medium lg:whitespace-normal">{v}</span>
                <span className="rounded-full bg-surface px-2 py-0.5 text-xs text-faint">
                  {verticalCounts[v]}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main: region chips + grid */}
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setRegion(null);
                resetPage();
              }}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                region === null
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border bg-surface/50 text-muted hover:text-fg"
              }`}
            >
              All regions
            </button>
            {regions.map(([r, n]) => (
              <button
                key={r}
                onClick={() => {
                  setRegion(region === r ? null : r);
                  resetPage();
                }}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  region === r
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-border bg-surface/50 text-muted hover:text-fg"
                }`}
              >
                {r} <span className="text-faint">{n}</span>
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p className="rounded-xl border border-border bg-surface/40 p-8 text-center text-sm text-muted">
              No brands match your filters.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {shown.map((a) => (
                <div
                  key={a.name}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-surface/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface"
                >
                  <BrandTile name={a.name} domain={a.domain} />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-fg">{a.name}</div>
                    {a.region && <div className="truncate text-xs text-faint">{a.region}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {visible < filtered.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE)}
                className="rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/40"
              >
                Show more ({filtered.length - visible} left)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
