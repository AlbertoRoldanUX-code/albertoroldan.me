import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/vault/fade-in";
import { getFeaturedGuide } from "@/lib/i18n/content";
import { localizedPath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

interface FreeResourceSectionProps {
  locale?: Locale;
}

export function FreeResourceSection({ locale = "en" }: FreeResourceSectionProps) {
  const guide = getFeaturedGuide(locale);
  const guideHref = localizedPath(`/guides/${guide.slug}`, locale);

  return (
    <section className="border-t border-border/60 bg-muted/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[72rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            {guide.eyebrow}
          </p>
        </FadeIn>

        <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <FadeIn delay={0.05}>
              <h2 className="font-serif text-[2.35rem] leading-[1.08] tracking-[-0.03em] md:text-[3.5rem]">
                {guide.title}
                <br />
                <span className="italic text-foreground/80">{guide.subtitle}</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center border border-border bg-card px-3.5 py-1.5 font-sans text-sm font-medium">
                  {guide.pagesLabel}
                </span>
                <span className="font-sans text-sm text-muted-foreground">
                  {guide.pagesNote}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-[36rem] font-serif text-lg italic text-muted-foreground md:text-xl">
                {guide.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-10 font-sans text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
                {guide.learnLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {guide.learn.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-sans text-[15px] leading-relaxed text-foreground/90 md:text-base"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.16}>
              <Link
                href={guideHref}
                className="mt-10 inline-flex h-14 items-center rounded-full bg-primary px-8 font-sans text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {guide.cta}
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="flex justify-center lg:justify-end">
            <Link
              href={guideHref}
              className="group relative block w-full max-w-[22rem] transition-transform duration-500 hover:-translate-y-1 md:max-w-[26rem]"
            >
              <div className="absolute -inset-6 -z-10 rounded-full bg-foreground/[0.03] blur-2xl" />
              <div className="overflow-hidden border border-border/60 bg-card shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={guide.coverImage}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 352px, 416px"
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
