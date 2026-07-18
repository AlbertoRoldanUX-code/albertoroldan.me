import Link from "next/link";
import { FadeIn } from "@/components/vault/fade-in";
import { getStorySection } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface StorySectionProps {
  locale?: Locale;
}

export function StorySection({ locale = "en" }: StorySectionProps) {
  const story = getStorySection(locale);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[72rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            {story.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[20ch] font-serif text-[2.5rem] leading-[1.08] tracking-[-0.03em] md:text-[3.75rem]">
            {story.title}
          </h2>
          <p className="mt-6 max-w-[40rem] font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {story.lead}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 md:mt-16">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {story.milestones.map((milestone, index) => (
              <li
                key={milestone.label}
                className="group relative border border-border/70 bg-card/40 p-5 transition-colors hover:border-foreground/25 hover:bg-card"
              >
                <span className="font-sans text-[11px] tracking-[0.2em] text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-serif text-xl tracking-[-0.02em] md:text-[1.35rem]">
                  {milestone.label}
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  {milestone.detail}
                </p>
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn delay={0.16} className="mt-10">
          <Link
            href={localizedPath("/about", locale)}
            className="inline-flex font-serif text-lg underline-offset-4 hover:underline"
          >
            {story.cta} →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
