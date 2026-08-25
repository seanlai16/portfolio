export type JourneyKind = "role" | "education";

export type JourneyChapter = {
  id: string;
  slug: string;
  kind: JourneyKind;
  org: string;
  role: string;
  location?: string;
  start: string;
  end: string | null;
  summary: string;
  highlights: string[];
  projectSlug?: string;
};

/** Newest chapter first. Prepend new roles; do not append them. */
export const journey: JourneyChapter[] = [
  {
    id: "grab-lead",
    slug: "grab-lead",
    kind: "role",
    org: "Grab",
    role: "Lead Software Engineer, Safety Team",
    location: "Petaling Jaya, Selangor, Malaysia",
    start: "2025-10",
    end: null,
    summary:
      "Lead a team of iOS engineers delivering mission-critical safety features for millions of consumers and drivers across Southeast Asia. The job is still the product — plus the people who have to keep shipping it.",
    highlights: [
      "Lead iOS engineers on Grab’s Safety team",
      "Mission-critical safety features at regional scale",
    ],
  },
  {
    id: "apu-msc",
    slug: "apu-msc",
    kind: "education",
    org: "Asia Pacific University of Technology and Innovation",
    role: "Master of Science in Artificial Intelligence / Data Science",
    location: "Malaysia",
    start: "2024-06",
    end: "2026-12",
    summary:
      "A part-time master’s alongside the day job. The academic focus is AI and data science — the same neighborhood as on-device inference, without pretending a degree is a substitute for production scars.",
    highlights: ["Expected December 2026"],
  },
  {
    id: "grab-senior",
    slug: "grab-senior",
    kind: "role",
    org: "Grab",
    role: "Senior Software Engineer, Safety Team",
    location: "Petaling Jaya, Selangor, Malaysia",
    start: "2023-10",
    end: "2025-10",
    summary:
      "Owned the rescue of AudioProtect: a core recording framework that had to work when a ride went wrong. Refactored it in place, then pushed coverage and reliability until the pipeline could be trusted.",
    highlights: [
      "Rescued and fully refactored the AudioProtect framework",
      "Increased recording coverage and reliability",
    ],
    projectSlug: "audioprotect",
  },
  {
    id: "grab-ios",
    slug: "grab-ios",
    kind: "role",
    org: "Grab",
    role: "iOS Developer, Safety Team",
    location: "Petaling Jaya, Selangor, Malaysia",
    start: "2021-10",
    end: "2023-10",
    summary:
      "Joined Grab’s Safety team to ship features inside the consumer and driver apps. Swift, in production, for people who are already on a ride — the unglamorous, load-bearing kind of mobile work.",
    highlights: [
      "Core features in the Grab consumer and driver iOS apps",
      "Swift in a large, always-on product",
    ],
  },
  {
    id: "fusionex",
    slug: "fusionex",
    kind: "role",
    org: "Fusionex International",
    role: "Software Developer",
    location: "Petaling Jaya, Selangor, Malaysia",
    start: "2020-03",
    end: "2021-09",
    summary:
      "Cross-platform clients in Flutter and server-side work in Node.js. The stretch years before specializing — still the place I learned to move between the device and the backend without treating either as someone else’s problem.",
    highlights: [
      "Built and optimized cross-platform applications",
      "Server-side components in Node.js",
    ],
  },
  {
    id: "uwe",
    slug: "uwe",
    kind: "education",
    org: "University of the West of England",
    role: "BSc (Hons) Software Engineering for Business",
    location: "United Kingdom",
    start: "2018-01",
    end: "2019-12",
    summary:
      "A year in the UK on a full scholarship from Taylor’s. The brief was software that has to make sense in a business, not only in a repository.",
    highlights: ["Full scholarship from Taylor’s University"],
  },
  {
    id: "taylors",
    slug: "taylors",
    kind: "education",
    org: "Taylor’s University",
    role: "Bachelor’s Degree in Computer Software Engineering",
    location: "Malaysia",
    start: "2015-01",
    end: "2018-12",
    summary:
      "The foundation years. Software engineering as a discipline — not just courses, but the habit of shipping work that other people have to live with.",
    highlights: ["CGPA 3.91"],
  },
];

export function getChapter(slug: string): JourneyChapter | undefined {
  return journey.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug: string): {
  prev?: JourneyChapter;
  next?: JourneyChapter;
} {
  const index = journey.findIndex((chapter) => chapter.slug === slug);
  if (index === -1) return {};
  return {
    prev: journey[index - 1],
    next: journey[index + 1],
  };
}
