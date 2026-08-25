export const site = {
  name: "Sean Lai",
  role: "Lead Software Engineer",
  headline: "Safety-critical iOS for millions of rides across Southeast Asia.",
  location: "Klang, Selangor, Malaysia",
  email: "seanlai16@gmail.com",
  linkedin: "https://www.linkedin.com/in/seanlaikishun",
  github: "https://github.com/seanlai16",
  resumePath: "/sean-lai-resume.pdf",
  url: "https://portfolio-seanlai16-5342.vercel.app",
  languages: [
    "English",
    "Bahasa Malaysia",
    "Chinese (Simplified & Traditional)",
    "Cantonese",
    "Hakka",
  ],
  skills: {
    languages: ["Swift", "Dart (Flutter)", "JavaScript (Node.js)", "Objective-C"],
    platforms: ["iOS SDK", "CoreML", "AVFoundation"],
    practice: [
      "Architecture refactoring",
      "Specification reviews",
      "Code reviews",
      "UI/UX design",
      "Agile",
    ],
  },
} as const;

export const metadataTitle = `${site.name} — ${site.role}`;
export const metadataDescription =
  "Career journey of Sean Lai, Lead Software Engineer on Grab’s Safety team. Safety-critical iOS for Southeast Asia.";
