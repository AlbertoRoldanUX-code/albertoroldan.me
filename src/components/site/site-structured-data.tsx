import { getSiteConfig } from "@/lib/i18n/content";
import { absoluteUrl, siteUrl } from "@/lib/metadata";

export function SiteStructuredData() {
  const siteConfig = getSiteConfig("en");

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Alberto Roldán",
    alternateName: ["Alberto Roldan", "Alberto Fernández Roldán"],
    url: siteUrl,
    image: absoluteUrl(siteConfig.avatar),
    jobTitle: "Writer and business builder",
    description:
      "Alberto Roldán writes about work, money, freedom, self-employment, and building a more independent life from Tbilisi, Georgia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tbilisi",
      addressCountry: "GE",
    },
    sameAs: [
      siteConfig.social.x,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
    ],
    knowsAbout: [
      "self-employment",
      "independent work",
      "business building",
      "personal freedom",
      "Georgia relocation",
      "AI automation",
      "online businesses",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Alberto Roldán",
    alternateName: "albertoroldan.me",
    url: siteUrl,
    description: siteConfig.tagline,
    inLanguage: ["es", "en"],
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    author: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([person, website]).replace(/</g, "\\u003c"),
      }}
    />
  );
}
