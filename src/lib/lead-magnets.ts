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
  const en = loadLeadMagnetsFromDir(join(LEAD_MAGNETS_BASE, "en"));
  // Site is English-only: ES mirror uses the same EN magnets.
  const es = { ...en, ...loadLeadMagnetsFromDir(LEAD_MAGNETS_BASE) };
  // Prefer EN copies when both exist under the same slug.
  for (const slug of Object.keys(en)) {
    es[slug] = en[slug];
  }
  return { es, en };
}

const leadMagnetsByLocale = loadAllLeadMagnets();

export function getLeadMagnet(
  slug: string,
  locale: Locale = "en",
): LeadMagnet | undefined {
  return leadMagnetsByLocale[locale]?.[slug] ?? leadMagnetsByLocale.en?.[slug];
}

export function getAllLeadMagnetSlugs(): string[] {
  return Object.keys(leadMagnetsByLocale.en);
}

export function getDefaultLeadMagnet(locale: Locale = "en"): LeadMagnet {
  const magnets = leadMagnetsByLocale[locale] ?? leadMagnetsByLocale.en;
  const first = Object.keys(magnets)[0];

  if (!first) {
    throw new Error("No lead magnets found in src/data/lead-magnets/");
  }

  return magnets[first];
}
