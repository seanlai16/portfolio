import type { Metadata } from "next";
import { BuildCard } from "@/components/build-card";
import { listedBuilds } from "@/content/builds";

export const metadata: Metadata = {
  title: "Projects",
};

const builds = listedBuilds();

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="text-xs tracking-[0.22em] text-signal uppercase">Projects</p>
      <h1 className="mt-4 font-display text-4xl italic text-foreground sm:text-6xl">
        Things I have actually run.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Newest first. Live URLs and GitHub when they exist. Grab features stay on the
        journey.
      </p>

      <div className="mt-14 space-y-10 lg:mt-20 lg:space-y-24">
        {builds.map((build) => (
          <BuildCard key={build.slug} build={build} />
        ))}
      </div>
    </div>
  );
}
