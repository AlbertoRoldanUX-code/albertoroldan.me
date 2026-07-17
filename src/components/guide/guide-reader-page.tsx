import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideDocument } from "@/components/guide/guide-document";
import { GuidePageCount, GuidePageIndicator } from "@/components/guide/guide-page-indicator";
import { PrintButton } from "@/components/guide/print-button";
import { LocaleProvider } from "@/components/site/locale-provider";
import { getGuide } from "@/lib/guides";
import { getLeadMagnet } from "@/lib/lead-magnets";
import { getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import "./guide.css";

interface GuideReaderPageProps {
  params: Promise<{ slug: string }>;
  locale?: Locale;
}

export async function generateGuideMetadata(
  slug: string,
  locale: Locale = "en",
): Promise<Metadata> {
  const guide = getGuide(slug, locale);
  const leadMagnet = getLeadMagnet(slug, locale);
  const ui = getUi(locale);

  if (!guide) {
    return { title: ui.guide.notFound };
  }

  return {
    title: leadMagnet?.seo?.title ?? guide.cover.title,
    description: leadMagnet?.seo?.description ?? guide.cover.subtitle,
  };
}

export async function GuideReaderPage({
  params,
  locale = "en",
}: GuideReaderPageProps) {
  const { slug } = await params;
  const guide = getGuide(slug, locale);
  const ui = getUi(locale);

  if (!guide) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale}>
      <div className="min-h-screen bg-[#f3f2ef] py-8 md:py-12">
        <div className="no-print mx-auto mb-6 flex max-w-[720px] items-center justify-between px-6 md:px-12">
          <Link
            href={localizedPath(`/guides/${slug}`, locale)}
            className="font-sans text-sm text-[#6b6b6b] underline-offset-2 hover:underline"
          >
            {ui.guide.back}
          </Link>
          <div className="flex items-center gap-4">
            <GuidePageCount />
            <PrintButton />
          </div>
        </div>

        <GuideDocument guide={guide} />
        <GuidePageIndicator />
      </div>
    </LocaleProvider>
  );
}
