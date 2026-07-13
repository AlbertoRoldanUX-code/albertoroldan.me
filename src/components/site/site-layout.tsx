import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { LocaleProvider } from "@/components/site/locale-provider";
import type { Locale } from "@/lib/i18n/config";

interface SiteLayoutProps {
  children: React.ReactNode;
  locale?: Locale;
}

export function SiteLayout({ children, locale = "es" }: SiteLayoutProps) {
  return (
    <LocaleProvider locale={locale}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}
