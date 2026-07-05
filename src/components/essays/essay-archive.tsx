"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Essay } from "@/data/essays";
import {
  ESSAYS_PER_PAGE,
  allEssays,
  essayCategories,
} from "@/data/essays";
import { cn } from "@/lib/utils";

type ViewMode = "recent" | "topic";

function EssayCard({ essay }: { essay: Essay }) {
  const href = essay.href ?? "/essays";

  return (
    <article className="group border-b border-border/60 py-8 md:py-10">
      <Link href={href} className="block">
        <div className="flex items-center gap-2">
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {essay.category}
          </p>
          {essay.isNew && (
            <span className="rounded-sm bg-primary px-1.5 py-0.5 font-sans text-[10px] font-medium tracking-wide text-primary-foreground uppercase">
              Nuevo
            </span>
          )}
        </div>

        <h2 className="mt-3 font-serif text-[1.65rem] leading-tight tracking-[-0.02em] transition-colors group-hover:text-foreground/80 md:text-[1.85rem]">
          {essay.title}
        </h2>

        <p className="mt-3 max-w-[36rem] font-sans text-[15px] leading-relaxed text-muted-foreground md:text-base">
          {essay.description}
        </p>

        <p className="mt-4 font-sans text-xs text-muted-foreground/80 md:text-[13px]">
          N.º {essay.issue}
          <span className="mx-2">·</span>
          {essay.date}
          <span className="mx-2">·</span>
          {essay.readTime} de lectura
        </p>
      </Link>
    </article>
  );
}

function TopicView() {
  const grouped = useMemo(() => {
    const map = new Map<string, Essay[]>();
    for (const category of essayCategories) {
      map.set(
        category,
        allEssays.filter((e) => e.category === category),
      );
    }
    return map;
  }, []);

  return (
    <div className="space-y-12">
      {essayCategories.map((category) => {
        const essays = grouped.get(category) ?? [];
        if (essays.length === 0) return null;

        return (
          <div key={category}>
            <h2 className="font-sans text-[11px] font-semibold tracking-[0.25em] text-foreground uppercase">
              {category}
            </h2>
            <div className="mt-4">
              {essays.map((essay) => (
                <EssayCard key={essay.issue} essay={essay} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RecentView() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allEssays.length / ESSAYS_PER_PAGE);
  const start = (page - 1) * ESSAYS_PER_PAGE;
  const pageEssays = allEssays.slice(start, start + ESSAYS_PER_PAGE);

  return (
    <>
      <div>
        {pageEssays.map((essay) => (
          <EssayCard key={essay.issue} essay={essay} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="mt-10 flex items-center justify-between border-t border-border/60 pt-8">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="font-serif text-sm text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-30 md:text-base"
          >
            ← Anterior
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setPage(pageNum)}
                  className={cn(
                    "flex size-8 items-center justify-center font-sans text-sm transition-colors",
                    pageNum === page
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {pageNum}
                </button>
              ),
            )}
          </div>

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="font-serif text-sm text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-30 md:text-base"
          >
            Siguiente →
          </button>
        </nav>
      )}
    </>
  );
}

export function EssayArchive() {
  const [view, setView] = useState<ViewMode>("recent");

  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-[42rem]">
        <h1 className="font-serif text-[2.25rem] leading-tight tracking-[-0.02em] md:text-[2.75rem]">
          Ensayos
        </h1>

        <div className="mt-8 flex gap-6 border-b border-border/60">
          <button
            type="button"
            onClick={() => setView("recent")}
            className={cn(
              "pb-3 font-sans text-sm transition-colors md:text-[15px]",
              view === "recent"
                ? "border-b-2 border-foreground font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Más recientes
          </button>
          <button
            type="button"
            onClick={() => setView("topic")}
            className={cn(
              "pb-3 font-sans text-sm transition-colors md:text-[15px]",
              view === "topic"
                ? "border-b-2 border-foreground font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Por tema
          </button>
        </div>

        <div className="mt-2">
          {view === "recent" ? <RecentView /> : <TopicView />}
        </div>
      </div>
    </section>
  );
}
