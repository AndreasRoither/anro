import { createSignal, For } from "solid-js";
import type { BookmarkCategory } from "../data/bookmarks";

export default function BookmarkFilter(props: { categories: BookmarkCategory[] }) {
  const [active, setActive] = createSignal<string | null>(null);

  const filtered = () => {
    const a = active();
    if (!a) return props.categories;
    return props.categories.filter((c) => c.name === a);
  };

  return (
    <>
      <nav
        class="mb-12 flex flex-wrap gap-2 border-l-3 border-(--anro-text) pl-5"
        aria-label="Filter bookmarks by category"
      >
        <button
          class="anro-filter-btn"
          classList={{ active: active() === null }}
          onClick={() => setActive(null)}
        >
          All
        </button>
        <For each={props.categories}>
          {(cat) => (
            <button
              class="anro-filter-btn"
              classList={{ active: active() === cat.name }}
              onClick={() => setActive(active() === cat.name ? null : cat.name)}
            >
              <span
                class={`filter-shape shape-${cat.shape} inline-block h-2 w-2 shrink-0`}
                style={{
                  "--shape-color": cat.color,
                  "--shape-color-dark": cat.darkColor,
                }}
              />
              {cat.name}
            </button>
          )}
        </For>
      </nav>

      <div class="flex flex-col gap-16 max-[639px]:gap-12">
        <For each={filtered()}>
          {(cat) => (
            <section class="relative">
              <div class="relative mb-6">
                <div class="flex items-center gap-3">
                  <span
                    class={`section-shape shape-${cat.shape}`}
                    style={{
                      "--shape-color": cat.color,
                      "--shape-color-dark": cat.darkColor,
                    }}
                  />
                  <h2 class="m-0 text-2xl font-black tracking-[0.06em] uppercase">{cat.name}</h2>
                </div>
                <hr class="mt-3 mb-0 h-0.5 border-none bg-(--anro-text)" />
              </div>

              <div class="bookmark-grid grid grid-cols-1 sm:grid-cols-2">
                <For each={cat.bookmarks}>
                  {(bm) => (
                    <article class="relative p-5">
                      <div class="min-w-0">
                        <h3 class="m-0 mb-1 text-[1.0625rem] leading-[1.3] font-bold">
                          <a
                            href={bm.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group inline text-(--anro-text) no-underline transition-colors duration-150 hover:text-(--anro-accent)"
                          >
                            {bm.title}
                            <span
                              class="ml-1 inline-block text-[0.85em] opacity-40 transition-all duration-150 group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-100"
                              aria-hidden="true"
                            >
                              &#8599;
                            </span>
                          </a>
                        </h3>
                        <p class="m-0 mb-2 overflow-hidden text-xs text-ellipsis whitespace-nowrap text-(--anro-text-faint)">
                          {bm.url.replace(/^https?:\/\//, "")}
                        </p>
                        <p class="m-0 mb-3 text-sm leading-relaxed opacity-70">{bm.description}</p>
                        <span
                          class={`bookmark-tag shape-${cat.shape} inline-flex items-center gap-1.5 px-2.5 py-1 font-(family-name:--anro-font) text-[0.625rem] font-bold tracking-[0.14em] uppercase`}
                          style={{
                            "--shape-color": cat.color,
                            "--shape-color-dark": cat.darkColor,
                          }}
                        >
                          {cat.name}
                        </span>
                      </div>
                    </article>
                  )}
                </For>
              </div>
            </section>
          )}
        </For>
      </div>
    </>
  );
}
