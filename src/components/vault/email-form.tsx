"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getEmailProvider } from "@/lib/email";
import { getUi } from "@/lib/i18n/content";
import { localizedPath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface EmailFormProps {
  slug: string;
  placeholder: string;
  buttonText: string;
  disclaimer: string;
  downloadUrl?: string;
  locale?: Locale;
  className?: string;
}

export function EmailForm({
  slug,
  placeholder,
  buttonText,
  disclaimer,
  downloadUrl,
  locale = "es",
  className,
}: EmailFormProps) {
  const router = useRouter();
  const ui = getUi(locale);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const result = await getEmailProvider().subscribe({
        email,
        leadMagnetSlug: slug,
        downloadUrl,
      });

      if (result.success) {
        setStatus("success");
        const thankYouPath = localizedPath(
          `/thank-you?slug=${encodeURIComponent(slug)}`,
          locale,
        );
        router.push(thankYouPath);
        return;
      }

      setStatus("error");
      setMessage(result.message ?? ui.email.error);
    } catch {
      setStatus("error");
      setMessage(ui.email.error);
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-[34rem] flex-col gap-3 sm:flex-row sm:items-stretch"
      >
        <Input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "loading" || status === "success"}
          aria-label={ui.email.ariaLabel}
          className="h-12 flex-1 rounded-full px-5 text-[15px] shadow-none"
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading" || status === "success"}
          className="h-12 shrink-0 rounded-full px-7 text-[15px] font-medium"
        >
          {status === "loading" ? ui.email.loading : buttonText}
        </Button>
      </form>

      <p className="mx-auto mt-4 max-w-[30rem] text-center text-xs leading-relaxed text-muted-foreground md:text-[13px]">
        {disclaimer}
      </p>

      {status === "error" && (
        <p className="mt-2 text-center text-xs text-destructive md:text-sm">
          {message}
        </p>
      )}
    </div>
  );
}
