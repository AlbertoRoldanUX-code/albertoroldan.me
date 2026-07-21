"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface ContactFormCopy {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  loading: string;
  success: string;
  error: string;
}

interface ContactFormProps {
  copy: ContactFormCopy;
  className?: string;
}

export function ContactForm({ copy, className }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website: honeypot,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(result.message ?? copy.error);
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setHoneypot("");
    } catch {
      setStatus("error");
      setErrorMessage(copy.error);
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-2xl border border-border bg-card px-6 py-8 text-center font-sans text-[15px] leading-relaxed text-foreground md:text-base"
      >
        {copy.success}
      </p>
    );
  }

  const fieldClass =
    "h-12 w-full rounded-full px-5 text-[15px] shadow-none";
  const textareaClass = cn(
    "flex min-h-[9.5rem] w-full resize-y rounded-2xl border border-input bg-card px-5 py-3.5 text-[15px] text-foreground shadow-none transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full flex-col gap-5", className)}
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {copy.nameLabel}
          </span>
          <Input
            type="text"
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            placeholder={copy.namePlaceholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={status === "loading"}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {copy.emailLabel}
          </span>
          <Input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === "loading"}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {copy.messageLabel}
        </span>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder={copy.messagePlaceholder}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={status === "loading"}
          className={textareaClass}
        />
      </label>

      {/* Honeypot — hidden from users */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          aria-busy={status === "loading"}
          className="h-12 shrink-0 rounded-full px-7 text-[15px] font-medium"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              {copy.loading}
            </>
          ) : (
            copy.submit
          )}
        </Button>

        {status === "error" ? (
          <p className="font-sans text-sm text-destructive" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
