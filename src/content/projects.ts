export type Project = {
  slug: string;
  title: string;
  org: string;
  relatedChapterSlug: string;
  summary: string;
  paragraphs: string[];
};

export const projects: Project[] = [
  {
    slug: "audioprotect",
    title: "AudioProtect",
    org: "Grab",
    relatedChapterSlug: "grab-senior",
    summary:
      "In-ride audio recording for post-incident resolution, with on-device ML for risk signals.",
    paragraphs: [
      "AudioProtect sits in the Grab consumer and driver apps. During a ride it can record audio that later helps resolve incidents — the kind of feature that only matters if it actually captured the moment.",
      "The core framework had to be rescued and rewritten in place. The work was not a greenfield rebuild. It was a refactor of something already in millions of hands: more coverage, more reliability, less mystery when a recording should have existed and did not.",
      "We also run on-device audio ML to help detect risk signals. Inference stays on the phone. The interesting constraint is the same as the rest of Safety: it has to be dependable on mid-range devices, in noisy cars, without turning the ride into a science experiment.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
