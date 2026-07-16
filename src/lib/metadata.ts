import type { Metadata } from "next";
import type { LeadMagnet } from "@/types/lead-magnet";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://albertoroldan.me";
export const siteUrl = configuredSiteUrl.replace(/\/$/, "");

const siteName = "Alberto Roldán";
const defaultImage = "/images/avatar.png";

function normalizePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? "" : normalized;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${normalizePath(path)}`;
}

export function buildAlternates(path: string, locale: Locale) {
  const esUrl = absoluteUrl(localizedPath(path, "es"));
  const enUrl = absoluteUrl(localizedPath(path, "en"));

  return {
    canonical: locale === "en" ? enUrl : esUrl,
    languages: {
      es: esUrl,
      en: enUrl,
      "x-default": esUrl,
    },
  };
}

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  image?: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
}

export function buildPageMetadata({
  title,
  description,
  path,
  locale = "es",
  image = defaultImage,
  type = "website",
  robots = { index: true, follow: true },
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(localizedPath(path, locale));
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: buildAlternates(path, locale),
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: locale === "en" ? "en_US" : "es_ES",
      alternateLocale: locale === "en" ? ["es_ES"] : ["en_US"],
      type,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots,
  };
}

export function buildLeadMagnetMetadata(
  data: LeadMagnet,
  locale: Locale = "es",
): Metadata {
  const title = data.seo?.title ?? data.title;
  const description = data.seo?.description ?? data.subtitle;
  const image = data.seo?.ogImage ?? data.coverImage;

  return buildPageMetadata({
    title,
    description,
    path: `/guides/${data.slug}`,
    locale,
    image,
  });
}
