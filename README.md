# A.POTAPOV — Portfolio

Personal portfolio site of Alexander Potapov, Frontend Developer.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript 5
- **Styles**: SCSS + CSS Modules, `classnames/bind`
- **Fonts**: Oswald (`--font-display`), JetBrains Mono (`--font-mono`) via `next/font/google`
- **Package manager**: pnpm

## Getting started

```bash
pnpm install
pnpm dev        # dev server on :3000
```

## Scripts

```bash
pnpm dev        # development server
pnpm build      # production build + TypeScript check
pnpm lint       # ESLint
pnpm lint:scss  # Stylelint
pnpm format     # Prettier check
```

## Content

All copy lives in [`src/content/site.ts`](src/content/site.ts) (`siteConfig`). Edit that file to update any text, links, or data — components never hardcode display content.

Key fields:

| Field                       | Description                                            |
| --------------------------- | ------------------------------------------------------ |
| `personal.name`             | Full name                                              |
| `personal.avatar`           | Optional photo URL — portrait card shown only when set |
| `personal.heroPhrases`      | Typing animation phrases                               |
| `personal.about.paragraphs` | Bio text, supports `<cyan>…</cyan>` for accent colour  |
| `contacts.links[]`          | Contact buttons                                        |
| `contacts.cvUrl`            | CV file path                                           |
| `skills[]`                  | Skill grid items                                       |
| `experience[]`              | Timeline entries                                       |
| `projects[]`                | Project cards                                          |
