// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://anro.dev",
  integrations: [solidJs(), sitemap()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
