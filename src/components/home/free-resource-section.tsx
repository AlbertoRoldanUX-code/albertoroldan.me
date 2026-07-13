import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/vault/fade-in";
import { getFeaturedGuide } from "@/lib/i18n/content";
import { localizedPath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

interface FreeResourceSectionProps {
  locale?: Locale;
}

export function FreeResourceSection({ locale = "es" }: FreeResourceSectionProps) {
  const featuredGuide = getFeaturedGuide(locale);
  const guideHref = localizedPath(`/guides/${featuredGuide.slug}`, locale);

  return (
    <section className="border-t border-border/60 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[52rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
            {featuredGuide.eyebrow}
          </p>
        </FadeIn>

        <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-16">
          <div>
            <FadeIn delay={0.05}>
              <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em] md:text-[2.25rem]">
                {featuredGuide.title}
                <br />
                <span className="italic">{featuredGuide.subtitle}</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-4 font-serif text-lg italic text-muted-foreground md:text-xl">
                {featuredGuide.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Link
                href={guideHref}
                className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 font-sans text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {featuredGuide.cta}
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="flex justify-center md:justify-end">
            <Link
              href={guideHref}
              className="block w-full max-w-[22rem] transition-transform hover:scale-[1.02] md:max-w-[24rem]"
            >
              <div className="overflow-hidden rounded-sm border border-border/60 bg-card shadow-[0_28px_90px_-30px_rgba(0,0,0,0.22)] dark:shadow-[0_28px_90px_-30px_rgba(0,0,0,0.65)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={featuredGuide.coverImage}
                    alt={featuredGuide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 352px, 384px"
                  />
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
