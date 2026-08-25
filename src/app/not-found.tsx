import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col px-4 py-24">
      <p className="text-xs tracking-[0.22em] text-signal uppercase">404</p>
      <h1 className="mt-4 font-display text-4xl italic text-foreground">
        This chapter is not on the path.
      </h1>
      <Link href="/" className="mt-8 text-signal hover:underline">
        Return home
      </Link>
    </div>
  );
}
