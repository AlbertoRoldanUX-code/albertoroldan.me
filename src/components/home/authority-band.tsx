import { FadeIn } from "@/components/vault/fade-in";
import { getAuthorityBand } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface AuthorityBandProps {
  locale?: Locale;
}

export function AuthorityBand({ locale = "en" }: AuthorityBandProps) {
  const band = getAuthorityBand(locale);

  return (
    <section className="border-y border-border/60 bg-muted/70 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-[72rem]">
        <FadeIn>
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            {band.builtFromLabel}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 md:gap-x-7">
            {band.places.map((place) => (
              <li
                key={place.name}
                className="font-sans text-sm text-foreground/90 md:text-[15px]"
              >
                <span className="mr-1.5" aria-hidden>
                  {place.flag}
                </span>
                {place.name}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8 border-t border-border/50 pt-8">
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            {band.languagesLabel}
          </p>
          <p className="mt-4 max-w-[52rem] font-serif text-lg leading-snug tracking-[-0.01em] text-foreground/90 md:text-xl">
            {band.languages.join(" · ")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
