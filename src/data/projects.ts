export enum Status {
  LIVE = "LIVE",
  WIP = "WIP",
  PLANNED = "PLANNED",
  FINISHED = "FINISHED",
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  url: string | null;
  status: Status;
  hours: number;
}

export const projects: Project[] = [
  {
    id: "01",
    name: "blog.anro.dev",
    tagline: "Markdown Blog",
    description: "Personal Blog about programming, tech, green tea, and trying new things.",
    tech: ["Next.js", "MDX", "TailwindCSS", "shadcn/ui", "TypeScript"],
    url: "https://blog.anro.dev",
    status: Status.LIVE,
    hours: 30,
  },
  {
    id: "02",
    name: "anro.dev",
    tagline: "Personal overview page with some extras",
    description:
      "Personal portfolio and creative playground. Serves as an introduction about me. You're looking at it right now.",
    tech: ["Astro", "Solid.js", "TailwindCSS", "TypeScript"],
    url: "https://anro.dev",
    status: Status.LIVE,
    hours: 25,
  },
  {
    id: "03",
    name: "System for Allergen and Style Classifiction",
    tagline: "Master Diploma Project",
    description:
      "The number of available food products on the market and the lack of food databases with correct allergen labelling make it challenging to provide accurate food allergen classification. In addition, the sheer amount of different ingredients that can contain food allergens, can be hard to memorize. This system is intended to provide allergen information by selecting text in webpages.",
    tech: ["Python", "HTML", "TypeScript"],
    url: "https://github.com/AndreasRoither/system-for-allergen-and-style-classification",
    status: Status.FINISHED,
    hours: 200,
  },
  {
    id: "04",
    name: "Virtual Reality Interaction Library",
    tagline: "Bachelor Diploma Project",
    description:
      "The primary goal of this library is to provide an easy to use framework with a few interaction and navigation techniques as a base for developers to implement new techniques. Techniques that are created using this library do not have to rely on a specific hardware solution.",
    tech: ["C#"],
    url: "https://github.com/AndreasRoither/Virtual-interaction-library",
    status: Status.FINISHED,
    hours: 100,
  },
];
