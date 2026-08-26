import { site } from "@/content/site";

export type Build = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  stack: string[];
  created: string;
  updated: string;
  label?: string;
  url?: string;
  github?: string;
};

/** Newest first. Prepend new work; rendering also sorts by `updated`. */
export const builds: Build[] = [
  {
    slug: "godaikin-homekit",
    title: "GO DAIKIN in Apple Home",
    label: "Home lab",
    summary:
      "A region-locked Daikin AC in Siri, on home Wi-Fi — without HomeKit, Matter, or a HomePod.",
    details: [
      "GO DAIKIN is not HomeKit or Matter, and there is no useful local HTTP API. Control is cloud polling. The popular Homebridge Daikin plugin talks to Europe’s Onecta cloud. Wrong region, wrong account system. This is not a Homebridge project.",
      "Home Assistant on an always-on Mac mini, using the unofficial godaikin integration for Malaysia/Singapore. A Philippines setup needs a different fork. Google-only GO DAIKIN login has no password for Home Assistant; the workable path is a dedicated email-and-password account, then share the AC.",
      "Docker on macOS does not publish HomeKit mDNS onto the LAN. The iPhone could reach the TCP port and still fail pairing until Bonjour was advertised from the Mac host. HomeKit Bridge exposes only the climate entity.",
      "The AC shows up in Apple Home as “aircon”; Siri works on the home network. Remote HomeKit over cellular was out of scope. After a reboot, someone has to sign in on the Mini — no auto-login — then Colima, Home Assistant, and mDNS come back in a minute or two. No public repo. Pairing codes, credentials, and LAN details stay off this site.",
    ],
    stack: [
      "Home Assistant Container",
      "godaikin",
      "HomeKit Bridge",
      "Colima",
      "dns-sd / LaunchAgent",
    ],
    updated: "2026-08-26",
    created: "2026-08-26",
  },
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
    created: "2026-08-25",
    updated: "2026-08-26",
    url: site.url,
    github: "https://github.com/seanlai16/portfolio",
  },
];

export function listedBuilds(): Build[] {
  return [...builds].sort((a, b) => b.updated.localeCompare(a.updated));
}
