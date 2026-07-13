import Image from "next/image";
import Link from "next/link";
import { getGuides, getUi } from "@/lib/i18n/content";
import type { Resource } from "@/data/resources";
import type { Locale } from "@/lib/i18n/config";

interface ResourcesContentProps {
  locale?: Locale;
}

function FeaturedGuide({
  guide,
  cta,
}: {
  guide: Resource;
  cta: string;
}) {
  return (
    <article className="grid items-center gap-8 rounded-xl bg-secondary/60 p-6 md:grid-cols-[auto_1fr] md:gap-10 md:p-10">
      <Link
        href={guide.href}
        className="mx-auto block w-full max-w-[11rem] shrink-0 transition-transform hover:scale-[1.02] md:mx-0 md:max-w-[13rem]"
      >
        <div className="overflow-hidden rounded-sm border border-border/60 bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={guide.coverImage}
              alt={guide.title}
              fill
              className="object-cover"
              sizes="208px"
            />
          </div>
        </div>
      </Link>

      <div>
        <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {guide.category}
        </p>
        <h2 className="mt-3 font-serif text-[1.5rem] leading-tight tracking-[-0.02em] md:text-[1.85rem]">
          {guide.title}
        </h2>
        {guide.subtitle && (
          <p className="mt-2 font-serif text-lg italic text-muted-foreground">
            {guide.subtitle}
          </p>
        )}
        <Link
          href={guide.href}
          className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 font-sans text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}

function GuideCard({ guide, cta }: { guide: Resource; cta: string }) {
  return (
    <article className="flex flex-col gap-5 sm:flex-row sm:gap-8">
      <Link
        href={guide.href}
        className="block w-full max-w-[9rem] shrink-0 transition-transform hover:scale-[1.02]"
      >
        <div className="overflow-hidden rounded-sm border border-border/60 bg-card shadow-[0_12px_40px_-15px_rgba(0,0,0,0.12)]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={guide.coverImage}
              alt={guide.title}
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
        </div>
      </Link>

      <div className="flex flex-col justify-center">
        <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {guide.category}
        </p>
        <h3 className="mt-2 font-serif text-xl leading-tight tracking-[-0.02em] md:text-[1.35rem]">
          {guide.title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {guide.description}
        </p>
        <Link
          href={guide.href}
          className="mt-4 font-serif text-sm underline-offset-4 hover:underline md:text-base"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}

export function ResourcesContent({ locale = "es" }: ResourcesContentProps) {
  const guides = getGuides(locale);
  const ui = getUi(locale);
  const featured = guides.find((g) => g.featured);
  const otherGuides = guides.filter((g) => !g.featured);

  return (
    <section className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[52rem]">
        <h1 className="font-serif text-[2.25rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
          {ui.resources.title}
        </h1>

        <div className="mt-10 space-y-12 md:mt-14 md:space-y-16">
          {featured && (
            <FeaturedGuide guide={featured} cta={ui.resources.cta} />
          )}
          {otherGuides.length > 0 && (
            <div className="grid gap-12 md:grid-cols-2 md:gap-10">
              {otherGuides.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  guide={guide}
                  cta={ui.resources.cta}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
