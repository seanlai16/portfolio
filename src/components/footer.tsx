import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-2xl italic text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.role} · {site.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a className="text-muted transition-colors hover:text-signal" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="text-muted transition-colors hover:text-signal"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-muted transition-colors hover:text-signal"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="text-muted transition-colors hover:text-signal" href={site.resumePath}>
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
