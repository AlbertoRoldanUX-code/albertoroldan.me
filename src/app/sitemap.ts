import type { MetadataRoute } from "next";
import { getAllLeadMagnetSlugs } from "@/lib/lead-magnets";
import { getGuideSlugs } from "@/lib/guides";
import { localizedPath } from "@/lib/i18n/paths";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://albertoroldan.me";

const staticPaths = ["/", "/about", "/resources", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = staticPaths.flatMap((path) => [
    {
      url: `${siteUrl}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: path === "/" || path === "/resources" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/privacy" ? 0.3 : 0.8,
    },
    {
      url: `${siteUrl}${localizedPath(path, "en")}`,
      lastModified,
      changeFrequency: path === "/" || path === "/resources" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/privacy" ? 0.3 : 0.8,
    },
  ]);

  const guideLandingPages: MetadataRoute.Sitemap = getAllLeadMagnetSlugs().flatMap(
    (slug) => [
      {
        url: `${siteUrl}/guides/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
      {
        url: `${siteUrl}${localizedPath(`/guides/${slug}`, "en")}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
    ],
  );

  const guideReaderPages: MetadataRoute.Sitemap = getGuideSlugs().flatMap(
    (slug) => [
      {
        url: `${siteUrl}/guides/${slug}/guide`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${siteUrl}${localizedPath(`/guides/${slug}/guide`, "en")}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
    ],
  );

  return [...staticPages, ...guideLandingPages, ...guideReaderPages];
}
