import { essays as essaysEs } from "@/data/essays";
import { essays as essaysEn } from "@/data/en/essays";
import type { Essay } from "@/data/essays";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

export function getEssays(locale: Locale): Essay[] {
  return locale === "en" ? essaysEn : essaysEs;
}

export function getEssay(slug: string, locale: Locale): Essay | undefined {
  return getEssays(locale).find((essay) => essay.slug === slug);
}

/** First essay is the day-1 sample drip send. */
export function getSampleEssay(locale: Locale): Essay {
  return getEssays(locale)[0];
}

export function getBestEssays(locale: Locale): Essay[] {
  return getEssays(locale);
}

export function essayPath(slug: string, locale: Locale): string {
  return localizedPath(`/essays/${slug}`, locale);
}
