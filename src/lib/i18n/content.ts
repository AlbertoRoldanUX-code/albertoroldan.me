import { aboutContent as aboutContentEs } from "@/data/about";
import { consultingContent as consultingContentEs } from "@/data/consulting";
import { siteConfig as siteConfigEs, featuredGuide as featuredGuideEs, aboutPreview as aboutPreviewEs, footerCta as footerCtaEs } from "@/data/home";
import { guides as guidesEs } from "@/data/resources";
import { thankYouContent as thankYouContentEs, surveyQuestions as surveyQuestionsEs, surveyComplete as surveyCompleteEs } from "@/data/thank-you";
import { ui as uiEs } from "@/data/ui";
import { aboutContent as aboutContentEn } from "@/data/en/about";
import { consultingContent as consultingContentEn } from "@/data/en/consulting";
import { siteConfig as siteConfigEn, featuredGuide as featuredGuideEn, aboutPreview as aboutPreviewEn, footerCta as footerCtaEn } from "@/data/en/home";
import { guides as guidesEn } from "@/data/en/resources";
import { thankYouContent as thankYouContentEn, surveyQuestions as surveyQuestionsEn, surveyComplete as surveyCompleteEn } from "@/data/en/thank-you";
import { ui as uiEn } from "@/data/en/ui";
import type { Locale } from "./config";

function pick<T>(locale: Locale, es: T, en: T): T {
  return locale === "en" ? en : es;
}

export function getSiteConfig(locale: Locale) {
  return pick(locale, siteConfigEs, siteConfigEn);
}

export function getFeaturedGuide(locale: Locale) {
  return pick(locale, featuredGuideEs, featuredGuideEn);
}

export function getAboutPreview(locale: Locale) {
  return pick(locale, aboutPreviewEs, aboutPreviewEn);
}

export function getFooterCta(locale: Locale) {
  return pick(locale, footerCtaEs, footerCtaEn);
}

export function getAboutContent(locale: Locale) {
  return pick(locale, aboutContentEs, aboutContentEn);
}

export function getConsultingContent(locale: Locale) {
  return pick(locale, consultingContentEs, consultingContentEn);
}

export function getGuides(locale: Locale) {
  return pick(locale, guidesEs, guidesEn);
}

export function getThankYouContent(locale: Locale) {
  return pick(locale, thankYouContentEs, thankYouContentEn);
}

export function getSurveyQuestions(locale: Locale) {
  return pick(locale, surveyQuestionsEs, surveyQuestionsEn);
}

export function getSurveyComplete(locale: Locale) {
  return pick(locale, surveyCompleteEs, surveyCompleteEn);
}

export function getUi(locale: Locale) {
  return pick(locale, uiEs, uiEn);
}
