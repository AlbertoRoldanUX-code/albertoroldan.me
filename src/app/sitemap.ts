import type { MetadataRoute } from "next";
import { getAllLeadMagnetSlugs } from "@/lib/lead-magnets";
import { localizedPath } from "@/lib/i18n/paths";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://albertoroldan.me";

const staticPaths = [
  "/",
  "/about",
  "/resources",
  "/consulting",
  "/privacy",
  "/service-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = staticPaths.flatMap((path) => [
    {
      url: `${siteUrl}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: path === "/" || path === "/resources" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path === "/privacy" || path === "/service-policy"
            ? 0.3
            : 0.8,
    },
    {
      url: `${siteUrl}${localizedPath(path, "en")}`,
      lastModified,
      changeFrequency: path === "/" || path === "/resources" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path === "/privacy" || path === "/service-policy"
            ? 0.3
            : 0.8,
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

  return [...staticPages, ...guideLandingPages];
}
