"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getSurveyComplete, getSurveyQuestions, getUi } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

interface OnboardingSurveyProps {
  locale?: Locale;
}

export function OnboardingSurvey({ locale = "es" }: OnboardingSurveyProps) {
  const surveyQuestions = getSurveyQuestions(locale);
  const surveyComplete = getSurveyComplete(locale);
  const ui = getUi(locale);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const total = surveyQuestions.length;
  const current = surveyQuestions[step];

  async function handleAnswer(optionId: string) {
    if (!current) return;

    const nextAnswers = { ...answers, [current.id]: optionId };
    setAnswers(nextAnswers);

    if (step < total - 1) {
      setStep((value) => value + 1);
      return;
    }

    setDone(true);

    try {
      await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: nextAnswers }),
      });
    } catch {
      // Local UX should not fail if persistence is unavailable.
    }
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex gap-1.5" aria-hidden="true">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-300",
              done || index <= step ? "bg-foreground" : "bg-border",
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="complete"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {surveyComplete.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance md:text-[2.15rem]">
              {surveyComplete.headline}
            </h2>
            <p className="mt-5 max-w-[28rem] font-serif text-[1.05rem] leading-[1.7] text-foreground/85">
              {surveyComplete.body}
            </p>
          </motion.div>
        ) : current ? (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {ui.survey.questionOf(step, total)}
            </p>
            <h2 className="mt-4 font-serif text-[1.65rem] leading-snug tracking-tight text-balance md:text-[1.85rem]">
              {current.question}
            </h2>

            <div className="mt-8 flex flex-col gap-3">
              {current.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleAnswer(option.id)}
                  className="rounded-xl border border-border bg-card px-5 py-4 text-left font-sans text-[15px] text-foreground transition-colors hover:border-foreground/25 hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-[0.99]"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
