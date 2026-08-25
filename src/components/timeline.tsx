"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import type { JourneyChapter } from "@/content/journey";
import { useReducedMotion } from "@/lib/motion";
import { ChapterCard } from "./chapter-card";
import { ProgressRail } from "./progress-rail";

export function Timeline({ chapters }: { chapters: JourneyChapter[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="journey"
      className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.22em] text-signal uppercase">Journey</p>
        <h2 className="mt-3 font-display text-3xl italic text-foreground sm:text-5xl">
          Safety lead, then the path that got here.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Current role first. Then AudioProtect, the iOS years at Grab, Fusionex, a UK
          scholarship, and Taylor’s.
        </p>

        <div className="mt-14 flex gap-10 lg:mt-20">
          <ProgressRail chapters={chapters} />

          <div ref={containerRef} className="relative min-w-0 flex-1">
            <svg
              className="pointer-events-none absolute top-0 left-[0.4rem] hidden h-full w-8 text-signal lg:block"
              viewBox="0 0 32 1000"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M4 0 L4 1000"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <motion.path
                d="M4 0 L4 1000"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={reduce ? undefined : { pathLength }}
              />
              {chapters.map((_, index) => {
                const y = 40 + (index * 920) / Math.max(chapters.length - 1, 1);
                return (
                  <polyline
                    key={index}
                    points={`4,${y} 10,${y - 6} 16,${y} 22,${y + 6} 28,${y}`}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>

            <div className="space-y-10 lg:space-y-24 lg:pl-12">
              {chapters.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
