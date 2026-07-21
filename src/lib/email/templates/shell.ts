import type { Locale } from "@/lib/i18n/config";
import { getSiteConfig } from "@/lib/i18n/content";
import { localizedPath } from "@/lib/i18n/paths";
import { absoluteUrl } from "@/lib/metadata";

export interface EmailShellInput {
  locale: Locale;
  preheader: string;
  bodyHtml: string;
  bodyText: string;
  unsubscribeUrl: string;
}

const FONT_STACK =
  "Georgia, 'Times New Roman', Times, 'Iowan Old Style', 'Palatino Linotype', serif";
const BG = "#fcfaf7";
const INK = "#1a1a1a";
const MUTED = "#6b6b6b";
const RULE = "#e6e2dc";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Justin Welsh–style shell: cream canvas, serif type, brand mark,
 * circular portrait, social row, legal footer.
 */
export function renderEmailShell(input: EmailShellInput): {
  html: string;
  text: string;
} {
  const site = getSiteConfig(input.locale);
  const siteLink = absoluteUrl(localizedPath("/", input.locale));
  const consultingLink = absoluteUrl(
    localizedPath("/consulting", input.locale),
  );
  const avatarUrl = absoluteUrl("/images/email-avatar.jpg");
  const findMe =
    input.locale === "en" ? "FIND ME ELSEWHERE" : "ENCUÉNTRAME TAMBIÉN EN";
  const callLabel = input.locale === "en" ? "1:1 call" : "Llamada 1:1";
  const receiving =
    input.locale === "en"
      ? "You’re receiving this because you subscribed at"
      : "Recibes este email porque te suscribiste en";
  const unsubscribeLabel =
    input.locale === "en" ? "Unsubscribe" : "Darme de baja";

  const html = `<!DOCTYPE html>
<html lang="${input.locale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(input.preheader)}</title>
</head>
<body style="margin:0;padding:0;background:${BG};color:${INK};font-family:${FONT_STACK};font-size:17px;line-height:1.65;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
    ${escapeHtml(input.preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding:0 0 36px;">
              <a href="${escapeHtml(siteLink)}" style="color:${INK};text-decoration:none;font-family:${FONT_STACK};font-size:22px;font-weight:400;letter-spacing:-0.02em;">
                ${escapeHtml(site.brand)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:0;color:${INK};font-family:${FONT_STACK};font-size:17px;line-height:1.65;text-align:left;">
              ${input.bodyHtml}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:36px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid ${RULE};font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 0 12px;">
              <img src="${escapeHtml(avatarUrl)}" width="88" height="88" alt="${escapeHtml(site.name)}" style="display:block;width:88px;height:88px;border:0;border-radius:50%;" />
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:8px 0 10px;color:${MUTED};font-family:${FONT_STACK};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;">
              ${escapeHtml(findMe)}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 0 8px;font-family:${FONT_STACK};font-size:14px;line-height:1.5;">
              <a href="${escapeHtml(site.social.x)}" style="color:${INK};text-decoration:underline;">X</a>
              <span style="color:${MUTED};">&nbsp;·&nbsp;</span>
              <a href="${escapeHtml(site.social.linkedin)}" style="color:${INK};text-decoration:underline;">LinkedIn</a>
              <span style="color:${MUTED};">&nbsp;·&nbsp;</span>
              <a href="${escapeHtml(site.social.instagram)}" style="color:${INK};text-decoration:underline;">Instagram</a>
              <span style="color:${MUTED};">&nbsp;·&nbsp;</span>
              <a href="${escapeHtml(consultingLink)}" style="color:${INK};text-decoration:underline;">${escapeHtml(callLabel)}</a>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid ${RULE};font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px 12px 0;color:${MUTED};font-family:${FONT_STACK};font-size:12px;line-height:1.55;">
              <p style="margin:0 0 8px;">
                ${escapeHtml(receiving)}
                <a href="${escapeHtml(siteLink)}" style="color:${MUTED};text-decoration:underline;">albertoroldan.me</a>.
              </p>
              <p style="margin:0 0 8px;">Tbilisi, Georgia</p>
              <p style="margin:0;">
                <a href="${escapeHtml(input.unsubscribeUrl)}" style="color:${MUTED};text-decoration:underline;">${escapeHtml(unsubscribeLabel)}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `${input.bodyText}

—
${findMe}
X: ${site.social.x}
LinkedIn: ${site.social.linkedin}
Instagram: ${site.social.instagram}
${callLabel}: ${consultingLink}

${receiving} albertoroldan.me.
Tbilisi, Georgia
${unsubscribeLabel}: ${input.unsubscribeUrl}
`;

  return { html, text };
}

export function paragraph(html: string): string {
  return `<p style="margin:0 0 18px;font-family:${FONT_STACK};font-size:17px;line-height:1.65;color:${INK};">${html}</p>`;
}

export function link(href: string, label: string): string {
  return `<a href="${escapeHtml(href)}" style="color:${INK};font-style:italic;text-decoration:underline;">${escapeHtml(label)}</a>`;
}

/** Closing block: salutation, name, handwritten-style signature image. */
export function signOff(locale: Locale, fullName = false): string {
  const cheers = locale === "en" ? "Cheers," : "Un abrazo,";
  const name = fullName ? "Alberto Roldán" : "Alberto";
  const signatureUrl = absoluteUrl("/images/email-signature.png");

  return `<p style="margin:0 0 6px;font-family:${FONT_STACK};font-size:17px;line-height:1.65;color:${INK};">${escapeHtml(cheers)}</p>
<p style="margin:0 0 4px;font-family:${FONT_STACK};font-size:17px;line-height:1.65;color:${INK};">${escapeHtml(name)}</p>
<p style="margin:0 0 18px;">
  <img src="${escapeHtml(signatureUrl)}" width="160" height="46" alt="" style="display:block;width:160px;height:auto;border:0;" />
</p>`;
}

export function signOffText(locale: Locale, fullName = false): string {
  const cheers = locale === "en" ? "Cheers," : "Un abrazo,";
  const name = fullName ? "Alberto Roldán" : "Alberto";
  return `${cheers}\n${name}`;
}

export { escapeHtml };
