import type { MetadataRoute } from "next";
import { getEssays } from "@/lib/essays";
import { getAllLeadMagnetSlugs } from "@/lib/lead-magnets";
import { localizedPath } from "@/lib/i18n/paths";
import { absoluteUrl } from "@/lib/metadata";

const staticPaths = [
  "/",
  "/about",
  "/resources",
  "/consulting",
  "/privacy",
  "/terms",
  "/service-policy",
];

function bilingualEntry(
  path: string,
  options: {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified: Date;
  },
): MetadataRoute.Sitemap {
  const { changeFrequency, priority, lastModified } = options;
  const languages = {
    es: absoluteUrl(localizedPath(path, "es")),
    en: absoluteUrl(localizedPath(path, "en")),
    "x-default": absoluteUrl(localizedPath(path, "en")),
  };

  return [
    {
      url: languages.es,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    },
    {
      url: languages.en,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = staticPaths.flatMap((path) =>
    bilingualEntry(path, {
      lastModified,
      changeFrequency:
        path === "/" || path === "/resources" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path === "/privacy" || path === "/terms" || path === "/service-policy"
            ? 0.3
            : 0.8,
    }),
  );

  const guideLandingPages = getAllLeadMagnetSlugs().flatMap((slug) =>
    bilingualEntry(`/guides/${slug}`, {
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const essayPages = getEssays("en").flatMap((essay) =>
    bilingualEntry(`/essays/${essay.slug}`, {
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticPages, ...guideLandingPages, ...essayPages];
}
