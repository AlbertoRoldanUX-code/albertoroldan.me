import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import type { LeadMagnet } from "@/types/lead-magnet";

const LEAD_MAGNETS_DIR = join(process.cwd(), "src/data/lead-magnets");

function loadLeadMagnets(): Record<string, LeadMagnet> {
  const files = readdirSync(LEAD_MAGNETS_DIR).filter((file) =>
    file.endsWith(".json"),
  );

  return Object.fromEntries(
    files.map((file) => {
      const raw = readFileSync(join(LEAD_MAGNETS_DIR, file), "utf-8");
      const data = JSON.parse(raw) as LeadMagnet;
      return [data.slug, data];
    }),
  );
}

const leadMagnets = loadLeadMagnets();

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return leadMagnets[slug];
}

export function getAllLeadMagnetSlugs(): string[] {
  return Object.keys(leadMagnets);
}

export function getDefaultLeadMagnet(): LeadMagnet {
  const slugs = getAllLeadMagnetSlugs();
  const first = slugs[0];

  if (!first) {
    throw new Error("No lead magnets found in src/data/lead-magnets/");
  }

  return leadMagnets[first];
}
