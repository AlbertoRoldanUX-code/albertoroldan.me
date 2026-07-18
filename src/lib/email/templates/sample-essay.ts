import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/metadata";
import { essayPath, getSampleEssay } from "@/lib/essays";
import {
  escapeHtml,
  link,
  paragraph,
  renderEmailShell,
  signOff,
  signOffText,
} from "./shell";

export interface SampleEssayEmailInput {
  locale: Locale;
  unsubscribeUrl: string;
}

/**
 * Day-1 drip: full sample essay in the inbox (Justin-style).
 */
export function buildSampleEssayEmail(input: SampleEssayEmailInput): {
  subject: string;
  preheader: string;
  html: string;
  text: string;
} {
  const isEn = input.locale === "en";
  const essay = getSampleEssay(input.locale);
  const url = absoluteUrl(essayPath(essay.slug, input.locale));

  const subject = essay.title;
  const preheader = essay.teaser;

  const intro = isEn
    ? "As promised, here’s one of my essays so you can see what Saturdays feel like."
    : "Como te dije, aquí va uno de mis ensayos para que veas cómo se siente un sábado.";

  const outro = isEn
    ? "If this was useful, reply and tell me what landed. Tomorrow I’ll send five more of my best pieces, and then you’ll only hear from me on Saturdays."
    : "Si te ha servido, responde y dime qué te ha llegado. Mañana te envío cinco de mis mejores piezas, y a partir de entonces solo recibirás algo los sábados.";

  const readOnline = isEn ? "Read on the web" : "Leer en la web";

  const bodyHtml = [
    paragraph(escapeHtml(intro)),
    paragraph(`<strong>${escapeHtml(essay.title)}</strong>`),
    ...essay.paragraphs.map((p) => paragraph(escapeHtml(p))),
    paragraph(escapeHtml(outro)),
    paragraph(link(url, readOnline)),
    signOff(input.locale, true),
  ].join("\n");

  const bodyText = `${intro}

${essay.title}

${essay.paragraphs.join("\n\n")}

${outro}

${readOnline}: ${url}

${signOffText(input.locale, true)}`;

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
