"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Check, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { BookCallButton } from "@/components/consulting/book-call-button";
import { buttonVariants } from "@/components/ui/button";
import type { ConsultingContentData } from "@/data/consulting-types";
import { getSiteConfig } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils";

interface ExpertProfileProps {
  content: ConsultingContentData;
  locale: Locale;
  bookingUrl?: string;
  /** Compact teaser for the home page */
  asSection?: boolean;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function ExpertProfile({
  content,
  locale,
  bookingUrl,
  asSection = false,
}: ExpertProfileProps) {
  const siteConfig = getSiteConfig(locale);
  const { profile, services, links } = content;

  const socials = [
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: siteConfig.social.x, label: "X", Icon: XIcon },
    { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  ];

  return (
    <div
      className={cn(
        "px-6",
        asSection
          ? "border-t border-border/60 py-14 md:py-20"
          : "pt-10 pb-16 md:pt-14 md:pb-24",
      )}
    >
      <div className="mx-auto max-w-[68rem]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-start lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative size-28 overflow-hidden rounded-full bg-muted ring-1 ring-border md:size-32">
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="128px"
                priority={!asSection}
              />
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              {asSection ? (
                <h2 className="font-serif text-[2rem] leading-none tracking-[-0.03em] md:text-[2.5rem]">
                  {siteConfig.name}
                </h2>
              ) : (
                <h1 className="font-serif text-[2rem] leading-none tracking-[-0.03em] md:text-[2.5rem]">
                  {siteConfig.name}
                </h1>
              )}
              <span
                className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#1d9bf0] text-white md:size-6"
                title={locale === "en" ? "Verified" : "Verificado"}
                aria-label={
                  locale === "en" ? "Verified profile" : "Perfil verificado"
                }
              >
                <Check className="size-3 stroke-[3] md:size-3.5" />
              </span>
            </div>

            <div className="mt-4 space-y-3 font-sans text-[15px] leading-snug md:text-base md:leading-snug">
              <p className="font-medium text-foreground">{profile.tagline}</p>
              {profile.bio.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-5 font-sans text-[15px] leading-relaxed text-foreground/90 md:text-base">
              {profile.valueProp}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-sans text-[13px] text-foreground/85">
                <MapPin className="size-3.5 text-muted-foreground" aria-hidden />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-sans text-[13px] text-foreground/85">
                <Briefcase className="size-3.5 text-muted-foreground" aria-hidden />
                {profile.category}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/40 text-foreground/80 transition-colors hover:border-foreground/25 hover:bg-card hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="rounded-2xl border border-border bg-card p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-6"
          >
            <h2 className="font-sans text-lg font-semibold tracking-tight">
              {profile.servicesHeading}
            </h2>

            <div className="mt-4 space-y-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="rounded-xl border border-foreground/35 bg-background p-4 shadow-sm"
                >
                  <p className="font-sans text-[15px] font-semibold tracking-tight">
                    {service.title}
                  </p>

                  <div className="mt-2 space-y-1.5 font-sans text-sm leading-relaxed text-muted-foreground">
                    {service.summary.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <p className="mt-4 font-sans text-sm font-medium text-foreground">
                    {service.idealForLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5 font-sans text-sm leading-relaxed text-muted-foreground">
                    {service.idealFor.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 font-sans text-sm font-medium text-foreground">
                    {service.outcomesLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5 font-sans text-sm leading-relaxed text-muted-foreground">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/70 pt-4 font-sans text-sm">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="size-3.5" aria-hidden />
                      {service.duration}
                    </span>
                    <span className="font-semibold tabular-nums text-foreground">
                      {service.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <BookCallButton
                label={profile.availabilityCta}
                emailSubject={content.emailSubject}
                bookingUrl={bookingUrl}
                locale={locale}
                linkToConsultingPage={asSection}
                className="h-14 w-full rounded-xl text-base font-bold tracking-tight"
              />
            </div>
          </motion.aside>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.16,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-12 md:mt-16"
        >
          <h2 className="font-sans text-lg font-semibold tracking-tight">
            {profile.linksHeading}
          </h2>
          <ul className="mt-4 space-y-3">
            {links.map((link) => {
              const href = link.external
                ? link.href
                : localizedPath(link.href, locale);

              const inner = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-[11px] font-semibold tracking-tight text-background">
                    ar.
                  </span>
                  <span className="min-w-0 flex-1 font-sans text-[15px] leading-snug">
                    {link.title}
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    aria-hidden
                  />
                </>
              );

              const className =
                "group flex w-full items-center gap-3.5 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-foreground/20 hover:bg-muted/40";

              return (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link href={href} className={className}>
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {asSection ? (
            <Link
              href={localizedPath("/consulting", locale)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-6 rounded-xl",
              )}
            >
              {content.cta} →
            </Link>
          ) : null}
        </motion.section>
      </div>
    </div>
  );
}
