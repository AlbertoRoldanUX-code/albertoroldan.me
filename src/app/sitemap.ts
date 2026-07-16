import type { MetadataRoute } from "next";
import { getAllLeadMagnetSlugs } from "@/lib/lead-magnets";
import { localizedPath } from "@/lib/i18n/paths";
import { absoluteUrl } from "@/lib/metadata";

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
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: path === "/" || path === "/resources" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path === "/privacy" || path === "/service-policy"
            ? 0.3
            : 0.8,
      alternates: {
        languages: {
          es: absoluteUrl(localizedPath(path, "es")),
          en: absoluteUrl(localizedPath(path, "en")),
          "x-default": absoluteUrl(localizedPath(path, "es")),
        },
      },
    },
    {
      url: absoluteUrl(localizedPath(path, "en")),
      lastModified,
      changeFrequency: path === "/" || path === "/resources" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path === "/privacy" || path === "/service-policy"
            ? 0.3
            : 0.8,
      alternates: {
        languages: {
          es: absoluteUrl(localizedPath(path, "es")),
          en: absoluteUrl(localizedPath(path, "en")),
          "x-default": absoluteUrl(localizedPath(path, "es")),
        },
      },
    },
  ]);

  const guideLandingPages: MetadataRoute.Sitemap = getAllLeadMagnetSlugs().flatMap(
    (slug) => [
      {
        url: absoluteUrl(`/guides/${slug}`),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.9,
        alternates: {
          languages: {
            es: absoluteUrl(`/guides/${slug}`),
            en: absoluteUrl(localizedPath(`/guides/${slug}`, "en")),
            "x-default": absoluteUrl(`/guides/${slug}`),
          },
        },
      },
      {
        url: absoluteUrl(localizedPath(`/guides/${slug}`, "en")),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.9,
        alternates: {
          languages: {
            es: absoluteUrl(`/guides/${slug}`),
            en: absoluteUrl(localizedPath(`/guides/${slug}`, "en")),
            "x-default": absoluteUrl(`/guides/${slug}`),
          },
        },
      },
    ],
  );

  return [...staticPages, ...guideLandingPages];
}
