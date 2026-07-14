import { writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { renderToBuffer, Font } from "@react-pdf/renderer";
import { createElement } from "react";
import { fieldManualGuide } from "../src/data/guides/field-manual";
import { GuidePdfDocument } from "../src/lib/guides/guide-pdf";

const fontDir = join(process.cwd(), "src/assets/fonts");

Font.register({
  family: "Newsreader",
  fonts: [
    { src: join(fontDir, "Newsreader-Regular.ttf"), fontWeight: 400 },
    { src: join(fontDir, "Newsreader-Medium.ttf"), fontWeight: 500 },
    { src: join(fontDir, "Newsreader-Bold.ttf"), fontWeight: 700 },
    {
      src: join(fontDir, "Newsreader-Italic.ttf"),
      fontWeight: 400,
      fontStyle: "italic",
    },
  ],
});

Font.register({
  family: "NotoSans",
  fonts: [
    { src: join(fontDir, "NotoSans-Regular.ttf"), fontWeight: 400 },
    { src: join(fontDir, "NotoSans-Bold.ttf"), fontWeight: 700 },
    {
      src: join(fontDir, "NotoSans-Italic.ttf"),
      fontWeight: 400,
      fontStyle: "italic",
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const outPath =
  process.argv[2] ??
  resolve(process.env.HOME ?? ".", "Downloads", "field-manual.pdf");

const buffer = await renderToBuffer(
  createElement(GuidePdfDocument, {
    guide: fieldManualGuide,
  }) as Parameters<typeof renderToBuffer>[0],
);
writeFileSync(outPath, buffer);
console.log(`PDF escrito en: ${outPath}`);
console.log(`Tamaño: ${(buffer.length / 1024).toFixed(1)} KB`);
