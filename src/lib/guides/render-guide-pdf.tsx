import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import type { Guide } from "@/types/guide";
import { GuidePdfDocument } from "./guide-pdf";

export async function renderGuidePdf(guide: Guide): Promise<Buffer> {
  return renderToBuffer(<GuidePdfDocument guide={guide} />);
}
