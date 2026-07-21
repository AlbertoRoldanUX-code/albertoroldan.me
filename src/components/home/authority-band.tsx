import { FadeIn } from "@/components/vault/fade-in";
import { getAuthorityBand } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";

interface AuthorityBandProps {
  locale?: Locale;
}

export function AuthorityBand({ locale = "en" }: AuthorityBandProps) {
  const band = getAuthorityBand(locale);
  const place = band.places[0];

  if (!place) return null;

  return (
    <section className="border-y border-border/60 bg-muted/70 px-6 py-4 md:py-5">
      <FadeIn className="mx-auto flex max-w-[72rem] flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
          {band.builtFromLabel}
        </p>
        <p className="font-sans text-sm text-foreground/90 md:text-[15px]">
          <span className="mr-1.5" aria-hidden>
            {place.flag}
          </span>
          {place.name}
        </p>
      </FadeIn>
    </section>
  );
}
