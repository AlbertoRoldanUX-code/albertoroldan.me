"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, X } from "lucide-react";
import { EmailForm } from "@/components/vault/email-form";
import { useLocale } from "@/components/site/locale-provider";
import {
  getFooterContent,
  getSiteConfig,
  getUi,
} from "@/lib/i18n/content";
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
  const footerContent = getFooterContent(locale);
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
    <footer className="border-t border-border/60 bg-muted/50 px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-[72rem] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative size-12 overflow-hidden bg-muted">
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-serif text-lg tracking-tight">{siteConfig.name}</p>
              <p className="font-sans text-xs text-muted-foreground">
                {siteConfig.brand}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-[32rem] font-sans text-[15px] leading-relaxed text-muted-foreground">
            {footerContent.bio}
          </p>

          <div className="mt-6 flex items-center gap-4">
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

        <div>
          <p className="font-serif text-xl tracking-[-0.02em]">
            {footerContent.newsletterHeading}
          </p>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            {footerContent.newsletterBody}
          </p>
          <div className="mt-5">
            <EmailForm
              slug={siteConfig.newsletter.leadMagnetSlug}
              placeholder={siteConfig.newsletter.placeholder}
              buttonText={siteConfig.newsletter.buttonText}
              disclaimer={siteConfig.newsletter.disclaimer}
              locale={locale}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[72rem] flex-col gap-5 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="font-sans text-xs text-muted-foreground">
          © {year} {siteConfig.name}
        </p>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
      </div>
    </footer>
  );
}
