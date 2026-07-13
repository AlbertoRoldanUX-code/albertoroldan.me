"use client";

import { useLocale } from "@/components/site/locale-provider";
import { getUi } from "@/lib/i18n/content";

export function PrintButton() {
  const locale = useLocale();
  const ui = getUi(locale);

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="font-sans text-sm text-[#6b6b6b] underline-offset-2 hover:underline"
    >
      {ui.guide.print}
    </button>
  );
}
