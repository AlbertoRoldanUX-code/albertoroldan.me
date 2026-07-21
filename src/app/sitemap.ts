import type { MetadataRoute } from "next";
import { getEssays } from "@/lib/essays";
import { getAllLeadMagnetSlugs } from "@/lib/lead-magnets";
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

function entry(
  path: string,
  options: {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified: Date;
  },
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = staticPaths.map((path) =>
    entry(path, {
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

  const guideLandingPages = getAllLeadMagnetSlugs().map((slug) =>
    entry(`/guides/${slug}`, {
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const essayPages = getEssays("en").map((essay) =>
    entry(`/essays/${essay.slug}`, {
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticPages, ...guideLandingPages, ...essayPages];
}
