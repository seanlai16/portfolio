"use client";

import { site } from "@/content/site";
import { easeOut, motion, useReducedMotion } from "@/lib/motion";
import { Waveform } from "./waveform";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-32">
      <div className="pointer-events-none absolute -right-16 top-10 hidden text-[11rem] leading-none text-line/80 lg:block">
        <span className="font-display italic">now</span>
      </div>
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="flex items-center gap-3 text-xs tracking-[0.22em] text-signal uppercase"
          initial={reduce ? false : { opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" />
          Signal live · Grab Safety
        </motion.p>
        <motion.h1
          className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
          initial={reduce ? false : { opacity: 1, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.08, ease: easeOut }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-lg text-muted sm:text-xl"
          initial={reduce ? false : { opacity: 1, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.16, ease: easeOut }}
        >
          {site.role}. {site.headline}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted"
          initial={reduce ? false : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.28 }}
        >
          <Waveform className="text-signal" />
          <span>{site.location}</span>
          <span className="text-muted" aria-hidden>
            /
          </span>
          <a className="hover:text-signal" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
