import Image from "next/image";
import { FadeIn } from "@/components/vault/fade-in";
import { cn } from "@/lib/utils";

interface GuideCoverProps {
  image: string;
  alt: string;
  className?: string;
}

export function GuideCover({ image, alt, className }: GuideCoverProps) {
  return (
    <FadeIn delay={0.2} className={cn("flex justify-center", className)}>
      <div className="w-full max-w-[22rem] md:max-w-[24rem]">
        <div className="overflow-hidden rounded-sm border border-border/60 bg-card shadow-[0_28px_90px_-30px_rgba(0,0,0,0.22)]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={image}
              alt={alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 352px, 384px"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
