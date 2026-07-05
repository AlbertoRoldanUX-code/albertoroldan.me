import type { Guide } from "@/types/guide";
import { fieldManualGuide } from "@/data/guides/field-manual";

const guides: Record<string, Guide> = {
  "field-manual": fieldManualGuide,
};

export function getGuide(slug: string): Guide | undefined {
  return guides[slug];
}

export function getGuideSlugs(): string[] {
  return Object.keys(guides);
}
