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
        "/es/thank-you",
        "/unsubscribe",
        "/es/unsubscribe",
        "/consulting/pay",
        "/es/consulting/pay",
        "/guides/*/guide",
        "/es/guides/*/guide",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
