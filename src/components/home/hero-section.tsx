import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/vault/fade-in";
import { getSiteConfig } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface HomeHeroSectionProps {
  locale?: Locale;
}

export function HomeHeroSection({ locale = "en" }: HomeHeroSectionProps) {
  const siteConfig = getSiteConfig(locale);
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(17,17,17,0.04),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-[72rem] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <FadeIn>
            <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              {siteConfig.brand}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-5 font-serif text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-balance md:text-[4.25rem] md:leading-[1.02]">
              {siteConfig.tagline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-[34rem] font-sans text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
              {siteConfig.subtagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-9 flex flex-wrap items-center gap-3 md:mt-10">
            <Link
              href={localizedPath("/guides/field-manual", locale)}
              className="inline-flex h-12 items-center rounded-full bg-primary px-7 font-sans text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href={localizedPath("/consulting", locale)}
              className="inline-flex h-12 items-center rounded-full border border-foreground/20 bg-transparent px-7 font-sans text-[15px] font-medium transition-colors hover:border-foreground/40 hover:bg-muted/60"
            >
              {hero.secondaryCta}
            </Link>
            <Link
              href={localizedPath("/about", locale)}
              className="inline-flex h-12 items-center px-3 font-serif text-base underline-offset-4 transition-opacity hover:underline md:text-lg"
            >
              {hero.tertiaryCta}
            </Link>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="relative mx-auto w-full max-w-[14rem] sm:max-w-[16rem] lg:mx-0 lg:justify-self-end">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={siteConfig.avatar}
              alt={hero.photoAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 640px) 224px, 256px"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
