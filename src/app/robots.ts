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
        "/unsubscribe",
        "/consulting/pay",
        "/guides/*/guide",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
