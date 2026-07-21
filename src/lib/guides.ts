import type { Guide } from "@/types/guide";
import type { Locale } from "@/lib/i18n/config";
import { fieldManualGuide as fieldManualGuideEn } from "@/data/guides/en/field-manual";

/** Site is English-only: all locales serve the EN guide. */
const fieldManualByLocale: Record<Locale, Guide> = {
  en: fieldManualGuideEn,
  es: fieldManualGuideEn,
};

const guidesByLocale: Record<Locale, Record<string, Guide>> = {
  es: { "field-manual": fieldManualByLocale.es },
  en: { "field-manual": fieldManualByLocale.en },
};

export function getGuide(slug: string, locale: Locale = "en"): Guide | undefined {
  return guidesByLocale[locale]?.[slug] ?? guidesByLocale.en?.[slug];
}

export function getGuideSlugs(): string[] {
  return Object.keys(guidesByLocale.en);
}
