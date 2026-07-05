import { cn } from "@/lib/utils";

interface GuideSectionHeadingProps {
  children: string;
  className?: string;
}

export function GuideSectionHeading({
  children,
  className,
}: GuideSectionHeadingProps) {
  return (
    <h3
      className={cn(
        "mt-10 mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]",
        className,
      )}
    >
      {children}
    </h3>
  );
}
