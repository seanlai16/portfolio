import type { Build } from "@/content/builds";
import { formatDay, yearOf } from "@/lib/dates";
import { Reveal } from "@/lib/motion";

export function BuildCard({ build }: { build: Build }) {
  return (
    <article
      id={build.slug}
      className="relative scroll-mt-24 lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12 lg:py-8"
    >
      <div className="sticky top-16 z-10 -mx-4 mb-4 border-b border-line/60 bg-background/90 px-4 py-3 backdrop-blur-md lg:top-28 lg:mx-0 lg:mb-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <p className="font-display text-4xl text-signal italic lg:text-6xl">
          {yearOf(build.updated)}
        </p>
        <p className="mt-1 text-xs tracking-wide text-muted uppercase">
          Last updated {formatDay(build.updated)}
        </p>
      </div>

      <Reveal>
        <div className="duo-card p-5 sm:p-8">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">Project</p>
          <h2 className="mt-3 font-display text-2xl leading-tight text-foreground sm:text-3xl">
            {build.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/90">
            {build.summary}
          </p>
          {build.details.length > 0 ? (
            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-6 text-muted">
              {build.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {build.stack.length > 0 ? (
            <div className="mt-6">
              <p className="text-xs tracking-[0.18em] text-muted uppercase">Stack</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {build.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {build.url ? (
              <a
                href={build.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-signal px-4 text-sm font-medium text-on-signal"
              >
                Live site
              </a>
            ) : null}
            {build.github ? (
              <a
                href={build.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border-2 border-signal px-4 text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-on-signal"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </article>
  );
}
