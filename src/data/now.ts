export interface NowItem {
  text: string;
}

export interface NowSection {
  title: string;
  items: NowItem[];
}

export const lastUpdated_Now = "15 February 2026";

export const sections: NowSection[] = [
  {
    title: "Currently working on",
    items: [
      {
        text: "Building and refining <strong>anro.dev</strong>, this very site, matcha by matcha",
      },
      {
        text: 'Writing long-form posts for <a href="https://blog.anro.dev" class="text-(--anro-accent) underline decoration-1 underline-offset-2 transition-colors duration-150 hover:text-(--anro-accent-light)">blog.anro.dev</a>',
      },
      { text: "Exploring Rust for CLI tooling" },
      { text: "Learning about SolidJs" },
      { text: "Learning Japanese as a complete beginner" },
    ],
  },
  {
    title: "Currently reading",
    items: [
      { text: "<em>Salt Fat Acid Heat</em> by Samin Nosrat" },
      { text: "Genki 1, my Japanese workbook" },
    ],
  },
  {
    title: "Currently brewing",
    items: [
      {
        text: "Morning: Yuzu Kukicha, I love the taste of yuzu and this green tea is nicely refreshing :)",
      },
      { text: "Evening: Hojicha for evening wind-down" },
    ],
  },
  {
    title: "Currently listening to",
    items: [
      { text: "Lo-fi beats for coding sessions" },
      {
        text: "Japanese jazz with city pop sprinkled in; Ryo Fukui, Chihiro Yamanaka, Masayoshi Takanaka",
      },
      { text: "The sound of rain while working in a terminal window" },
    ],
  },
];
