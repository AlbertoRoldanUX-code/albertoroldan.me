import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site/site-nav";
import { ThemeToggle } from "@/components/vault/theme-toggle";
import { siteConfig } from "@/data/home";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-sm",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[52rem] items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div className="relative size-7 overflow-hidden rounded-full bg-muted md:size-8">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="font-serif text-[15px] font-semibold tracking-tight md:text-base">
            {siteConfig.brand}
          </span>
        </Link>

        <nav className="flex items-center gap-1 md:gap-2">
          <SiteNav />
          <ThemeToggle className="ml-1 md:ml-2" />
        </nav>
      </div>
    </header>
  );
}
