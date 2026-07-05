"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "Sobre mí" },
  { href: "/essays", label: "Ensayos" },
  { href: "/resources", label: "Recursos" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "font-sans text-[12px] transition-colors sm:text-[13px] md:text-sm",
              isActive
                ? "rounded-sm border border-foreground px-2 py-0.5 text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
