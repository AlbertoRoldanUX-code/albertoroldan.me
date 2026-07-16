import type { Locale } from "@/lib/i18n/config";
import { getConsultingContent, getSiteConfig } from "@/lib/i18n/content";
import { absoluteUrl, siteUrl } from "@/lib/metadata";
import { localizedPath } from "@/lib/i18n/paths";

interface ConsultingStructuredDataProps {
  locale: Locale;
}

export function ConsultingStructuredData({
  locale,
}: ConsultingStructuredDataProps) {
  const content = getConsultingContent(locale);
  const siteConfig = getSiteConfig(locale);
  const pageUrl = absoluteUrl(localizedPath("/consulting", locale));
  const service = content.services[0];

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${pageUrl}#service`,
    name: service?.title ?? content.title,
    description: content.metadata.description,
    url: pageUrl,
    provider: {
      "@id": `${siteUrl}/#person`,
    },
    areaServed: "Worldwide",
    availableLanguage: ["es", "en"],
    image: absoluteUrl(siteConfig.avatar),
    offers: service
      ? {
          "@type": "Offer",
          price: "250",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: pageUrl,
          description: service.summary.join(" "),
        }
      : undefined,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([professionalService, faqPage]).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
