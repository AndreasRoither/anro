export interface Article {
  title: string;
  desk: string;
  author?: string;
  paragraphs: string[];
  linkText: string;
}

export interface Classified {
  category: string;
  body: string;
}

export interface PullQuote {
  text: string;
  attribution: string;
}

export const time = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const leadArticle: Article = {
  title: "From Autocomplete to Auto-Disaster",
  desk: "Opinion",
  author: "By the Editor",
  paragraphs: [
    `I am currently experimenting a lot with AI coding and vibe coding in general. I am kinda astonished how far it has gotten and how much easier it is to write boilerplate code. Tasks that took me an hour are now finished in 5 minutes. That is a crazy amount of time saved, one would think.`,
    `But when I take a step back and look at it, my feelings change. The diffs in between me accepting answer all looked pretty good and yet the end results is a hot mess. My tech debt regularly increases by leaps and bounds with no end in sight. Even with prompts reduce the tech debt and prompts for better coding quality only help superficially. What was a good and helpful tool in the beginning begins to struggle as soon as the project has more than 50 files. Architecture that you carefully prepare is often ignored and completely circumvented for a quick fix or implementation. Even a planning mode never catches most obvious edge cases. Turns out you don't need bad architecture to get bad architecture vibe coded.`,
    `I am re-thinking my approach in working with AI in general and in what manner I should use it. A localized approach is probably the way to go for a simple feature.`,
  ],
  linkText: "Read more",
};

export const articles: Article[] = [
  {
    title: "Angular 21 Is Actually Exciting",
    desk: "Technical Desk",
    paragraphs: [
      `Angular 21 dropped last year and there's some really nice stuff in here. New projects are now zoneless by default,
      meaning no more zone.js overhead slowing things down. And Signal Forms landed finally, though it's still experimental.
      If you've ever fought with reactive forms and all the valueChanges boilerplate, this feels like a breath of fresh air.
      Form state lives in signals, it's type-safe, and validation is way more straightforward.`,
      `On the tooling side, Vitest replaces Karma as the default test runner which is a long overdue upgrade.
      There's also an MCP server built into the CLI that lets your AI tools actually understand modern Angular patterns, and a new Angular Aria library for building accessible components. Solid release all around.`,
    ],
    linkText: "",
  },
  {
    title: "Why I Do All My Git in the Terminal",
    desk: "Technology",
    paragraphs: [
      `I know GUI git clients work fine for a lot of people (IntelliJ, VSCode), but for me the terminal just clicks.
      It's minimal, it's predictable, and once you set up a few aliases you fly through your workflow without thinking.
      'gs' for status, 'gc' for commit; it's muscle memory at this point. No loading panels, no hunting through menus.
      Just me and my keystrokes and a clean diff. There's something nice about that simplicity.`,
      `If you want a little more visual context without leaving the terminal, lazygit is worth checking out.
      It's a TUI, basically a lightweight interactive interface that lives right in your terminal.
      You can stage individual hunks, browse branches, squash commits, and even handle merge conflicts, all with quick keyboard shortcuts.`,
    ],
    linkText: "",
  },
  {
    title: "Why Every Developer Needs a Matcha",
    desk: "Culture & Matcha",
    paragraphs: [
      `In an age of energy drinks that taste like battery acid and coffee that turns your stomach into a war zone by 2pm, matcha just sits there looking at me all calm and green.
      It doesn't promise you the moon. It just quietly gives you four hours of focus without the jitters, the crash, or the existential dread of your third espresso.`,
      `There's something nice about whisking a bowl of Japanese tea before you open VS Code or Zed and argue with a linter.
      Matcha doesn't slap you awake, it gently holds your hand and says "let's write some clean code today."
      Honestly, every developer deserves that energy.`,
    ],
    linkText: "",
  },
];

export const pullQuote: PullQuote = {
  text: "Give me matcha and I will program anything without asking questions.",
  attribution: "me, probably",
};

export const classifieds: Classified[] = [
  {
    category: "HELP WANTED",
    body: `Seeking rubber ducky with minimum 5 years experience in active listening and non-judgmental silence.
    Must be comfortable with long debugging sessions and occasional existential crises.`,
  },
  {
    category: "SERVICES",
    body: `Professional <code>node_modules</code> folder deletion service.
    We come to your machine and free up 50 GB of disk space. Same-day service available. Ask about our "rm -rf" premium package.`,
  },
  {
    category: "ANNOUNCEMENT",
    body: `The Matcha Times regrets to inform readers that last week's article
    "10 Easy Steps to Deploy on Friday" was published in error. There are no easy steps to deploy on Friday.
    We apologize for any outages caused.`,
  },
];
