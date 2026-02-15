import { createSignal, createMemo, For } from "solid-js";
import type { Project } from "../data/projects";

const statusStyles: Record<Project["status"], string> = {
  LIVE: "bg-[var(--anro-accent)] text-[var(--anro-bg)]",
  WIP: "bg-[var(--anro-wip-badge)] text-white",
  PLANNED: "bg-transparent border-2 border-[var(--anro-bar-border)] text-[var(--anro-text)]",
  FINISHED: "bg-[var(--anro-accent)] text-[var(--anro-bg)]",
};

export default function ProjectFilter(props: { projects: Project[] }) {
  const [activeTech, setActiveTech] = createSignal<string | null>(null);

  const allTechs = createMemo(() => {
    const set = new Set<string>();
    for (const p of props.projects) {
      for (const t of p.tech) set.add(t);
    }
    return [...set].sort();
  });

  const filtered = () => {
    const tech = activeTech();
    if (!tech) return props.projects;
    return props.projects.filter((p) => p.tech.includes(tech));
  };

  return (
    <>
      <nav
        class="mb-12 flex flex-wrap gap-2 border-l-3 border-(--anro-text) pl-5"
        aria-label="Filter projects by technology"
      >
        <button
          class="anro-filter-btn"
          classList={{ active: activeTech() === null }}
          onClick={() => setActiveTech(null)}
        >
          All
        </button>
        <For each={allTechs()}>
          {(tech) => (
            <button
              class="anro-filter-btn"
              classList={{ active: activeTech() === tech }}
              onClick={() => setActiveTech(activeTech() === tech ? null : tech)}
            >
              {tech}
            </button>
          )}
        </For>
      </nav>

      <section class="mx-auto mb-16 max-w-250" aria-label="Project list">
        <div
          class="mb-0 grid grid-cols-[60px_1fr_100px] border-b-4 border-(--anro-text) py-2 text-[0.65rem] font-black tracking-[0.15em] uppercase max-sm:grid-cols-[40px_1fr_60px] max-sm:text-[0.55rem]"
          aria-hidden="true"
        >
          <span class="px-2">ID</span>
          <span class="px-2">PROJECT</span>
          <span class="px-2">STATUS</span>
        </div>

        <For each={filtered()}>
          {(project) => (
            <article class="border-3 border-t-0 border-(--anro-bar-border) transition-all duration-150 hover:bg-(--anro-hover-bg) hover:shadow-[inset_3px_0_0_var(--anro-accent)]">
              <div class="grid min-h-40 grid-cols-[60px_1fr_100px] max-sm:grid-cols-[40px_1fr_60px]">
                <div class="flex items-start justify-center border-r-3 border-(--anro-bar-border) pt-5">
                  <span class="text-2xl font-black max-sm:text-base">{project.id}</span>
                </div>

                <div class="px-5 py-4 max-sm:p-3">
                  <div>
                    <h2 class="m-0 mb-2 text-[clamp(1.25rem,3vw,1.75rem)] leading-tight font-black uppercase">
                      <span
                        class="mb-1 block text-xs text-[0.65rem] tracking-[0.05em] text-(--anro-accent) opacity-70"
                        aria-hidden="true"
                      >
                        &lt;project&gt;
                      </span>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="border-b-4 border-(--anro-accent) text-inherit no-underline transition-all duration-100 hover:bg-(--anro-accent) hover:text-(--anro-bg)"
                        >
                          {project.name}
                          <span class="ml-1 text-[0.75em]" aria-hidden="true">
                            &#8599;
                          </span>
                        </a>
                      ) : (
                        <span>{project.name}</span>
                      )}
                    </h2>
                  </div>

                  <p class="m-0 mb-3" aria-label={`Tagline: ${project.tagline}`}>
                    <span class="inline-block border-l-4 border-(--anro-accent) bg-(--anro-hover-bg) px-[0.4em] py-[0.15em] text-[0.85rem] italic">
                      {project.tagline}
                    </span>
                  </p>

                  <p class="m-0 mb-4 max-w-[60ch] leading-relaxed opacity-85">
                    {project.description}
                  </p>

                  <ul
                    class="m-0 flex list-none flex-wrap gap-[0.4rem] p-0"
                    aria-label={`Technologies used in ${project.name}`}
                  >
                    <For each={project.tech}>
                      {(t) => (
                        <li class="border-2 border-(--anro-bar-border) bg-transparent px-2 py-[0.2rem] text-[0.7rem] font-bold tracking-[0.08em] uppercase">
                          {t}
                        </li>
                      )}
                    </For>
                  </ul>

                  <div
                    class="mt-4 block text-right text-xs text-[0.65rem] tracking-[0.05em] text-(--anro-accent) opacity-70"
                    aria-hidden="true"
                  >
                    &lt;/project&gt;
                  </div>
                </div>

                <div class="flex flex-col items-center gap-3 border-l-3 border-(--anro-bar-border) pt-5">
                  <span
                    class={`px-[0.4rem] py-1 text-[0.6rem] font-bold tracking-[0.15em] uppercase max-sm:text-[0.5rem] ${statusStyles[project.status]}`}
                    aria-label={`Status: ${project.status}`}
                  >
                    {project.status}
                  </span>
                  <span
                    class="text-[0.6rem] font-bold tracking-widest whitespace-nowrap text-(--anro-text-faint)"
                    aria-label={`${project.hours} hours spent`}
                  >
                    ~{project.hours}h
                  </span>
                </div>
              </div>
            </article>
          )}
        </For>
      </section>
    </>
  );
}
