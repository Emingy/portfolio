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

**Translation files** — [`translations/ru.json`](translations/ru.json) and [`translations/en.json`](translations/en.json) contain UI strings (navigation labels, aria-attributes, section titles, button copy).
