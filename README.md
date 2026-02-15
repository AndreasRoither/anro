<p align="center">
  <img src="public/og-default.jpg" alt="Tea" width="500"  />
  <br />
  <strong>anro.dev</strong>
</p>

<p align="center">
  <a href="https://anro.dev"><img src="https://img.shields.io/badge/live-anro.dev-green" alt="Live Site" /></a>
  <a href="https://astro.build/"><img src="https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white" alt="Astro 5" /></a>
  <a href="https://www.solidjs.com/"><img src="https://img.shields.io/badge/Solid.js-1.9-4F88C6?logo=solid&logoColor=white" alt="Solid.js" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="TailwindCSS 4" /></a>
</p>

# About

My personal portfolio site. Matcha themed.

## Pages

- **Home**: overview with terminal UI, zen stones, tea bowl, social links
- **Projects**: filterable project showcase
- **Now**: what I'm currently up to
- **Thoughts**: newspaper-style articles
- **Stack**: tools, hardware, and software I use
- **Bookmarks**: curated collection of links

## Tech Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| Framework    | Astro 5                                      |
| Islands      | Solid.js                                     |
| Styling      | TailwindCSS 4                                |
| Language     | TypeScript (strict)                          |
| Font         | Geist Variable                               |
| Linting      | oxlint, oxfmt, prettier                      |
| Deployment   | Docker (multi-stage) + Caddy                 |
| Task runner  | just                                         |

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm
- [just](https://github.com/casey/just) (optional, for task shortcuts)

### Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

The site will be available at `http://localhost:4321`.

### Build & Preview

```bash
# Production build
pnpm build

# Preview the build locally
pnpm preview
```

### Linting & Formatting

```bash
pnpm lint          # lint with oxlint
pnpm lint:fix      # lint and auto-fix
pnpm fmt           # format with oxfmt
pnpm fmt:check     # check formatting
```

### Docker

```bash
# Build and run
just docker-up

# Or manually
docker build -t anro .
docker run -d --name anro -p 3000:3000 anro
```

Serves static files via Caddy on port 3000.

### Just Recipes

Run `just` to see all available commands:

```bash
just dev            # start dev server
just build          # production build
just ci-check       # lint + format check + astro check
just docker-up      # build & run docker
just docker-down    # stop & remove container
just clean          # remove build artifacts
```

<div align="center">
  Built With ❤️ and Tea 🍵
</div>
