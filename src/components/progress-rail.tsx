"use client";

import { useEffect, useState } from "react";
import type { JourneyChapter } from "@/content/journey";
import { yearOf } from "@/lib/dates";

export function ProgressRail({ chapters }: { chapters: JourneyChapter[] }) {
  const [active, setActive] = useState(chapters[0]?.slug ?? "");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]"),
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const slug = visible?.target.getAttribute("data-chapter");
        if (slug) setActive(slug);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Journey years"
      className="sticky top-28 hidden w-20 shrink-0 lg:block"
    >
      <ol className="relative space-y-5 border-l border-line pl-4">
        {chapters.map((chapter) => {
          const isActive = chapter.slug === active;
          return (
            <li key={chapter.slug}>
              <a
                href={`#${chapter.slug}`}
                className={`block font-display text-sm transition-colors ${
                  isActive ? "text-signal" : "text-muted hover:text-foreground"
                }`}
              >
                {yearOf(chapter.start)}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
