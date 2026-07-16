"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyFieldProps {
  label: string;
  value: string;
  copyLabel: string;
  copiedLabel: string;
  mono?: boolean;
}

export function CopyField({
  label,
  value,
  copyLabel,
  copiedLabel,
  mono = false,
}: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex items-start justify-between gap-3 border-b border-border/50 py-3 last:border-b-0">
      <div className="min-w-0">
        <p className="font-sans text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </p>
        <p
          className={cn(
            "mt-1 break-all text-foreground",
            mono ? "font-mono text-sm" : "font-serif text-base md:text-lg",
          )}
        >
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-md border border-border/60 px-2.5 py-1.5 font-sans text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
