import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://albertoroldan.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/thank-you",
        "/api/",
        "/guides/*/guide",
        "/en/guides/*/guide",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
