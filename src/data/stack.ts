export interface StackItem {
  name: string;
  note: string;
}

export interface StackGroup {
  category: string;
  items: StackItem[];
}

export const stack: StackGroup[] = [
  {
    category: "Editor",
    items: [
      { name: "VS Code", note: "Primary editor. It has a ton of integrations and is easy to use." },
      {
        name: "Zed",
        note: "I love the fast start and feel of this editor, might even use a my main editor.",
      },
      {
        name: "IntelliJ",
        note: "I love the extra functionality, but I almost always use distraction free mode since the ui is a bit too much.",
      },
    ],
  },
  {
    category: "Terminal",
    items: [
      {
        name: "Zsh + Starship",
        note: "Custom prompt with git info and environment context with my aliases is all I need.",
      },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Java", note: "Main language for my work the last 3 years." },
      { name: "TypeScript", note: "Primary for web projects. Love my Type-Safety." },
      { name: "Python", note: "Scripts, data analysis, and quick prototyping." },
      { name: "SQL", note: "Let's be real, even if you don't do backend work you need it." },
      {
        name: "Bash",
        note: "Anyone who needs to deploy anything to a linux system uses it, myself included.",
      },
    ],
  },
  {
    category: "Frameworks",
    items: [
      {
        name: "Astro",
        note: "For static sites and content-heavy projects. I also like the simplicity. The documentation is also really good!",
      },
      {
        name: "Angular",
        note: "Main framework for the last 3 years for my work. There is a lot to say about it, glad to see it moving towards a modern framework experience.",
      },
      { name: "Solid.js", note: "New for me, love the reactivity I get from it." },
      {
        name: "TailwindCSS",
        note: "Fast iterations and simplicity, I use it every day.",
      },
      {
        name: "Spring Boot",
        note: "There are a lot of jokes about Srping Boot and Java out there. I think (most) are probably true, however, many people tend do underestimate the sheer amount of tooling and available configurations and integrations Spring Boot has for deploying production ready backend applications.",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", note: "All my projects include a compose or dockerfile for a reason. " },
      {
        name: "Git",
        note: "Obvious choice of version control, I like the terminal usage with some cli tools like lazygit mixed in.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      { name: "GitHub", note: "Code hosting and CI/CD with Actions. " },
      { name: "Hostinger", note: "Where I deploy my personal projects." },
    ],
  },
  {
    category: "Hardware",
    items: [{ name: "Matcha Tea Bowl", note: "Essential." }],
  },
];
