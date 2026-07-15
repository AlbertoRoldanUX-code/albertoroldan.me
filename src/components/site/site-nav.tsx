"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/site/locale-provider";
import { getUi } from "@/lib/i18n/content";
import { localizedPath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const locale = useLocale();
  const ui = getUi(locale);

  const navLinks = [
    { href: localizedPath("/about", locale), label: ui.nav.about },
    { href: localizedPath("/resources", locale), label: ui.nav.resources },
    {
      href: localizedPath("/consulting", locale),
      label: ui.nav.consulting,
    },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "font-sans text-[12px] transition-colors sm:text-[13px] md:text-sm",
              isActive
                ? "rounded-sm border border-foreground px-2 py-0.5 text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
