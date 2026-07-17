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

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Minimal ConvertKit-like shell: plain body, social row, legal footer.
 */
export function renderEmailShell(input: EmailShellInput): {
  html: string;
  text: string;
} {
  const site = getSiteConfig(input.locale);
  const siteLink = absoluteUrl(localizedPath("/", input.locale));
  const findMe =
    input.locale === "en" ? "Find me elsewhere" : "Encuéntrame también en";
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
<body style="margin:0;padding:0;background:#ffffff;color:#111111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${escapeHtml(input.preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;text-align:left;">
          <tr>
            <td style="padding:0 0 8px;">
              ${input.bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:28px 0 8px;border-top:1px solid #e8e8e8;color:#666666;font-size:13px;">
              <p style="margin:0 0 8px;">${escapeHtml(findMe)}</p>
              <p style="margin:0;">
                <a href="${escapeHtml(site.social.x)}" style="color:#111111;">X</a>
                &nbsp;·&nbsp;
                <a href="${escapeHtml(site.social.linkedin)}" style="color:#111111;">LinkedIn</a>
                &nbsp;·&nbsp;
                <a href="${escapeHtml(site.social.instagram)}" style="color:#111111;">Instagram</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 0 0;color:#888888;font-size:12px;line-height:1.5;">
              <p style="margin:0 0 8px;">
                ${escapeHtml(receiving)}
                <a href="${escapeHtml(siteLink)}" style="color:#888888;">albertoroldan.me</a>.
              </p>
              <p style="margin:0 0 8px;">Tbilisi, Georgia</p>
              <p style="margin:0;">
                <a href="${escapeHtml(input.unsubscribeUrl)}" style="color:#888888;">${escapeHtml(unsubscribeLabel)}</a>
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

${receiving} albertoroldan.me.
Tbilisi, Georgia
${unsubscribeLabel}: ${input.unsubscribeUrl}
`;

  return { html, text };
}

export function paragraph(html: string): string {
  return `<p style="margin:0 0 16px;">${html}</p>`;
}

export function link(href: string, label: string): string {
  return `<a href="${escapeHtml(href)}" style="color:#111111;text-decoration:underline;">${escapeHtml(label)}</a>`;
}

export { escapeHtml };
