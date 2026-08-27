import type { Metadata } from "next";
import Link from "next/link";
import { journey } from "@/content/journey";
import { site } from "@/content/site";
import { formatRange } from "@/lib/dates";

export const metadata: Metadata = {
  title: "About",
};

const education = journey.filter((chapter) => chapter.kind === "education");

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="text-xs tracking-[0.22em] text-signal uppercase">About</p>
      <h1 className="mt-4 font-display text-4xl italic text-foreground sm:text-6xl">
        A lead iOS engineer who still owns the hard path.
      </h1>
      <div className="mt-8 space-y-5 text-base leading-7 text-muted">
        <p>
          I am a performance-driven lead software engineer with more than eight years in
          mobile, mostly iOS. I work on Grab’s Safety team in Petaling Jaya — the features
          that have to exist when a ride does not go as planned.
        </p>
        <p>
          The through-line is reliability under constraint: mid-range phones, noisy cars,
          frameworks already in production. AudioProtect is the clearest example. The rest
          of the journey is how I got there — Flutter and Node at Fusionex, then Swift in
          the consumer and driver apps, then the team.
        </p>
        <p>
          I am also completing an MSc in Artificial Intelligence / Data Science at APU,
          expected December 2026. That sits beside the job, not instead of it.
        </p>
      </div>

      <a
        href={site.resumePath}
        className="mt-10 inline-flex min-h-11 items-center rounded-full bg-signal px-5 text-sm font-medium text-on-signal"
      >
        Download resume
      </a>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="font-display text-2xl text-foreground">Education</h2>
        <ul className="mt-6 space-y-8">
          {education.map((item) => (
            <li key={item.id}>
              <p className="text-xs text-signal">{formatRange(item.start, item.end)}</p>
              <p className="mt-1 text-foreground">{item.role}</p>
              <p className="text-sm text-muted">{item.org}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="font-display text-2xl text-foreground">Outside work</h2>
        <ul className="mt-6 space-y-8">
          {site.outsideWork.map((item) => (
            <li key={item.title}>
              <p className="text-xs text-signal">{item.when}</p>
              <p className="mt-1 text-foreground">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="font-display text-2xl text-foreground">Languages</h2>
        <p className="mt-3 text-muted">{site.languages.join(" · ")}</p>
      </section>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="font-display text-2xl text-foreground">Skills</h2>
        <dl className="mt-6 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs tracking-[0.18em] text-muted uppercase">Languages</dt>
            <dd className="mt-2 text-sm leading-7 text-foreground">
              {site.skills.languages.join(", ")}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.18em] text-muted uppercase">Platforms</dt>
            <dd className="mt-2 text-sm leading-7 text-foreground">
              {site.skills.platforms.join(", ")}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.18em] text-muted uppercase">Practice</dt>
            <dd className="mt-2 text-sm leading-7 text-foreground">
              {site.skills.practice.join(", ")}
            </dd>
          </div>
        </dl>
      </section>

      <p className="mt-16 text-sm text-muted">
        <Link href="/#journey" className="text-signal hover:underline">
          Back to the journey
        </Link>
      </p>
    </div>
  );
}
