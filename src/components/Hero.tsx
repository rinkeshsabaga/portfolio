"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { headlineStats, profile, reviewProof } from "@/lib/data";
import Avatar from "./Avatar";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.5, 0.35, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%)",
            animation: "float-glow 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[-6%] top-[20%] h-[24rem] w-[24rem] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-accent-2) 16%, transparent), transparent 70%)",
            animation: "float-glow 16s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-x">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="flex items-center gap-4">
            <Avatar
              src={profile.photo}
              name={profile.name}
              className="h-16 w-16 shrink-0 rounded-full border border-border object-cover shadow-lg sm:h-20 sm:w-20"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted backdrop-blur">
              {profile.available && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
              )}
              Available for new challenges · {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            I turn{" "}
            <span className="text-gradient font-medium">bespoke integrations</span> into
            repeatable systems — engineering{" "}
            <span className="text-fg">checkout, payment, CRM & WhatsApp</span> automation
            that ships faster and churns less.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            {profile.roles.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-xs text-faint"
              >
                {r}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/customers"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              View case studies
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40"
            >
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted"
          >
            <span className="flex items-center gap-0.5 text-amber-400" aria-hidden>
              {"★★★★★"}
            </span>
            <span>
              <span className="font-semibold text-fg">
                {reviewProof.namedReviews} five-star reviews
              </span>{" "}
              on G2 &amp; Shopify name me personally
            </span>
          </motion.div>
        </motion.div>

        {/* Headline stats */}
        <motion.dl
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 lg:grid-cols-4"
        >
          {headlineStats.map((s) => (
            <motion.div key={s.label} variants={item} className="bg-bg-soft p-5 sm:p-6">
              <dt className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm font-medium text-fg/90">{s.label}</dd>
              {s.sub && <dd className="mt-0.5 text-xs text-faint">{s.sub}</dd>}
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
