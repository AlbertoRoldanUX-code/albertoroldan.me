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
      <p className="mb-8 font-serif text-[17px] leading-[1.65] text-[#111] italic">
        {invitation.text}
      </p>
      <Link
        href={invitation.buttonUrl}
        className="inline-block rounded-sm bg-[#111] px-6 py-3 font-sans text-sm font-medium text-[#faf9f6] transition-opacity hover:opacity-90"
      >
        {invitation.buttonText}
      </Link>
    </section>
  );
}
