# Ever Works — Website Template (Minimal · Astro)

A lightweight, **static** general-purpose **website** starter for **marketing sites, landing
pages, and content-driven sites** — the minimal, framework-light counterpart to
[`web-template`](https://github.com/ever-works/web-template) (Next.js) and the non-directory
counterpart to
[`directory-web-minimal-template`](https://github.com/ever-works/directory-web-minimal-template).
Built with **Astro 6 + Tailwind CSS v4**, it ships a complete marketing site that builds to plain
static HTML — no runtime, no database.

> Part of the [Ever Works](https://ever.works) template family. Pick this template for a fast,
> zero-JS-by-default **Landing Page**, **Blog**, or general **Website** Work when you don't need the
> Next.js app runtime.

## What’s inside

- **Landing page** composed of ready-made sections: hero, logo cloud, features, how-it-works,
  testimonials, pricing, FAQ, and a final CTA.
- **Pages**: Home, About, Pricing, Contact (with a form), and a Markdown-powered **Blog** using
  Astro content collections.
- **One config to rebrand everything** — `apps/web/src/config/site.ts` holds all copy, navigation,
  pricing, testimonials, and footer.
- **Light & dark themes** (system-aware, with a toggle), responsive layout, sitemap, and SEO meta.
- **Zero JavaScript by default** — interactivity (menu, theme, FAQ) is a few lines of inline vanilla
  JS. No framework islands, no icon dependency.

## Tech stack

| | |
|---|---|
| Framework | Astro 6 (static output) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Content | Markdown via Astro content collections |
| Tooling | pnpm workspaces + Turborepo, TypeScript |

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:4321
```

Build the static site:

```bash
pnpm build          # → apps/web/dist
pnpm --filter @ever-works/web-minimal preview
```

## Customize

1. Edit **`apps/web/src/config/site.ts`** — name, tagline, nav, hero, features, pricing, FAQ, footer.
2. Adjust the design tokens (colors, radius, fonts) in **`apps/web/src/styles/global.css`** (`@theme`).
3. Add blog posts as Markdown files in **`apps/web/src/content/blog/`** (frontmatter: `title`,
   `description`, `date`, `author`).
4. Wire the contact form in **`apps/web/src/pages/contact.astro`** to your email/endpoint.

## Deploy

A production `Dockerfile` is included — it builds the static site and serves it with **nginx on port
`3000`**, ready for Kubernetes (the Ever Works `@ever-works/k8s-plugin`) or any static host (Vercel,
Netlify, Cloudflare Pages, etc.).

## License

[AGPL-3.0](./LICENSE.md) © [Ever Co. LTD](https://ever.co)
