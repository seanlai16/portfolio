import Link from "next/link";
import type { JourneyChapter } from "@/content/journey";
import { getProject } from "@/content/projects";
import { formatRange, yearOf } from "@/lib/dates";
import { Reveal } from "@/lib/motion";
import { Waveform } from "./waveform";

export function ChapterCard({ chapter }: { chapter: JourneyChapter }) {
  const isCurrent = chapter.end === null;
  const project = chapter.projectSlug ? getProject(chapter.projectSlug) : undefined;
  const href = chapter.projectSlug
    ? `/work/${chapter.projectSlug}`
    : `/work/${chapter.slug}`;

  return (
    <article
      id={chapter.slug}
      data-chapter={chapter.slug}
      className="relative scroll-mt-24 lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12 lg:py-8"
    >
      <div className="sticky top-16 z-10 -mx-4 mb-4 border-b border-line/60 bg-background/90 px-4 py-3 backdrop-blur-md lg:top-28 lg:mx-0 lg:mb-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <p className="font-display text-4xl text-signal italic lg:text-6xl">
          {yearOf(chapter.start)}
        </p>
        <p className="mt-1 text-xs tracking-wide text-muted uppercase">
          {formatRange(chapter.start, chapter.end)}
        </p>
        {isCurrent ? (
          <p className="mt-3 hidden items-center gap-2 text-xs text-signal lg:flex">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />
            Present
          </p>
        ) : (
          <Waveform className="mt-4 hidden text-signal-dim lg:block" />
        )}
      </div>

      <Reveal>
        <div className="duo-card p-5 sm:p-8">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            {chapter.kind === "education" ? "Education" : "Role"} · {chapter.org}
          </p>
          <h3 className="mt-3 font-display text-2xl leading-tight text-foreground sm:text-3xl">
            {chapter.role}
          </h3>
          {chapter.location ? (
            <p className="mt-2 text-sm text-muted">{chapter.location}</p>
          ) : null}
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/90">
            {chapter.summary}
          </p>
          {chapter.highlights.length > 0 ? (
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {chapter.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={href}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-signal px-4 text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-on-signal"
            >
              {project ? `Read ${project.title}` : chapter.kind === "education" ? "About this degree" : "About this role"}
            </Link>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
