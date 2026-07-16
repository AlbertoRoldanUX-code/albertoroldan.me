import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/metadata";
import { essayPath, getBestEssays } from "@/lib/essays";
import {
  escapeHtml,
  link,
  paragraph,
  renderEmailShell,
} from "./shell";

export interface BestPiecesEmailInput {
  locale: Locale;
  unsubscribeUrl: string;
}

/**
 * Day-2 drip: curated list of best essays (Justin-style “try one of these 5”).
 */
export function buildBestPiecesEmail(input: BestPiecesEmailInput): {
  subject: string;
  preheader: string;
  html: string;
  text: string;
} {
  const isEn = input.locale === "en";
  const essays = getBestEssays(input.locale);

  const subject = isEn
    ? "Try one of these 5 essays."
    : "Prueba uno de estos 5 ensayos.";

  const preheader = isEn
    ? "A short list of my most useful pieces."
    : "Una lista corta de mis piezas más útiles.";

  const intro = isEn
    ? "Before we settle into Saturdays only, here are five essays worth your time. Pick one. Read it slowly. Reply if something hits."
    : "Antes de pasar solo a los sábados, aquí tienes cinco ensayos que merecen tu tiempo. Elige uno. Léelo con calma. Responde si algo te llega.";

  const outro = isEn
    ? "From here on, you’ll only hear from me on Saturdays. One essay. Coffee length. No noise."
    : "A partir de ahora, solo recibirás algo los sábados. Un ensayo. De longitud de café. Sin ruido.";

  const cheers = isEn ? "Cheers," : "Un abrazo,";

  const listHtml = essays
    .map((essay, index) => {
      const url = absoluteUrl(essayPath(essay.slug, input.locale));
      return paragraph(
        `<strong>${index + 1}. ${link(url, essay.title)}</strong><br /><span style="color:#555555;">${escapeHtml(essay.teaser)}</span>`,
      );
    })
    .join("\n");

  const listText = essays
    .map((essay, index) => {
      const url = absoluteUrl(essayPath(essay.slug, input.locale));
      return `${index + 1}. ${essay.title}\n${essay.teaser}\n${url}`;
    })
    .join("\n\n");

  const bodyHtml = [
    paragraph(escapeHtml(intro)),
    listHtml,
    paragraph(escapeHtml(outro)),
    paragraph(`${escapeHtml(cheers)}<br /><strong>Alberto Roldán</strong>`),
  ].join("\n");

  const bodyText = `${intro}

${listText}

${outro}

${cheers}
Alberto Roldán`;

  const rendered = renderEmailShell({
    locale: input.locale,
    preheader,
    bodyHtml,
    bodyText,
    unsubscribeUrl: input.unsubscribeUrl,
  });

  return {
    subject,
    preheader,
    ...rendered,
  };
}
