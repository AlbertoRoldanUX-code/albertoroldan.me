import type { GuideSubsection as GuideSubsectionType } from "@/types/guide";
import { GuideSectionHeading } from "./guide-section-heading";

interface GuideSubsectionProps {
  subsection: GuideSubsectionType;
}

export function GuideSubsection({ subsection }: GuideSubsectionProps) {
  return (
    <section>
      <GuideSectionHeading>{subsection.heading}</GuideSectionHeading>

      {subsection.intro && (
        <p className="mb-4 font-serif text-[17px] leading-[1.65] text-[#111]">
          <span className="font-semibold">
            {subsection.intro.includes(":")
              ? `${subsection.intro.slice(0, subsection.intro.indexOf(":") + 1)}`
              : subsection.intro}
          </span>
          {subsection.intro.includes(":")
            ? subsection.intro.slice(subsection.intro.indexOf(":") + 1)
            : null}
        </p>
      )}

      {subsection.paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 font-serif text-[17px] leading-[1.65] text-[#111] last:mb-0"
        >
          {paragraph}
        </p>
      ))}

      {subsection.steps?.map((step, index) => (
        <p
          key={index}
          className="mb-4 font-serif text-[17px] leading-[1.65] text-[#111] last:mb-0"
        >
          <span className="font-semibold">{step.label}</span> {step.text}
        </p>
      ))}

      {subsection.outcome && (
        <p className="mt-6 font-serif text-[17px] leading-[1.65] text-[#111]">
          <span className="font-semibold">Cómo saber que funcionó:</span>{" "}
          {subsection.outcome}
        </p>
      )}
    </section>
  );
}
