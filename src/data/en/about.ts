import type { WritingBenefit } from "@/data/about";

export const aboutContent = {
  greeting: "Hi, I'm Alberto Roldán.",
  avatar: "/images/avatar.jpg",
  signature: "Alberto Roldán",
  intro: [
    "I build businesses from Georgia and write every week about what I learn along the way — without permission, without a perfect moment, and without a map.",
    "I left university because I wasn't learning things useful for real life. I volunteered in Brussels, taught languages in Hong Kong, and worked in public relations and as a film extra. Then I went through Germany and Switzerland: kitchens, construction sites, solar panels, deliveries.",
    "I worked as a cook, rebar worker, mail carrier, delivery driver, and teacher before learning programming on my own. Later I sold my apartment in Málaga to start over in Tbilisi.",
    "None of that followed a perfect plan. Almost everything important I've learned came from moving before I felt ready: changing countries, learning a new skill, publishing before having an audience.",
    "Today I write for those who want to build a freer life without waiting for the ideal moment. Every Saturday I share a practical idea I wish I'd learned ten years earlier. If that resonates, I invite you to join.",
  ],
  writingHelp: {
    title: "How my writing will help you",
    intro:
      "Every Saturday morning you'll receive an essay about one of these things:",
    benefits: [
      {
        before: "",
        highlight: "What you actually want",
        after: ", not just what you were taught to want.",
      },
      {
        before: "Your ",
        highlight: "mindset",
        after: ", and the assumptions you've never bothered to question.",
      },
      {
        before: "How to gain more ",
        highlight: "freedom",
        after: " in your life without throwing everything away.",
      },
      {
        before: "Which ",
        highlight: "decisions",
        after: " are worth it, and which cost too much.",
      },
      {
        before: "How to design ",
        highlight: "an independent career",
        after: " with meaning without getting trapped by it.",
      },
    ] satisfies WritingBenefit[],
    outro:
      "I write because no one told me this way when I started. And because the capacities you build when working for yourself aren't taught anywhere.",
  },
};
