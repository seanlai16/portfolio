import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Waveform } from "@/components/waveform";
import {
  getAdjacentChapters,
  getChapter,
  journey,
} from "@/content/journey";
import { getProject } from "@/content/projects";
import { formatRange } from "@/lib/dates";
import { getAllWorkSlugs, isProjectSlug } from "@/lib/work";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const chapter = getChapter(slug);
  const title = project?.title ?? chapter?.role;
  if (!title) return {};
  return { title };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const chapter = getChapter(slug) ?? (project ? getChapter(project.relatedChapterSlug) : undefined);

  if (!chapter && !project) {
    notFound();
  }

  const adjacentSlug = chapter?.slug ?? project?.relatedChapterSlug ?? slug;
  const { prev, next } = getAdjacentChapters(adjacentSlug);
  const relatedProject =
    project ?? (chapter?.projectSlug ? getProject(chapter.projectSlug) : undefined);

  const title = project?.title ?? chapter?.role ?? "";
  const kicker = project ? `${project.org} · Project` : `${chapter?.org}`;
  const period = chapter ? formatRange(chapter.start, chapter.end) : "";

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="flex items-center gap-3 text-xs tracking-[0.22em] text-signal uppercase">
        <Waveform className="text-signal" />
        {kicker}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-6xl">
        {title}
      </h1>
      {period ? <p className="mt-4 text-sm text-muted">{period}</p> : null}
      {chapter && !isProjectSlug(slug) ? (
        <>
          <p className="mt-6 text-lg leading-8 text-muted">{chapter.summary}</p>
          {chapter.highlights.length > 0 ? (
            <ul className="mt-8 space-y-2 text-sm text-muted">
              {chapter.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : null}
      {isProjectSlug(slug) && relatedProject ? (
        <>
          <p className="mt-6 text-lg leading-8 text-muted">{relatedProject.summary}</p>
          <div className="mt-8 space-y-5 text-base leading-7 text-foreground/90">
            {relatedProject.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </>
      ) : null}

      {chapter?.projectSlug && !isProjectSlug(slug) ? (
        <p className="mt-10">
          <Link
            href={`/work/${chapter.projectSlug}`}
            className="text-signal hover:underline"
          >
            Deep dive: {relatedProject?.title}
          </Link>
        </p>
      ) : null}

      {isProjectSlug(slug) && project ? (
        <p className="mt-10 text-sm text-muted">
          From the{" "}
          <Link href={`/work/${project.relatedChapterSlug}`} className="text-signal hover:underline">
            {getChapter(project.relatedChapterSlug)?.role}
          </Link>{" "}
          chapter.
        </p>
      ) : null}

      <nav className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:justify-between">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group min-h-11">
            <span className="block text-xs tracking-wide text-muted uppercase">Previous</span>
            <span className="text-foreground group-hover:text-signal">{prev.role}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="group min-h-11 sm:text-right">
            <span className="block text-xs tracking-wide text-muted uppercase">Next</span>
            <span className="text-foreground group-hover:text-signal">{next.role}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <p className="mt-10 text-sm">
        <Link href="/#journey" className="text-muted hover:text-signal">
          ← All {journey.length} chapters
        </Link>
      </p>
    </article>
  );
}
