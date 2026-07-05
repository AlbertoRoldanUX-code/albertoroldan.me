import Link from "next/link";
import { siteConfig } from "@/data/home";

const footerLinks = [
  { href: "/about", label: "Sobre mí" },
  { href: "/essays", label: "Ensayos" },
  { href: "/resources", label: "Recursos" },
  { href: "/privacy", label: "Privacidad" },
];

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

        <div className="mt-4 flex items-center justify-center gap-5">
          <a
            href={siteConfig.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            X
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
