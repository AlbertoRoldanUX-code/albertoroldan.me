import Link from "next/link";
import type { Essay } from "@/data/essays";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

interface EssayArticleProps {
  essay: Essay;
  locale: Locale;
}

export function EssayArticle({ essay, locale }: EssayArticleProps) {
  const backHref = localizedPath("/", locale);
  const backLabel = locale === "en" ? "← Home" : "← Inicio";
  const reading =
    locale === "en"
      ? `${essay.readingTime} read`
      : `${essay.readingTime} de lectura`;

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link
        href={backHref}
        className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {backLabel}
      </Link>
      <p className="mt-10 font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
        {reading}
      </p>
      <h1 className="mt-3 font-serif text-[2rem] leading-tight tracking-[-0.02em] md:text-[2.5rem]">
        {essay.title}
      </h1>
      <div className="mt-10 space-y-5 font-sans text-[1.05rem] leading-relaxed text-foreground/90 md:text-[1.125rem]">
        {essay.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
