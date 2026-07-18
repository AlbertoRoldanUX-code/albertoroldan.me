import { FadeIn } from "@/components/vault/fade-in";
import { getPrinciplesSection } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface PrinciplesSectionProps {
  locale?: Locale;
}

export function PrinciplesSection({ locale = "en" }: PrinciplesSectionProps) {
  const principles = getPrinciplesSection(locale);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[72rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            {principles.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-[2.5rem] leading-[1.08] tracking-[-0.03em] md:text-[3.75rem]">
            {principles.title}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {principles.items.map((item, index) => (
            <FadeIn key={item.title} delay={0.04 * index}>
              <article className="h-full border border-border/70 bg-card/50 p-6 transition-colors hover:border-foreground/25 hover:bg-card md:p-7">
                <p className="font-sans text-[11px] tracking-[0.2em] text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-2xl tracking-[-0.02em] md:text-[1.65rem]">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
