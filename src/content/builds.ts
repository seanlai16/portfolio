import { site } from "@/content/site";

export type Build = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  stack: string[];
  updated: string;
  url?: string;
  github?: string;
};

/** Newest first. Prepend new work; rendering also sorts by `updated`. */
export const builds: Build[] = [
  {
    slug: "personal-site",
    title: "Personal site",
    summary:
      "The public career journey: roles, education, and how to reach me. This page is that site.",
    details: [
      "A small Next.js site, not a product. Chapters live in typed content files so a new role is a data change, not a redesign.",
      "Shipped on Vercel. The GitHub repo is public because the site is public — no secrets, no employer code.",
    ],
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Vercel",
    ],
    updated: "2026-08-26",
    url: site.url,
    github: "https://github.com/seanlai16/portfolio",
  },
];

export function listedBuilds(): Build[] {
  return [...builds].sort((a, b) => b.updated.localeCompare(a.updated));
}
