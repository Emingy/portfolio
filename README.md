# A.POTAPOV — Portfolio

Personal portfolio site of Alexander Potapov, Frontend Developer.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript 5
- **Intl**: next-intl — `ru` (default) / `en`, auto-detect via `Accept-Language`
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
pnpm build      # generate icons → production build + TypeScript check
pnpm icons      # regenerate favicon/icons from public/icon.png
pnpm lint       # ESLint
pnpm lint:scss  # Stylelint
pnpm format     # Prettier check
```

## Content

Content is split into two layers:

**Locale files** — [`src/content/locales/ru.ts`](src/content/locales/ru.ts) and [`src/content/locales/en.ts`](src/content/locales/en.ts) contain all translatable site copy. Edit these to update text, links, or data.

| Field                       | Description                                            |
| --------------------------- | ------------------------------------------------------ |
| `personal.name`             | Full name                                              |
| `personal.avatar`           | Optional photo URL — portrait card shown only when set |
| `personal.heroPhrases`      | Typing animation phrases                               |
| `personal.hobbies`          | Hobby chips in About section                           |
| `personal.about.paragraphs` | Bio text, supports `<cyan>…</cyan>` for accent colour  |
| `contacts.lead`             | Heading in Contact section                             |
| `contacts.links[]`          | Contact buttons                                        |
| `contacts.cvUrl`            | CV file path                                           |
| `skills[]`                  | Skill grid items                                       |
| `experience[]`              | Timeline entries                                       |
| `projects[]`                | Project cards                                          |

**Translation files** — [`translations/ru.json`](translations/ru.json) and [`translations/en.json`](translations/en.json) contain UI strings (navigation labels, aria-attributes, section titles, button copy).

## Icons

Place your icon at `public/icon.png`. Running `pnpm build` (or `pnpm icons`) generates:

- `public/favicon.ico` — 16 / 32 / 48 px
- `public/apple-touch-icon.png` — 180 px
- `public/icon-192.png`, `public/icon-512.png`
