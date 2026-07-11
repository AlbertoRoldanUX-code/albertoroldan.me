import type { Guide } from "@/types/guide";
import { GuideInvitationSection } from "./guide-invitation";
import { GuideSubsection } from "./guide-subsection";

interface GuideDocumentProps {
  guide: Guide;
}

export function GuideDocument({ guide }: GuideDocumentProps) {
  return (
    <article className="guide-document mx-auto max-w-[720px] bg-[#faf9f6] px-6 py-16 text-[#111] md:px-12 md:py-20">
      {/* Portada */}
      <header className="guide-cover-page guide-page mb-24 flex min-h-[80vh] flex-col justify-between pt-8">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#9a9a9a]">
          {guide.cover.eyebrow}
        </p>

        <div className="my-auto py-16">
          <h1 className="font-serif text-[2.5rem] font-normal leading-[1.15] tracking-[-0.02em] md:text-[3rem]">
            {guide.cover.title}
          </h1>
          <p className="mt-6 font-serif text-xl italic text-[#6b6b6b] md:text-2xl">
            {guide.cover.subtitle}
          </p>
        </div>

        <div>
          <hr className="mb-8 border-[#e8e6e1]" />
          <p className="font-serif text-lg font-medium">{guide.cover.author}</p>
          <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.25em] text-[#9a9a9a]">
            {guide.cover.website}
          </p>
        </div>
      </header>

      {/* Introducción */}
      <section className="guide-page mb-24">
        <h2 className="font-serif text-[1.75rem] leading-[1.2] md:text-[2rem]">
          {guide.introduction.title}
        </h2>
        <p className="mt-3 font-serif text-xl italic text-[#6b6b6b]">
          {guide.introduction.subtitle}
        </p>
        <p className="mt-4 font-serif text-base text-[#111]">
          Por:{" "}
          <span className="underline underline-offset-2">
            {guide.introduction.byline}
          </span>
        </p>

        <hr className="my-10 border-[#e8e6e1]" />

        {guide.introduction.sections.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h3 className="mb-6 font-serif text-xl font-medium">
                {section.heading}
              </h3>
            )}
            {section.paragraphs?.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="mb-4 font-serif text-[17px] leading-[1.65] text-[#111] last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Capacidades */}
      {guide.capacities.map((capacity) => (
        <section key={capacity.number} className="guide-page mb-24">
          <div className="mb-10 flex items-center gap-4">
            <hr className="flex-1 border-[#e8e6e1]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-[#9a9a9a]">
              Capacidad {capacity.number}
            </span>
            <hr className="flex-1 border-[#e8e6e1]" />
          </div>

          <h2 className="mb-10 font-serif text-[2rem] leading-[1.15] md:text-[2.25rem]">
            {capacity.title}
          </h2>

          {capacity.subsections.map((subsection, index) => (
            <GuideSubsection key={index} subsection={subsection} />
          ))}
        </section>
      ))}

      {/* Cierre */}
      <section className="guide-page mb-24">
        <h2 className="mb-8 font-serif text-[1.75rem] leading-[1.2] md:text-[2rem]">
          {guide.closing.title}
        </h2>
        {guide.closing.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 font-serif text-[17px] leading-[1.65] text-[#111] last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Autor */}
      <footer className="guide-page border-t border-[#e8e6e1] pt-10">
        <p className="mb-2 font-serif text-lg font-semibold text-[#111]">
          {guide.author.name}
        </p>
        {guide.author.bio.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 font-serif text-[17px] leading-[1.65] text-[#111] italic last:mb-0"
          >
            {paragraph}
          </p>
        ))}
        <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.2em] text-[#9a9a9a]">
          {guide.author.website}
        </p>
        {guide.author.note && (
          <p className="mt-8 font-serif text-[15px] leading-[1.6] text-[#6b6b6b] italic">
            {guide.author.note}
          </p>
        )}
      </footer>

      <GuideInvitationSection invitation={guide.invitation} />
    </article>
  );
}
