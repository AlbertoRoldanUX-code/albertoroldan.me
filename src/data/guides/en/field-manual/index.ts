import type { Guide } from "@/types/guide";
import { fieldManualCapacities } from "./capacities";

export const fieldManualGuide: Guide = {
  slug: "field-manual",
  cover: {
    eyebrow: "A guide by Alberto Roldán.",
    title:
      "The 7 capabilities school never taught you to build something of your own",
    subtitle:
      "What I learned going from manual jobs to self-taught programmer and business builder from Georgia",
    author: "Alberto Roldán",
    website: "albertoroldan.me",
  },
  introduction: {
    title:
      "The 7 capabilities school never taught you to build something of your own",
    subtitle:
      "What I learned going from manual jobs to self-taught programmer and business builder from Georgia",
    byline: "Alberto Roldán",
    sections: [
      {
        heading: "Before you read this guide",
        paragraphs: [
          "I'm not writing this from the top. I'm writing it from the road.",
          "I left university because I felt I wasn't learning anything useful for the life I wanted to build. After that I lived and worked in Brussels, Hong Kong, Germany, Switzerland, Argentina, and Spain. I was a volunteer, language teacher, cook, solar panel installer, rebar worker, mail carrier, and delivery rider.",
          "Later I studied UX design, taught myself programming, and ended up working as a developer. I founded an AI automation product, got clients, and eventually shut it down. Then I sold my apartment in Málaga and moved to Tbilisi to start over.",
          "None of that followed a perfect plan.",
          "In fact, almost everything important I've learned came from moving before I felt ready: losing a job, changing countries, learning a new skill, publishing before having an audience, selling Georgian wine before having the logistics sorted. That's how I discovered, with real data, what worked and what didn't.",
          "That's why this guide isn't about copying my steps.",
          "My steps can't be copied. Your circumstances will be different. Your country will be different. Your market will be different. Your timing will be different.",
          "What you can develop are the capabilities that keep showing up when you work for yourself: move fast, read real signals, create assets, design your life before your business, and make decisions without waiting for permission.",
          "This guide covers seven capabilities I've been forced to develop. Each one has the same structure: what it is, what it cost me, what it looked like when I developed it, what it costs you if you never develop it, what it looks like in practice, the common mistake, and a concrete exercise.",
          "You don't need to read it as a fixed plan. Read it as a field manual.",
          "At the end you won't have a formula. You'll have something more useful: judgment.",
        ],
      },
    ],
  },
  capacities: fieldManualCapacities,
  closing: {
    title: "What this all adds up to, really",
    paragraphs: [
      "These seven capabilities don't show up in a clean sequence. They develop together, reinforce each other, and sometimes contradict each other.",
      "My path wasn't a straight line. I went through manual jobs, several countries, design, programming, sales, and businesses that worked for a while and then stopped working.",
      "None of those steps can be copied exactly, but the capabilities I developed can be trained.",
      "You don't need a complete map. You need to learn to move, observe, and correct as you go.",
    ],
  },
  author: {
    name: "Alberto Roldán",
    website: "albertoroldan.me",
    bio: [
      "Alberto Roldán builds businesses from Tbilisi, Georgia. He went from manual jobs to self-taught programmer, founded and shut down an AI product, and now exports Georgian wine to Europe. He writes every week about what he learns along the way.",
    ],
  },
  invitation: {
    title: "So now what?",
    paragraphs: [
      "Don't let this guide sit in a folder on your computer.",
      "Start with one capacity: the one that makes you most uncomfortable.",
      "Every week I share what I'm learning while building businesses from Georgia.",
    ],
  },
};
