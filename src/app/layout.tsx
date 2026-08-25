import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { metadataDescription, metadataTitle, site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: metadataTitle,
    template: `%s — ${site.name}`,
  },
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    type: "website",
  },
};

export const viewport = {
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-signal focus:px-3 focus:py-2 focus:text-on-signal"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative z-[2] flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
