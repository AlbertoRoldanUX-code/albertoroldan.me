import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/thank-you",
        "/en/thank-you",
        "/unsubscribe",
        "/en/unsubscribe",
        "/consulting/pay",
        "/en/consulting/pay",
        "/guides/*/guide",
        "/en/guides/*/guide",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
