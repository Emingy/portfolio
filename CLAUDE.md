# CLAUDE.md

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript 5
- **Styles**: SCSS + CSS Modules, `classnames/bind`
- **Fonts**: `next/font/google` — Oswald (`--font-display`), JetBrains Mono (`--font-mono`)
- **Package manager**: pnpm

## Key scripts

```bash
pnpm dev       # dev server on :3000
pnpm build     # production build + TypeScript check
pnpm lint      # ESLint
pnpm lint:scss # Stylelint
pnpm format    # Prettier check
```

## Content

**Single source of truth — `src/content/site.ts` (`siteConfig`).**
Components never hardcode display text; all copy comes from `siteConfig`.

```
personal.name / shortName / position / city / yearsOfExperience
personal.heroPhrases      — typing animation phrases in Hero
personal.about.paragraphs — supports <cyan>…</cyan> for accent colour
contacts.lead             — heading in Contact section
contacts.links[]          — { label, href } — contact buttons (email uses mailto: prefix)
skills[]                  — { category, title }
experience[]              — { id, company, role, period, location, description }
projects[]                — { id, title, year, type, description, tags, previewUrl, liveUrl }
```

When adding fields, update `src/types/site.ts` first, then `siteConfig`, then the component.

## Source structure

```
src/
  app/
    layout.tsx      # fonts, metadata, global styles import
    page.tsx        # composes all sections + atmosphere layer
  components/       # one folder per component (see below)
  content/
    site.ts         # siteConfig — all editable content
  hooks/
    useTyping/      # typing animation
    useReveal/      # IntersectionObserver scroll reveal
  styles/
    variables.scss  # CSS custom properties (:root)
    mixins.scss     # @mixin container, font-display, hidden-scrollbar
    globals.scss    # reset, keyframes, body base styles
  types/
    site.ts         # TSiteConfig, TProject, TExperience
```

## Component structure

```
ComponentName/
  index.tsx           # implementation + export type T<Name>Props
  index.module.scss   # BEM scoped styles
  types.ts            # TProps (when props are non-trivial)
```

No `src/` subdirectory (unlike the ui library project).

## Components reference

| Component        | Role                                                     | Client? |
| ---------------- | -------------------------------------------------------- | ------- |
| `Grain`          | Film grain overlay                                       | —       |
| `Scanlines`      | CRT scanline overlay                                     | —       |
| `Vignette`       | Edge darkening + colour bleed                            | —       |
| `Rain`           | Animated rain drops on canvas                            | ✓       |
| `GlowCursor`     | Cyan radial glow following cursor                        | ✓       |
| `SmoothScroll`   | Intercepts `[href^="#"]` clicks, custom RAF scroll       | ✓       |
| `Reveal`         | Wraps children with IntersectionObserver fade-in         | ✓       |
| `Navbar`         | Fixed nav with burger menu                               | ✓       |
| `Hero`           | Full-height header, typing animation, CTA                | ✓       |
| `Section`        | Reusable section shell — `num`, `title`, decorative line | —       |
| `About`          | Bio text + portrait placeholder + dossier panel          | —       |
| `Skills`         | Skill grid                                               | —       |
| `Projects`       | Project list + modal state                               | ✓       |
| `ProjectCard`    | Single project row                                       | —       |
| `ProjectModal`   | iframe preview modal                                     | ✓       |
| `Experience`     | Timeline container                                       | —       |
| `ExperienceCard` | Single timeline entry                                    | —       |
| `Contact`        | Contact section                                          | —       |
| `Footer`         | Copyright line                                           | —       |

## TypeScript conventions

- `type` over `interface` — always
- Props type: `TProps` locally, `T<Name>Props` on export
- Enums: `E` prefix, PascalCase key, lowercase value

## SCSS conventions

`sassOptions.additionalData` in `next.config.ts` auto-injects `variables.scss` and `mixins.scss`
into every module — no manual `@use` needed.

```scss
.Block {
    @include container;       /* max-width centred wrapper */
    @include font-display;    /* Oswald font-family */

    color: var(--color-cyan);

    &__element { … }          /* BEM element */
    &__element_modifier { … } /* BEM modifier */
}
```

Always use `var(--…)` for colours, spacing, z-index. Never hardcode hex or pixel values
that already exist as variables.

Key variables: `--color-bg`, `--color-bg-panel`, `--color-text`, `--color-text-bright`,
`--color-text-muted`, `--color-cyan`, `--color-magenta`, `--color-amber`,
`--color-border`, `--navbar-height`, `--z-modal`, `--transition-default`.

Keyframes available globally: `grain`, `fall`, `pulse`, `flicker`, `modal-fade`.

## Scroll behaviour

`SmoothScroll` (RAF, 800 ms, `easeOutCubic`) handles all `[href^="#"]` clicks.
`scroll-padding-top: var(--navbar-height)` compensates for the fixed navbar.
`scroll-behavior: smooth` is intentionally **not** set — it conflicts with the JS animation.
