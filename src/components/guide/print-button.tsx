"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="font-sans text-sm text-[#6b6b6b] underline-offset-2 hover:underline"
    >
      Imprimir / PDF
    </button>
  );
}
