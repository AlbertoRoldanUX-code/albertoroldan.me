import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/vault/fade-in";
import { getHomeConsulting } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface HomeConsultingSectionProps {
  locale?: Locale;
  /** When rendered on /consulting, CTAs scroll to #book */
  onPage?: boolean;
}

export function HomeConsultingSection({
  locale = "en",
  onPage = false,
}: HomeConsultingSectionProps) {
  const consulting = getHomeConsulting(locale);
  const bookHref = onPage
    ? "#book"
    : `${localizedPath("/consulting", locale)}#book`;
  const detailsHref = localizedPath("/consulting", locale);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[72rem]">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <FadeIn>
              <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
                {consulting.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-[2.5rem] leading-[1.08] tracking-[-0.03em] md:text-[3.5rem]">
                {consulting.title}
              </h2>
              <p className="mt-5 max-w-[34rem] font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                {consulting.lead}
              </p>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-8 flex flex-wrap items-end gap-4">
              <p className="font-serif text-[3rem] leading-none tracking-[-0.04em]">
                {consulting.price}
              </p>
              <p className="pb-1.5 font-sans text-sm text-muted-foreground">
                {consulting.duration}
              </p>
            </FadeIn>

            <FadeIn delay={0.12} className="mt-10">
              <p className="font-sans text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
                {consulting.idealLabel}
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {consulting.ideal.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-sans text-[15px] text-foreground/90"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="border border-border bg-card p-7 md:p-9">
              <p className="font-sans text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
                {consulting.outcomesLabel}
              </p>
              <ul className="mt-5 space-y-4">
                {consulting.outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-sans text-[15px] leading-relaxed md:text-base"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-foreground"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-border/70 pt-8">
                <p className="font-sans text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
                  {consulting.processLabel}
                </p>
                <ol className="mt-5 space-y-4">
                  {consulting.process.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <span className="font-sans text-sm tabular-nums text-muted-foreground">
                        {step.step}
                      </span>
                      <div>
                        <p className="font-serif text-lg tracking-[-0.02em]">
                          {step.title}
                        </p>
                        <p className="mt-1 font-sans text-sm text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={bookHref}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 font-sans text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {consulting.primaryCta}
                </Link>
                {!onPage ? (
                  <Link
                    href={detailsHref}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-7 font-sans text-[15px] font-medium transition-colors hover:border-foreground/40 hover:bg-muted/50"
                  >
                    {consulting.secondaryCta}
                  </Link>
                ) : null}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
