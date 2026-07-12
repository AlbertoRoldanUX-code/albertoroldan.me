import Link from "next/link";
import { Instagram, Linkedin, X } from "lucide-react";
import { siteConfig } from "@/data/home";

const footerLinks = [
  { href: "/about", label: "Sobre mí" },
  { href: "/resources", label: "Recursos" },
  { href: "/privacy", label: "Privacidad" },
];

const socialLinks = [
  {
    href: siteConfig.social.x,
    label: "X",
    icon: X,
  },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: Instagram,
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[52rem] text-center">
        <p className="font-sans text-xs text-muted-foreground">
          © {year} {siteConfig.name}
        </p>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-5 flex items-center justify-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
