import type { ConsultingContentData } from "../consulting-types";

export const consultingContent = {
  eyebrow: "1:1 Consulting",
  title: "Build a LinkedIn system that creates conversations with clients.",
  subtitle:
    "If you post inconsistently, don't know what to write, or your posts never lead to conversations, this consulting helps you build a system you can sustain for years.",
  heroCta: "Request a conversation",
  forWhom: {
    title: "Who this is for",
    intro:
      "This consulting is for people already building something of their own who need a clear acquisition channel.",
    items: [
      "Freelancers and founders who want clients without relying only on word of mouth",
      "Independent professionals who post occasionally and see little return",
      "Anyone who knows LinkedIn matters but still lacks a system they can sustain",
    ],
  },
  includes: {
    title: "What we work on",
    intro:
      "We don't just optimize your profile. We build a complete system: positioning, content creation, distribution, conversations, and follow-up so LinkedIn stops depending on inspiration.",
    items: [
      {
        title: "Positioning and profile",
        description:
          "What you offer, to whom, and how your profile reads in ten seconds. Headline, About, and social proof that sell without sounding like a template.",
      },
      {
        title: "Content creation and distribution",
        description:
          "What to publish, how often, and how to reuse ideas. A system you can run even when you don't feel inspired that day.",
      },
      {
        title: "Conversations and follow-up",
        description:
          "Connections, comments, and messages that open doors without feeling like spam. Content attracts; conversation closes.",
      },
      {
        title: "A plan you can sustain",
        description:
          "You leave with concrete priorities and a realistic rhythm: what to do first, what to measure, and what to ignore.",
      },
    ],
  },
  process: {
    title: "How it works",
    intro:
      "If I don't believe I can help you, I'll tell you — and I won't propose that we work together.",
    steps: [
      {
        label: "01",
        title: "You write",
        description:
          "Tell me in a few lines what you're building, who you want to reach, and where you're stuck.",
      },
      {
        label: "02",
        title: "We check fit",
        description:
          "I read your message and tell you clearly whether it makes sense or not. No pressure, no forced proposals.",
      },
      {
        label: "03",
        title: "We work",
        description:
          "A 1:1 session (or a short engagement) focused on your system: profile, content, conversations, and follow-up.",
      },
    ],
  },
  whyMe: {
    title: "Why work with me?",
    photo: "/images/avatar.png",
    photoAlt: "Alberto Roldán",
    paragraphs: [
      "While building VivaSpeak, I closed clients without a massive audience. I did it with clear messages, real conversations, and a sustainable system.",
      "I write every week about work, money, and freedom, and I use LinkedIn to attract real opportunities into my businesses. Everything I teach is something I use myself.",
      "I don't sell miracle formulas. I help you build a system that fits your business and that you can maintain for years.",
    ],
    credentialsIntro:
      "My experience comes from building and selling, not just talking about it.",
    credentials: [
      "I worked as a software developer before focusing on building my own businesses.",
      "I founded VivaSpeak, a sales automation product.",
      "I've closed clients for my own businesses using LinkedIn as the main acquisition channel, without relying on ads.",
    ],
  },
  outcome:
    "When we're done, you'll have a clearer profile, a content system tailored to your business, and a concrete plan to generate conversations with clients consistently.",
  closing: {
    title: "Turn LinkedIn into an acquisition system, not a lottery.",
    body: "Write to me and we'll see if it makes sense to work together. If I believe I can help you, I'll propose next steps. If not, I'll tell you that too.",
    cta: "Email Alberto",
    note: "I reply personally at alberto@iberiancaucasus.com",
  },
  emailSubject: "LinkedIn Consulting",
  metadata: {
    title: "Consulting",
    description:
      "1:1 consulting for freelancers and founders who want to turn LinkedIn into a predictable acquisition channel: content system, conversations, and follow-up.",
  },
} satisfies ConsultingContentData;
