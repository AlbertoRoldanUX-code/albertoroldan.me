import Link from "next/link";
import type { Essay } from "@/data/essays";
import { FadeIn } from "@/components/vault/fade-in";

interface EssayCardProps {
  essay: Essay;
}

export function EssayCard({ essay }: EssayCardProps) {
  const href = essay.href ?? "/essays";

  return (
    <article className="group border-b border-border/60 py-8 first:pt-0 last:border-b-0 md:py-10">
      <Link href={href} className="block">
        <FadeIn>
          <div className="flex items-center gap-2">
            <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {essay.category}
            </p>
            {essay.isNew && (
              <span className="rounded-sm bg-primary px-1.5 py-0.5 font-sans text-[10px] font-medium tracking-wide text-primary-foreground uppercase">
                Nuevo
              </span>
            )}
          </div>

          <h3 className="mt-3 font-serif text-[1.65rem] leading-tight tracking-[-0.02em] transition-colors group-hover:text-foreground/80 md:text-[1.85rem]">
            {essay.title}
          </h3>

          <p className="mt-3 max-w-[36rem] font-sans text-[15px] leading-relaxed text-muted-foreground md:text-base">
            {essay.description}
          </p>

          <p className="mt-4 font-sans text-xs text-muted-foreground/80 md:text-[13px]">
            N.º {essay.issue}
            <span className="mx-2">·</span>
            {essay.date}
            <span className="mx-2">·</span>
            {essay.readTime} de lectura
          </p>
        </FadeIn>
      </Link>
    </article>
  );
}

interface EssayListSectionProps {
  label: string;
  essays: Essay[];
  showArchiveLink?: boolean;
}

export function EssayListSection({
  label,
  essays,
  showArchiveLink = false,
}: EssayListSectionProps) {
  return (
    <section className="border-t border-border/60 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[42rem]">
        <FadeIn>
          <h2 className="font-sans text-[11px] font-semibold tracking-[0.25em] text-foreground uppercase">
            {label}
          </h2>
        </FadeIn>

        <div className="mt-6">
          {essays.map((essay) => (
            <EssayCard key={essay.issue} essay={essay} />
          ))}
        </div>

        {showArchiveLink && (
          <FadeIn className="mt-8">
            <Link
              href="/essays"
              className="font-serif text-base text-foreground underline-offset-4 hover:underline md:text-lg"
            >
              Ver el archivo completo →
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
