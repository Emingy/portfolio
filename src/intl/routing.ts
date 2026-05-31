import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['ru', 'en'] as const,
    defaultLocale: 'ru',
});

export type Locale = (typeof routing.locales)[number];

export const asLocale = (s: string): Locale =>
    (routing.locales as readonly string[]).includes(s) ? (s as Locale) : routing.defaultLocale;
