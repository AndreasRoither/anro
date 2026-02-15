import { createSignal, onMount } from "solid-js";

export default function ThemeToggle() {
  const [isDark, setIsDark] = createSignal(false);
  const [announcement, setAnnouncement] = createSignal("");

  // Sync Solid signal with the data-theme attribute set by BaseLayout.astro's
  // inline script (which runs earlier to prevent FOWT). Keep logic in sync.
  onMount(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        setIsDark(true);
      } else if (stored === "light") {
        setIsDark(false);
      } else {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    } catch {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  });

  function toggle() {
    const next = !isDark();
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setAnnouncement(`Switched to ${next ? "dark" : "light"} mode`);
  }

  return (
    <>
      <button
        onClick={toggle}
        aria-label={isDark() ? "Switch to light mode" : "Switch to dark mode"}
        class="theme-toggle"
        type="button"
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ display: isDark() ? "none" : "block" }}
        >
          {/* Moon icon */}
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ display: isDark() ? "block" : "none" }}
        >
          {/* Sun icon */}
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </button>
      <div aria-live="polite" class="sr-only">
        {announcement()}
      </div>
    </>
  );
}
