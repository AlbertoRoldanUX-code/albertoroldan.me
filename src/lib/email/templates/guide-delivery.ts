import type { Locale } from "@/lib/i18n/config";
import { getLeadMagnet } from "@/lib/lead-magnets";
import {
  escapeHtml,
  link,
  paragraph,
  renderEmailShell,
} from "./shell";

export interface GuideDeliveryEmailInput {
  locale: Locale;
  leadMagnetSlug: string;
  downloadUrl: string;
  unsubscribeUrl: string;
}

export function buildGuideDeliveryEmail(input: GuideDeliveryEmailInput): {
  subject: string;
  preheader: string;
  html: string;
  text: string;
} | null {
  const magnet = getLeadMagnet(input.leadMagnetSlug, input.locale);
  if (!magnet) {
    return null;
  }

  const isEn = input.locale === "en";
  const subject = isEn
    ? `Your guide: ${magnet.title.replace(/\.$/, "")}.`
    : `Tu guía: ${magnet.title.replace(/\.$/, "")}.`;

  const preheader = magnet.benefitsIntro ?? magnet.subtitle;

  const guideLabel = isEn ? "Here’s the guide you asked for" : "Aquí tienes la guía que pediste";
  const inside = isEn
    ? "Inside you’ll find seven critical capacities and an exercise for each one. Go through it and you’ll have a sharper picture of what you’re building by the end."
    : "Dentro encontrarás siete capacidades críticas y un ejercicio para cada una. Si la recorres, al final tendrás una imagen más clara de lo que estás construyendo.";
  const reply = isEn
    ? "Reply to this email if you find anything especially useful. Enjoy."
    : "Responde a este email si encuentras algo especialmente útil. Disfruta.";
  const cheers = isEn ? "Cheers," : "Un abrazo,";

  const bodyHtml = [
    paragraph(
      `${escapeHtml(guideLabel)}: ${link(input.downloadUrl, magnet.title)}.`,
    ),
    paragraph(escapeHtml(inside)),
    paragraph(escapeHtml(reply)),
    paragraph(`${escapeHtml(cheers)}<br /><strong>Alberto</strong>`),
  ].join("\n");

  const bodyText = `${guideLabel}: ${magnet.title}
${input.downloadUrl}

${inside}

${reply}

${cheers}
Alberto`;

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
