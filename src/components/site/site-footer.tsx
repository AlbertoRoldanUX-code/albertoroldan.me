"use client";

import Link from "next/link";
import { Instagram, Linkedin, X } from "lucide-react";
import { useLocale } from "@/components/site/locale-provider";
import { getSiteConfig, getUi } from "@/lib/i18n/content";
import { localizedPath } from "@/lib/i18n/paths";

const socialLinks = [
  { key: "x" as const, label: "X", icon: X },
  { key: "linkedin" as const, label: "LinkedIn", icon: Linkedin },
  { key: "instagram" as const, label: "Instagram", icon: Instagram },
] as const;

interface SiteFooterProps {
  /** Landing CTA: sin footer. */
  minimal?: boolean;
}

export function SiteFooter({ minimal = false }: SiteFooterProps) {
  const locale = useLocale();
  const siteConfig = getSiteConfig(locale);
  const ui = getUi(locale);
  const year = new Date().getFullYear();

  if (minimal) {
    return null;
  }

  const footerLinks = [
    { href: localizedPath("/about", locale), label: ui.nav.about },
    { href: localizedPath("/resources", locale), label: ui.nav.resources },
    {
      href: localizedPath("/consulting", locale),
      label: ui.nav.consulting,
    },
    { href: localizedPath("/privacy", locale), label: ui.footer.privacy },
    { href: localizedPath("/terms", locale), label: ui.footer.terms },
    {
      href: localizedPath("/service-policy", locale),
      label: ui.footer.servicePolicy,
    },
  ];

  return (
    <footer className="border-t border-border/60 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[52rem] text-center">
        <p className="font-sans text-xs text-muted-foreground">
          © {year} {siteConfig.name}
        </p>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-5 flex items-center justify-center gap-4">
          {socialLinks.map(({ key, label, icon: Icon }) => (
            <a
              key={label}
              href={siteConfig.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
