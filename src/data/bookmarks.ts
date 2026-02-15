export interface Bookmark {
  title: string;
  url: string;
  description: string;
}

export interface BookmarkCategory {
  name: string;
  shape: "circle" | "square" | "triangle" | "diamond";
  color: string;
  darkColor: string;
  bookmarks: Bookmark[];
}

export const categories: BookmarkCategory[] = [
  {
    name: "Dev Tools",
    shape: "circle",
    color: "#e63946",
    darkColor: "#ff4d5a",
    bookmarks: [
      {
        title: "WhatRuns",
        url: "https://www.whatruns.com",
        description:
          "Browser extension that identifies technologies and frameworks powering any website.",
      },
      {
        title: "VS Code Themes",
        url: "https://vscodethemes.com",
        description: "Browse and preview color themes for Visual Studio Code.",
      },
      {
        title: "Free for Developers",
        url: "https://free-for.dev",
        description: "Curated list of free software, SaaS, and PaaS offerings for developers.",
      },
      {
        title: "Public APIs",
        url: "https://github.com/public-apis/public-apis",
        description: "Collective list of free APIs for development and testing.",
      },
      {
        title: "Devhints – React",
        url: "https://devhints.io/react",
        description: "Concise React cheatsheet with hooks, components, and lifecycle references.",
      },
      {
        title: "TypeScript React Cheatsheet",
        url: "https://github.com/typescript-cheatsheets/react",
        description: "Comprehensive cheatsheets for using TypeScript with React.",
      },
      {
        title: "OpenVim",
        url: "https://www.openvim.com",
        description: "Interactive browser-based tutorial for learning Vim.",
      },
    ],
  },
  {
    name: "Articles",
    shape: "square",
    color: "#000000",
    darkColor: "#ffffff",
    bookmarks: [
      {
        title: "Graceful Code Reviews",
        url: "https://betterprogramming.pub/graceful-code-reviews-7ae3eab4a826",
        description: "Guide to conducting thoughtful and constructive code reviews.",
      },
    ],
  },
  {
    name: "Learning",
    shape: "circle",
    color: "#2563eb",
    darkColor: "#60a5fa",
    bookmarks: [
      {
        title: "web.dev – Accessibility",
        url: "https://web.dev/learn/accessibility",
        description: "Google's comprehensive course on building accessible web experiences.",
      },
      {
        title: "System Design Course",
        url: "https://www.karanpratapsingh.com/courses/system-design",
        description: "Free course covering fundamentals of system design and distributed systems.",
      },
      {
        title: "MIT OpenCourseWare",
        url: "https://ocw.mit.edu",
        description: "Free lecture notes, exams, and videos from MIT courses.",
      },
      {
        title: "Free Programming Books",
        url: "https://github.com/EbookFoundation/free-programming-books",
        description: "Massive collection of freely available programming books and resources.",
      },
      {
        title: "Project-Based Learning",
        url: "https://github.com/practical-tutorials/project-based-learning",
        description: "Curated list of project-based programming tutorials across languages.",
      },
      {
        title: "Untools",
        url: "https://untools.co",
        description:
          "Collection of thinking tools and frameworks for problem-solving and decision-making.",
      },
    ],
  },
  {
    name: "Fun",
    shape: "square",
    color: "#9333ea",
    darkColor: "#a855f7",
    bookmarks: [
      {
        title: "Literature Clock",
        url: "https://literature-clock.jenevoldsen.com",
        description: "Displays literary quotes from books matching the current time of day.",
      },
    ],
  },
  {
    name: "Matcha",
    shape: "diamond",
    color: "#4a7c59",
    darkColor: "#66bb6a",
    bookmarks: [
      {
        title: "r/Matcha Community",
        url: "https://www.reddit.com/r/matcha",
        description:
          "Active community sharing preparation techniques, vendor recommendations, and latte art.",
      },
    ],
  },
];
