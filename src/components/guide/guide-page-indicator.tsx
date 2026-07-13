"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/site/locale-provider";
import { getUi } from "@/lib/i18n/content";

/** Área útil de una página carta (11in − márgenes) escalada al ancho del documento. */
function getContentPageHeight(articleWidth: number): number {
  return articleWidth * (9.5 / 8.5);
}

function countGuidePages(article: HTMLElement): number {
  const pageHeight = getContentPageHeight(article.getBoundingClientRect().width);
  const blocks = article.querySelectorAll(".guide-cover-page, .guide-page");

  if (blocks.length === 0) {
    return Math.max(1, Math.ceil(article.scrollHeight / pageHeight));
  }

  let total = 0;
  blocks.forEach((block) => {
    const el = block as HTMLElement;
    total += Math.max(1, Math.ceil(el.offsetHeight / pageHeight));
  });
  return total;
}

function getScrollPage(article: HTMLElement, totalPages: number): number {
  const pageHeight = getContentPageHeight(article.getBoundingClientRect().width);
  const articleTop =
    article.getBoundingClientRect().top + window.scrollY;
  const viewportAnchor = window.scrollY + window.innerHeight * 0.35;
  const relative = Math.max(0, viewportAnchor - articleTop);

  const blocks = article.querySelectorAll(".guide-cover-page, .guide-page");
  let page = 1;
  let consumed = 0;

  for (const block of blocks) {
    const el = block as HTMLElement;
    const blockPages = Math.max(1, Math.ceil(el.offsetHeight / pageHeight));

    for (let i = 0; i < blockPages; i++) {
      consumed += pageHeight;
      if (relative < consumed) {
        return Math.min(page, totalPages);
      }
      page++;
    }
  }

  return totalPages;
}

function useGuidePages() {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const article = document.querySelector(".guide-document") as HTMLElement | null;
    if (!article) return;

    const update = () => {
      const pages = countGuidePages(article);
      const page = getScrollPage(article, pages);
      setTotal(pages);
      setCurrent(page);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const observer = new ResizeObserver(update);
    observer.observe(article);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return { current, total };
}

export function GuidePageCount() {
  const { total } = useGuidePages();
  const locale = useLocale();
  const ui = getUi(locale);

  return (
    <span className="font-sans text-sm text-[#6b6b6b]">
      {total} {ui.guide.pages}
    </span>
  );
}

export function GuidePageIndicator() {
  const { current, total } = useGuidePages();
  const locale = useLocale();
  const ui = getUi(locale);

  return (
    <div className="no-print fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[#e8e6e1] bg-[#faf9f6]/95 px-4 py-2 font-sans text-xs text-[#6b6b6b] shadow-sm backdrop-blur-sm">
      {ui.guide.pageOf(current, total)}
    </div>
  );
}
