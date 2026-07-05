import type { Metadata } from "next";
import type { LeadMagnet } from "@/types/lead-magnet";

export function buildLeadMagnetMetadata(data: LeadMagnet): Metadata {
  const title = data.seo?.title ?? data.title;
  const description = data.seo?.description ?? data.subtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: data.seo?.ogImage
        ? [{ url: data.seo.ogImage }]
        : [{ url: data.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.seo?.ogImage ? [data.seo.ogImage] : [data.coverImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
