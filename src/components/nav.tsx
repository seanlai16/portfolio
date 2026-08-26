"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/#journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/80 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
        <Link
          href="/"
          className="text-sm tracking-[0.18em] uppercase text-foreground"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.resumePath}
            className="rounded-full border-2 border-line px-3 py-1.5 text-foreground transition-colors hover:border-signal hover:text-signal"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-background px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
        >
          <nav className="flex flex-col gap-1 text-base">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.resumePath}
              className="rounded-md px-2 py-3 text-signal"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
