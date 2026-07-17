import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site/site-layout";
import { getUi } from "@/lib/i18n/content";

const ui = getUi("en");

export const metadata: Metadata = {
  title: ui.metadata.notFound,
  description: ui.metadata.notFoundDescription,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteLayout locale="en">
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-serif text-6xl font-semibold tracking-tight text-foreground/25">
          404
        </p>
        <h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {ui.metadata.notFound}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          {ui.metadata.notFoundDescription}
        </p>
        <Link
          href="/"
          className="mt-10 text-sm font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          ← albertoroldan.me
        </Link>
      </main>
    </SiteLayout>
  );
}
