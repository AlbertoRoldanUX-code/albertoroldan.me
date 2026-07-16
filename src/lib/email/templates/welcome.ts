import type { Locale } from "@/lib/i18n/config";
import {
  escapeHtml,
  paragraph,
  renderEmailShell,
} from "./shell";

export interface WelcomeEmailInput {
  locale: Locale;
  unsubscribeUrl: string;
}

export function buildWelcomeEmail(input: WelcomeEmailInput): {
  subject: string;
  preheader: string;
  html: string;
  text: string;
} {
  const isEn = input.locale === "en";

  const subject = isEn
    ? "Welcome to the weekly essay"
    : "Bienvenido al ensayo semanal";

  const preheader = isEn
    ? "Thank you so much for subscribing."
    : "Muchas gracias por suscribirte.";

  const p1 = isEn
    ? "Thank you so much for subscribing to the weekly essay. I greatly appreciate it."
    : "Muchas gracias por suscribirte al ensayo semanal. Lo aprecio de verdad.";

  const p2 = isEn
    ? "Every Saturday morning, I send one essay about living and working on your own terms. Most are personal, practical, and built to be read in five minutes over a cup of coffee. They’re lessons and stories from building businesses without waiting for permission."
    : "Cada sábado por la mañana envío un ensayo sobre vivir y trabajar en tus propios términos. La mayoría son personales, prácticos y pensados para leerse en cinco minutos con un café. Son lecciones e historias de construir negocios sin esperar permiso.";

  const p3 = isEn
    ? "Some of the people who read this are just starting to build something meaningful. They want success that supports their life instead of slowly consuming it. Others have already built a lot, and they’re starting to ask a different set of questions. Both readers are welcome here. I write for both, often in the same essay."
    : "Algunas personas que leen esto están empezando a construir algo con sentido. Quieren un éxito que sostenga su vida en lugar de consumirla. Otras ya han construido bastante y empiezan a hacerse otro tipo de preguntas. Ambos perfiles son bienvenidos. Escribo para los dos, a menudo en el mismo ensayo.";

  const p4 = isEn
    ? "From here on, you’ll only hear from me on Saturdays."
    : "A partir de ahora, solo recibirás algo los sábados.";

  const p5 = isEn
    ? "I hope you enjoy the weekly essay."
    : "Espero que disfrutes el ensayo semanal.";

  const cheers = isEn ? "Cheers," : "Un abrazo,";

  const bodyHtml = [
    paragraph(escapeHtml(p1)),
    paragraph(escapeHtml(p2)),
    paragraph(escapeHtml(p3)),
    paragraph(escapeHtml(p4)),
    paragraph(escapeHtml(p5)),
    paragraph(`${escapeHtml(cheers)}<br /><strong>Alberto Roldán</strong>`),
  ].join("\n");

  const bodyText = `${p1}

${p2}

${p3}

${p4}

${p5}

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
