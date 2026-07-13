import type { GuideCapacity } from "@/types/guide";
import { fieldManualCapacitiesPart2 } from "./capacities-part2";

const capacities1to3: GuideCapacity[] = [
  {
    number: 1,
    title: "Move before you feel ready",
    subsections: [
      {
        heading: "What it is",
        paragraphs: [
          "The capacity to act before everything is figured out, and to use action as a way of learning, not as a reward for having already learned.",
          "Most people wait for permission, the degree, the finished course, the perfect portfolio. I did the opposite: I got into programming because many UX job posts asked for HTML and CSS, without waiting to master those technologies. I learned by doing. That isn't bravery. It's the only way I know to find out whether something is worth your time.",
          "Moving before you feel ready doesn't mean being reckless. It means making the cost of being wrong as small as possible. Stop asking \"Am I ready?\" and start asking \"How do I find out in 48 hours?\"",
        ],
      },
      {
        heading: "What it cost me not to have it at first",
        paragraphs: [
          "For a long time I waited for external signals. The diploma. The promotion. Validation from someone with more experience.",
          "When I was laid off from a developer role, I read it as a verdict on my worth, instead of as data about fit. I lost months looking for the next correct label instead of trying something small.",
          "In Switzerland I had already done the hardest thing I've done in my life: rebar work. The hardest part wasn't just the body. It was the disrespect. But I also learned I could enter a market without being \"ready.\"",
          "I lost months preparing to move instead of moving. Reading about programming instead of writing bad code. The cost wasn't just time. It was the information I never got because I never launched anything.",
        ],
      },
      {
        heading: "What it looked like when I developed it",
        paragraphs: [
          "My first month in Switzerland wasn't as a consultant. It was as a rebar worker. Then fast food, a Mexican restaurant that fired me, seasonal construction work, mail delivery, and bike and motorcycle delivery. None of that was in any plan. All of it taught me that permission comes after, not before.",
          "When I got into programming, I didn't wait to master a full stack of technologies. I opened an editor and started building broken things. I learned by doing, not by waiting for the perfect credential.",
          "With Georgian wine I didn't set up a perfect operation. I published, contacted clients in Spain, placed a test order. And the boxes arrived broken. That's data too: there can be interest and still logistics can destroy the margin if you don't design for it.",
          "I posted on LinkedIn before I had a polished product. Publishing was the test.",
        ],
      },
      {
        heading: "What it costs you if you never develop it",
        paragraphs: [
          "You spend years preparing to try something. You take courses, design the brand, plan the launch, and never test whether anyone wants what you're building.",
          "I know people who have spent eighteen months \"working on their project.\" They have a beautiful website and zero clients. They've done everything except the one thing that matters: show it to a real person and ask them to pay or react.",
          "The cost isn't just your time. It's the false certainty that you're \"almost ready.\" Almost never arrives.",
        ],
      },
      {
        heading: "What it looks like in practice",
        paragraphs: [
          "Someone with this capacity has an idea on Monday and by Friday has a rough version in front of real people. They expect it to be crude. They're looking for signal, not applause.",
          "Someone without it has an idea on Monday, spends three months building the perfect version, and when they launch they're exhausted, too emotionally invested, and crushed if it doesn't work immediately. Or they never launch.",
        ],
      },
      {
        heading: "The common mistake",
        paragraphs: [
          "Confusing preparation with action. Taking a course on how to launch a business, reading three books on validation, and mapping the entire funnel before you have a single piece of real data. None of that is moving. Moving is putting something real in front of real people and seeing what happens.",
        ],
      },
      {
        heading: "The exercise",
        intro: "What you're going to do: Launch a real test in 48 hours.",
        steps: [
          {
            label: "Step 1:",
            text: "Write down an idea you've been putting off for weeks (or months). If you have several, pick the one that scares you most.",
          },
          {
            label: "Step 2:",
            text: "Define the roughest possible version. A LinkedIn post asking if they'd pay for X. A one-page PDF. A simple page with a booking button. Don't spend money. Limit: 48 hours.",
          },
          {
            label: "Step 3:",
            text: "Launch it. Put it in front of at least 10 real people. Direct messages, a public post, email to contacts. Look for honest reactions, not friend support.",
          },
          {
            label: "Step 4:",
            text: "Document what happened. Numbers, questions, objections, enthusiasm. Three things you learned that you wouldn't have learned by planning.",
          },
        ],
        outcome:
          "You have real data from real people. You'll probably feel uncomfortable with how unpolished it turned out. That means you launched instead of perfecting.",
      },
    ],
  },
  {
    number: 2,
    title: "Validate with data, not opinions",
    subsections: [
      {
        heading: "What it is",
        paragraphs: [
          "The capacity to interpret what the market is actually telling you: sales, messages, buying questions. Not what you'd like it to say.",
          "Opinions are cheap. \"I love the idea\" doesn't pay bills. A direct message asking about the price does. A sale does. A customer who comes back does.",
          "Validating with data is paying attention to what people do, not what they say they'll do.",
        ],
      },
      {
        heading: "What it cost me not to have it at first",
        paragraphs: [
          "When I started with Georgian wine, I heard a lot of enthusiasm. Friends saying \"what a great idea.\" But enthusiasm didn't warn me the boxes would arrive broken. Refunds and complaints did.",
          "On LinkedIn, my posts about topics I found interesting got likes. Posts about specific problems people wanted solved got direct messages and sales. For months I paid more attention to the likes.",
          "I ignored real signals because they didn't fit my plan. I wanted to be \"the UX guy\" or \"the tech guy.\" The market was asking for something else. Every week I ignored that was a week lost.",
        ],
      },
      {
        heading: "What it looked like when I developed it",
        paragraphs: [
          "With Georgian wine I stopped asking \"Do you like it?\" and started measuring: Do they reply? Do they ask for prices? Do they buy? A test order with boxes broken in transit was brutal data about logistics, not about the product.",
          "With the tours I published the offer and sent emails before setting up the full operation. Almost nobody replied. That was a signal too, and it saved me months building something nobody was asking for.",
          "With an AI product I sold for a year, I learned the difference between \"interesting demo\" and \"paying customer who sticks around.\" Some paid for a few months. Other months of conversation led nowhere. The data said something I didn't want to hear: long cycle, low average ticket, market with little differentiation.",
          "The rule I use now: publish before you build. If nobody reacts to the post, I don't build the whole product.",
        ],
      },
      {
        heading: "What it costs you if you never develop it",
        paragraphs: [
          "You build things nobody wants and wonder why they don't work. You work harder: more features, more content, more ads. Without addressing the core problem: you're solving the wrong thing.",
          "Worse: you build something that works just enough to keep you afloat but never takes off, because it's slightly misaligned with what the market wants and you never get close enough to the signal to correct course.",
        ],
      },
      {
        heading: "What it looks like in practice",
        paragraphs: [
          "Someone with this capacity reads their data with curiosity, not confirmation bias. They notice when something performs differently than expected and ask why. They make decisions based on what works, even if it breaks their plan.",
          "Someone without it doubles down on the plan, explains away poor performance, ignores messages that don't fit, and keeps pushing toward the product they want to build instead of the one the market is asking for.",
        ],
      },
      {
        heading: "The common mistake",
        paragraphs: [
          "Confusing vanity signals with real signals. Likes and followers matter, but they're weaker than revenue and direct messages. In a business, the strongest signal is usually that someone pays, repeats, or recommends the product. The second is a \"buying question\": someone who bothers to ask you about price, timelines, or availability.",
        ],
      },
      {
        heading: "The exercise",
        intro: "What you're going to do: A signal audit followed by a decision.",
        steps: [
          {
            label: "Step 1:",
            text: "Gather data from the last 90 days: engagement, sales, direct messages, emails, customer questions, refunds. Write it down without filtering.",
          },
          {
            label: "Step 2:",
            text: "Answer in writing: What content outperforms the rest? What do people message you about most? What sells with the least effort? What are you investing time in with no response? What topic are you avoiding because it doesn't fit your plan?",
          },
          {
            label: "Step 3:",
            text: "Identify the clearest signal you've been ignoring. Not the one you want. The one you're getting.",
          },
          {
            label: "Step 4:",
            text: "Make a decision based on that signal. Write it down and commit.",
          },
        ],
        outcome:
          "You've identified something you were ignoring that the market says matters. The decision may feel uncomfortable because it contradicts the plan you had. What matters is that it's backed by real signals.",
      },
    ],
  },
  {
    number: 3,
    title: "Build skills nobody can take from you",
    subsections: [
      {
        heading: "What it is",
        paragraphs: [
          "The capacity to invest in competencies that belong to you, that don't depend on an employer, a visa, an algorithm, or a specific market.",
          "When I was laid off, what I kept wasn't the role. It was the skills: solving problems, communicating, learning under pressure. Nobody took those from me.",
          "Transferable skills are one of the few assets that cross borders with you.",
        ],
      },
      {
        heading: "What it cost me not to have it at first",
        paragraphs: [
          "For years I optimized for titles and companies, not for capabilities. I wanted to be at the right company instead of being the right person.",
          "When I was fired from the developer role, I realized I had built on something fragile: other people's approval. I hadn't invested enough in what was mine.",
        ],
      },
      {
        heading: "What it looked like when I developed it",
        paragraphs: [
          "I got into programming because many UX job posts asked for HTML and CSS. Nobody gave me permission. I did it because I needed another option when the job disappeared.",
          "I developed my sales skills by doing real demos and proposals, and working with clients who paid and then left. I learned to write by publishing every week. The languages I speak I didn't study in the abstract: I needed them to work, sell, and live.",
        ],
      },
      {
        heading: "What it costs you if you never develop it",
        paragraphs: [
          "You depend on structures that can disappear tomorrow. A layoff, a visa change, a restructuring. And your professional identity wobbles.",
          "You don't accumulate anything that follows you when you change context. Every transition starts from zero.",
        ],
      },
      {
        heading: "What it looks like in practice",
        paragraphs: [
          "Someone with this capacity spends time every week improving something that belongs to them: writing, selling, programming, learning a language, understanding a new market.",
          "Someone without it only optimizes for the current job. When that job disappears, they have no net.",
        ],
      },
      {
        heading: "The common mistake",
        paragraphs: [
          "Confusing credentials with skills. A degree is not the same as knowing how to do something. A job title is not the same as being able to repeat the result in another context.",
        ],
      },
      {
        heading: "The exercise",
        intro:
          "What you're going to do: Map your transferable skills and choose one to develop.",
        steps: [
          {
            label: "Step 1:",
            text: "List everything you know how to do that doesn't depend on your current employer: technical skills, soft skills, languages, international experience.",
          },
          {
            label: "Step 2:",
            text: "Mark which ones have generated real income or opportunities, not which ones sound good on a CV.",
          },
          {
            label: "Step 3:",
            text: "Choose one skill to develop over the next two weeks. Something concrete: publish three times, finish a code project, make ten sales calls.",
          },
          {
            label: "Step 4:",
            text: "At the end of the two weeks, document what changed. New opportunities? More confidence? Data?",
          },
        ],
        outcome:
          "You have a clear map of what belongs to you and an active plan to strengthen it.",
      },
    ],
  },
];

export const fieldManualCapacities: GuideCapacity[] = [
  ...capacities1to3,
  ...fieldManualCapacitiesPart2,
];
