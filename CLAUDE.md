# CLAUDE.md

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript 5
- **intl**: next-intl — локали `ru` (default) / `en`, автодетект по `Accept-Language`
- **Styles**: SCSS + CSS Modules, `classnames/bind`
- **Fonts**: `next/font/google` — Oswald (`--font-display`), JetBrains Mono (`--font-mono`)
- **Package manager**: pnpm

## Key scripts

```bash
pnpm dev       # dev server on :3000
pnpm build     # generate icons → production build + TypeScript check
pnpm icons     # SVG→ICO/PNG из public/icon.png вручную
pnpm lint      # ESLint
pnpm lint:scss # Stylelint
pnpm format    # Prettier check
```

## intl

Маршрутизация: `src/app/[locale]/` — все страницы под `/ru/…` и `/en/…`.
`src/middleware.ts` (Edge middleware) определяет локаль по `Accept-Language` и редиректит с `/`.

```
src/intl/
  routing.ts      # defineRouting({ locales: ['ru','en'], defaultLocale: 'ru' }) + asLocale()
  request.ts      # getRequestConfig — загружает translations/{locale}.json
  navigation.ts   # типизированные useRouter / usePathname / Link
```

**UI-строки** (навигация, aria-label, кнопки, секционные заголовки):
`translations/ru.json` и `translations/en.json`.

**Контент** (тексты, описания, опыт, проекты):
`src/content/locales/ru.ts` и `src/content/locales/en.ts`.

### Получение локали в компонентах

```ts
// Server component
const locale = asLocale(await getLocale()); // from 'next-intl/server'
const t = await getTranslations('namespace'); // from 'next-intl/server'
const config = getSiteConfig(locale); // from '@/content/site'

// Client component
const locale = asLocale(useLocale()); // from 'next-intl'
const t = useTranslations('namespace'); // from 'next-intl'
const config = getSiteConfig(locale); // from '@/content/site'
```

Переключатель языка — кнопка в `Navbar`, использует `useRouter().replace(pathname, { locale })`.

## Content

**Два источника истины по локали:**

`src/content/locales/{ru,en}.ts` — полная структура `TSiteConfig`.
`src/content/site.ts` — `getSiteConfig(locale)` возвращает нужный конфиг.

```
personal.name / position / city
personal.heroPhrases      — фразы для typing-анимации в Hero
personal.hobbies          — список хобби
personal.about.paragraphs — поддерживает <cyan>…</cyan> для акцентного цвета
contacts.lead             — заголовок в Contact
contacts.links[]          — { label, href } — кнопки контактов (email: mailto: prefix)
skills[]                  — { category, title }
experience[]              — { id, company, companyUrl, role, startDate, endDate, location, description }
projects[]                — { id, title, type, description, tags, url }
```

При добавлении поля: `src/types/site.ts` → оба locale-файла → компонент.

**UI-строки** в `translations/`:

```
nav.*              — пункты навигации
hero.*             — prefix, CTA-кнопки
about.*            — заголовок секции, dossier-лейблы, stat-лейблы
skills/experience/contact.*  — заголовки секций
project-modal.*    — open, close, iframe-title, footer-hint
project-card.*     — open-preview, badge-commercial, badge-pet
common.*           — close-menu, open-menu, lang-switch
footer.*           — role
```

## Source structure

```
src/
  app/
    layout.tsx          # fonts, viewport, lang={locale} через getLocale()
    [locale]/
      layout.tsx        # NextIntlClientProvider, generateMetadata, generateStaticParams
      page.tsx          # компонует все секции
  intl/
    routing.ts          # defineRouting + asLocale()
    request.ts          # getRequestConfig
    navigation.ts       # createNavigation
  middleware.ts         # next-intl Edge middleware — locale detection + redirect
  components/           # один каталог на компонент
  content/
    site.ts             # getSiteConfig(locale) — точка входа
    locales/
      ru.ts             # русский контент
      en.ts             # английский контент
  hooks/
    useTyping/          # typing-анимация
    useReveal/          # IntersectionObserver scroll reveal
    useCountUp/         # count-up анимация
  utils/
    formatDuration/     # форматирование дат/периодов; поддерживает locale: 'ru' | 'en'
    smoothScroll/       # RAF-скролл
    getRandom/
  styles/
    variables.scss      # CSS custom properties (:root)
    mixins.scss         # @mixin container, font-display, hidden-scrollbar
    globals.scss        # reset, keyframes, body base styles
  types/
    site.ts             # TSiteConfig, TProject, TExperience
translations/
  ru.json               # UI-строки RU
  en.json               # UI-строки EN
scripts/
  generate-icons.mjs    # public/icon.png → favicon.ico (16/32/48) + apple-touch-icon + 192/512
public/
  icon.png              # исходник иконки (заменить для смены фавикона)
```

## Component structure

```
ComponentName/
  index.tsx           # implementation + export type T<Name>Props
  index.module.scss   # BEM scoped styles
  types.ts            # TProps (когда props нетривиальны)
```

## Components reference

| Component        | Role                                                     | Client? | Async? |
| ---------------- | -------------------------------------------------------- | ------- | ------ |
| `Grain`          | Film grain overlay                                       | —       | —      |
| `Scanlines`      | CRT scanline overlay                                     | —       | —      |
| `Vignette`       | Edge darkening + colour bleed                            | —       | —      |
| `GlowCursor`     | Cyan radial glow following cursor                        | ✓       | —      |
| `SmoothScroll`   | Intercepts `[href^="#"]` clicks, custom RAF scroll       | ✓       | —      |
| `Reveal`         | Wraps children with IntersectionObserver fade-in         | ✓       | —      |
| `Navbar`         | Fixed nav + language switcher                            | ✓       | —      |
| `Hero`           | Full-height header, typing animation, CTA                | ✓       | —      |
| `Intro`          | Fullscreen splash on first load                          | ✓       | —      |
| `Section`        | Reusable section shell — `num`, `title`, decorative line | —       | —      |
| `About`          | Bio text + portrait placeholder + dossier panel          | —       | ✓      |
| `Skills`         | Skill grid                                               | —       | ✓      |
| `Projects`       | Project list + modal state                               | ✓       | —      |
| `ProjectCard`    | Single project row                                       | ✓       | —      |
| `ProjectModal`   | iframe preview modal                                     | ✓       | —      |
| `Experience`     | Timeline container                                       | —       | ✓      |
| `ExperienceCard` | Single timeline entry — принимает `locale` prop          | —       | —      |
| `Contact`        | Contact section                                          | —       | ✓      |
| `Footer`         | Copyright line                                           | —       | ✓      |
| `StatCounter`    | Animated number count-up                                 | ✓       | —      |
| `ScrollProgress` | Top progress bar                                         | ✓       | —      |
| `BackToTop`      | Back-to-top button                                       | ✓       | —      |
| `NetworkGraph`   | Ambient animated graph                                   | ✓       | —      |

## TypeScript conventions

- `type` over `interface` — always
- Props type: `TProps` locally, `T<Name>Props` on export
- Enums: `E` prefix, PascalCase key, lowercase value

## SCSS conventions

`sassOptions.additionalData` в `next.config.ts` автоматически инжектит `variables.scss` и `mixins.scss`
в каждый модуль — ручной `@use` не нужен.

```scss
.Block {
    @include container;       /* max-width centred wrapper */
    @include font-display;    /* Oswald font-family */

    color: var(--color-cyan);

    &__element { … }          /* BEM element */
    &__element_modifier { … } /* BEM modifier */
}
```

Всегда `var(--…)` для цветов, отступов, z-index. Никаких хардкоженых hex или px,
если значение уже есть как переменная.

Ключевые переменные: `--color-bg`, `--color-bg-panel`, `--color-text`, `--color-text-bright`,
`--color-text-muted`, `--color-cyan`, `--color-magenta`, `--color-amber`,
`--color-border`, `--navbar-height`, `--z-modal`, `--transition-default`.

Keyframes globally: `grain`, `fall`, `pulse`, `flicker`, `modal-fade`.

## Scroll behaviour

`SmoothScroll` (RAF, 800 ms, `easeOutCubic`) обрабатывает все клики по `[href^="#"]`.
`scroll-padding-top: var(--navbar-height)` компенсирует фиксированный navbar.
`scroll-behavior: smooth` намеренно **не** задан — конфликтует с JS-анимацией.

## Icons

Источник: `public/icon.png` (заменить на свой файл).
`pnpm build` (и `pnpm icons` вручную) генерирует:

- `public/favicon.ico` — 16 / 32 / 48 px
- `public/apple-touch-icon.png` — 180 px
- `public/icon-192.png`, `public/icon-512.png`
