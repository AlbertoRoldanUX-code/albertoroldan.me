import type { Guide } from "@/types/guide";
import type { Locale } from "@/lib/i18n/config";
import { fieldManualGuide as fieldManualGuideEs } from "@/data/guides/field-manual";
import { fieldManualGuide as fieldManualGuideEn } from "@/data/guides/en/field-manual";

const guidesByLocale: Record<Locale, Record<string, Guide>> = {
  es: { "field-manual": fieldManualGuideEs },
  en: { "field-manual": fieldManualGuideEn },
};

export function getGuide(slug: string, locale: Locale = "es"): Guide | undefined {
  return guidesByLocale[locale]?.[slug];
}

export function getGuideSlugs(): string[] {
  return Object.keys(guidesByLocale.es);
}
