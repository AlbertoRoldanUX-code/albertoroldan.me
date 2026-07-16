import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl, siteUrl } from "@/lib/metadata";
import { localizedPath } from "@/lib/i18n/paths";
import type { LeadMagnet } from "@/types/lead-magnet";

interface GuideStructuredDataProps {
  data: LeadMagnet;
  locale: Locale;
}

export function GuideStructuredData({
  data,
  locale,
}: GuideStructuredDataProps) {
  const pageUrl = absoluteUrl(localizedPath(`/guides/${data.slug}`, locale));

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "@id": `${pageUrl}#guide`,
    name: data.seo?.title ?? data.title,
    headline: data.title,
    description: data.seo?.description ?? data.subtitle,
    url: pageUrl,
    inLanguage: locale,
    isAccessibleForFree: true,
    image: absoluteUrl(data.coverImage),
    author: {
      "@id": `${siteUrl}/#person`,
    },
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(creativeWork).replace(/</g, "\\u003c"),
      }}
    />
  );
}
