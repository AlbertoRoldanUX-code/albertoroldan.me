import type { MetadataRoute } from "next";
import { getAllLeadMagnetSlugs } from "@/lib/lead-magnets";
import { getGuideSlugs } from "@/lib/guides";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://albertoroldan.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resources`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const guideLandingPages: MetadataRoute.Sitemap = getAllLeadMagnetSlugs().map(
    (slug) => ({
      url: `${siteUrl}/guides/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }),
  );

  const guideReaderPages: MetadataRoute.Sitemap = getGuideSlugs().map(
    (slug) => ({
      url: `${siteUrl}/guides/${slug}/guide`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  return [...staticPages, ...guideLandingPages, ...guideReaderPages];
}
