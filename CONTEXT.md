# Portfolio — context and progress

Living notes for this repo. Update when product decisions change. Do not put passwords, tokens, or private album credentials here.

## Purpose

Public career site for **Sean Lai** (Lead Software Engineer, Grab Safety). Hiring managers are the audience. Real work only — no invented projects, no fluff hobbies gallery, no Homebridge / LeetCode / language-learning apps in this workspace.

**Live:** https://portfolio-seanlai16-5342.vercel.app  
**GitHub:** https://github.com/seanlai16/portfolio (public)  
**Alias also seen on Vercel:** https://portfolio-blue-xi-19.vercel.app

## Stack

- Next.js App Router, React, TypeScript, Tailwind CSS v4, Motion
- Node **22** (`.nvmrc` + `package.json` `engines`)
- Hosted on Vercel Hobby
- Display font: Instrument Serif (`--font-instrument`)
- Visual: light-only white background, Duolingo green `#58CC02` (`--signal`)

## Site map

| Route | Role |
| --- | --- |
| `/` | Hero + career journey timeline (newest first) |
| `/work/[slug]` | Chapter or Grab deep-dive (e.g. AudioProtect) |
| `/projects` | Public / case-study catalog (`builds.ts`) |
| `/about` | Bio, education, outside work, languages, skills |
| `/robots.txt` | Allow indexing; host = `site.url` |
| Resume PDF | `/sean-lai-resume.pdf` (public; contains PII) |

Nav: Journey · Projects · About · Resume

## Content model

Typed files under `src/content/` — edit data, not JSX, for most copy changes.

| File | What |
| --- | --- |
| `site.ts` | Identity, URL, languages, skills, `outsideWork` |
| `journey.ts` | Career chapters (**newest first**; prepend new roles) |
| `projects.ts` | Grab deep-dives tied to journey (e.g. AudioProtect) — not the Projects tab |
| `builds.ts` | Projects tab entries (**newest first**; sort also by `updated`) |

`builds` fields: `slug`, `title`, `summary`, `details[]`, `stack[]`, `created`, `updated`, optional `label`, `url`, `urlLabel`, `github`.

- Show **Updated** only when `created !== updated`.
- Omit `github` for private repos (a public Code button 404s for recruiters).
- Password-gated live sites: use `urlLabel` like `Live site (password)`; **never** put the password in this repo.

## Design decisions worth keeping

- Light-only (`color-scheme: only light`). No OS dark mode.
- Hero kicker is **Grab Safety** (not invented branding).
- Journey and Projects both read **newest → oldest**.
- “Present” on a chapter = `end === null`, not “last in array.”
- Projects page headline: **Things I have actually run** (includes home-lab case studies with no live URL).
- Outside work on About: dated proof only (marathon + Kota Kinabalu). Skipped piano grade 5, daily jog, generic pull-ups.
- Do not put the phone number from the resume into site copy.

## Projects currently listed

1. **Our Journeys** — password-gated 3D travel album case study. Live URL only; GitHub private; password off-channel only.
2. **GO DAIKIN in Apple Home** — home-lab case study; no public repo/URL; not Homebridge.
3. **Personal site** — this repo; live + public GitHub.

AudioProtect stays under Journey / `projects.ts`, not the Projects tab.

## Related repos (not this workspace)

| Repo / site | Notes |
| --- | --- |
| `seanlai16/our-journeys` | Private. Live https://our-journeys.vercel.app. Password never in portfolio copy. |
| Homebridge / home lab | Separate folder/repo if any; not this site. |
| Hokkien / calorie app ideas | Explicitly out of scope here. |

## Deploy and ops

1. Push to `main` on GitHub.
2. Production deploy is still **manual** from a machine logged into Vercel:

```bash
nvm use
npx vercel@latest deploy --yes --prod --scope seanlai16-5342
```

GitHub → Vercel auto-deploy was **not** connected (needs Vercel GitHub Login Connection / app authorize). Until that exists, `git push` alone does not update the live site.

- No env vars required on the Vercel project for this static-ish site.
- Local `.vercel/` is gitignored.
- Prefer `--scope seanlai16-5342` if deploy returns “Not authorized.”

### Local

```bash
nvm use
npm install
npm run dev
```

## Security / privacy

- Never commit `.env*`, credentials, PEM/keys, or `.vercel`.
- Never publish the Our Journeys login password (or its env var name) in README, CONTEXT, commits, or public chat.
- Production must stay **public** (portfolio). Preview protection is fine.
- Resume PDF is public PII if someone downloads it.

## Progress log (high level)

| When | What |
| --- | --- |
| 2026-08-25 | Repo created; Next.js career journey site; Duolingo light theme; white bg; Grab Safety kicker; first Vercel production deploy; metadata/robots; Node 22 engines. |
| 2026-08-25 | Journey reversed to newest-first. |
| 2026-08-25 | Cantonese + Hakka on About. |
| 2026-08-26 | Projects tab (`builds.ts`); Personal site entry. |
| 2026-08-26 | GO DAIKIN HomeKit lab case study; created/updated dates on cards. |
| 2026-08-26 | Our Journeys listed (password-gated; no password; no private GitHub button). |
| 2026-08-27 | Outside work: Penang Bridge Marathon 2025 (5h38) + Mount Kota Kinabalu 2025. |
| 2026-08-28 | About skills: Python + machine learning (`#1`). |
| 2026-10-14 | This context file added. |

Exact commit messages: `git log --oneline`.

## How to extend (cheap edits)

- New role → prepend in `journey.ts`.
- New public/case-study project → prepend in `builds.ts`; bump `updated` on Personal site when this site ships a meaningful change.
- Grab deep-dive → `projects.ts` + optional `projectSlug` on a journey chapter.
- Copy-only change: open the one content file; do not re-architect for “token savings.”

## Explicit non-goals

- Custom domain (deferred; `.vercel.app` is fine for now)
- Blog, CMS, analytics
- Merging private gift sites or home-automation into this repo
- Inflating student repos as portfolio highlights
