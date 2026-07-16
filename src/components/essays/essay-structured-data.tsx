import type { Locale } from "@/lib/i18n/config";
import type { Essay } from "@/data/essays";
import { absoluteUrl, siteUrl } from "@/lib/metadata";
import { localizedPath } from "@/lib/i18n/paths";

interface EssayStructuredDataProps {
  essay: Essay;
  locale: Locale;
}

export function EssayStructuredData({
  essay,
  locale,
}: EssayStructuredDataProps) {
  const pageUrl = absoluteUrl(localizedPath(`/essays/${essay.slug}`, locale));

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: essay.title,
    description: essay.teaser,
    url: pageUrl,
    inLanguage: locale,
    author: {
      "@id": `${siteUrl}/#person`,
    },
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(article).replace(/</g, "\\u003c"),
      }}
    />
  );
}
