"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/site/locale-provider";
import { getUi } from "@/lib/i18n/content";
import { switchLocalePath } from "@/lib/i18n/paths";
import { type Locale, locales } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const ui = getUi(locale);

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-border/60 p-0.5"
      role="group"
      aria-label={ui.language.label}
    >
      {locales.map((targetLocale) => {
        const isActive = locale === targetLocale;
        const href = switchLocalePath(pathname, targetLocale);

        return (
          <Link
            key={targetLocale}
            href={href}
            className={cn(
              "rounded-full px-2 py-0.5 font-sans text-[11px] transition-colors sm:text-xs",
              isActive
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {localeLabels[targetLocale]}
          </Link>
        );
      })}
    </div>
  );
}
