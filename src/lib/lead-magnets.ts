import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import type { LeadMagnet } from "@/types/lead-magnet";
import type { Locale } from "@/lib/i18n/config";

const LEAD_MAGNETS_BASE = join(process.cwd(), "src/data/lead-magnets");

function loadLeadMagnetsFromDir(dir: string): Record<string, LeadMagnet> {
  let files: string[];
  try {
    files = readdirSync(dir).filter((file) => file.endsWith(".json"));
  } catch {
    return {};
  }

  return Object.fromEntries(
    files.map((file) => {
      const raw = readFileSync(join(dir, file), "utf-8");
      const data = JSON.parse(raw) as LeadMagnet;
      return [data.slug, data];
    }),
  );
}

function loadAllLeadMagnets(): Record<Locale, Record<string, LeadMagnet>> {
  return {
    es: loadLeadMagnetsFromDir(LEAD_MAGNETS_BASE),
    en: loadLeadMagnetsFromDir(join(LEAD_MAGNETS_BASE, "en")),
  };
}

const leadMagnetsByLocale = loadAllLeadMagnets();

export function getLeadMagnet(
  slug: string,
  locale: Locale = "en",
): LeadMagnet | undefined {
  return leadMagnetsByLocale[locale]?.[slug];
}

export function getAllLeadMagnetSlugs(): string[] {
  return Object.keys(leadMagnetsByLocale.es);
}

export function getDefaultLeadMagnet(locale: Locale = "en"): LeadMagnet {
  const slugs = Object.keys(leadMagnetsByLocale[locale]);
  const first = slugs[0];

  if (!first) {
    const fallback = Object.keys(leadMagnetsByLocale.es)[0];
    if (!fallback) {
      throw new Error("No lead magnets found in src/data/lead-magnets/");
    }
    return leadMagnetsByLocale.es[fallback];
  }

  return leadMagnetsByLocale[locale][first];
}
