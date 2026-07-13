import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadMagnetPage } from "@/components/vault/lead-magnet-page";
import { getAllLeadMagnetSlugs, getLeadMagnet } from "@/lib/lead-magnets";
import { buildLeadMagnetMetadata } from "@/lib/metadata";
import { getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface GuideSlugPageProps {
  params: Promise<{ slug: string }>;
  locale?: Locale;
}

export async function generateGuideSlugMetadata(
  slug: string,
  locale: Locale = "es",
): Promise<Metadata> {
  const data = getLeadMagnet(slug, locale);
  const ui = getUi(locale);

  if (!data) {
    return { title: ui.metadata.notFound };
  }

  return buildLeadMagnetMetadata(data);
}

export async function GuideSlugPage({
  params,
  locale = "es",
}: GuideSlugPageProps) {
  const { slug } = await params;
  const data = getLeadMagnet(slug, locale);

  if (!data) {
    notFound();
  }

  return <LeadMagnetPage data={data} locale={locale} />;
}

export function getGuideStaticParams() {
  return getAllLeadMagnetSlugs().map((slug) => ({ slug }));
}
