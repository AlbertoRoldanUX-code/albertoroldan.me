import Link from "next/link";
import type { GuideInvitation } from "@/types/guide";

interface GuideInvitationSectionProps {
  invitation: GuideInvitation;
}

export function GuideInvitationSection({
  invitation,
}: GuideInvitationSectionProps) {
  return (
    <section className="guide-page mb-24 border-t border-[#e8e6e1] pt-12">
      {invitation.title && (
        <h2 className="mb-8 font-serif text-[1.75rem] leading-[1.2] md:text-[2rem]">
          {invitation.title}
        </h2>
      )}

      {invitation.paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 font-serif text-[17px] leading-[1.65] text-[#111] last:mb-0"
        >
          {paragraph}
        </p>
      ))}

      {invitation.text && (
        <p className="mb-8 font-serif text-[17px] leading-[1.65] text-[#111] italic">
          {invitation.text}
        </p>
      )}

      {invitation.buttonText && invitation.buttonUrl && (
        <Link
          href={invitation.buttonUrl}
          className="mt-8 inline-block rounded-sm bg-[#111] px-6 py-3 font-sans text-sm font-medium text-[#faf9f6] transition-opacity hover:opacity-90"
        >
          {invitation.buttonText}
        </Link>
      )}
    </section>
  );
}
