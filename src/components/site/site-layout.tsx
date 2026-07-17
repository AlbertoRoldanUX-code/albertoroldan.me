import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { LocaleProvider } from "@/components/site/locale-provider";
import type { Locale } from "@/lib/i18n/config";

interface SiteLayoutProps {
  children: React.ReactNode;
  locale?: Locale;
  /** Landing CTA: sin enlaces de nav en header/footer. */
  minimal?: boolean;
}

export function SiteLayout({
  children,
  locale = "en",
  minimal = false,
}: SiteLayoutProps) {
  return (
    <LocaleProvider locale={locale}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader locale={locale} minimal={minimal} />
        <main className="flex-1">{children}</main>
        <SiteFooter minimal={minimal} />
      </div>
    </LocaleProvider>
  );
}
