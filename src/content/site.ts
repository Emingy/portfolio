import type { Locale } from '@/intl/routing';

import { siteConfig as en } from './locales/en';
import { siteConfig as ru } from './locales/ru';

const configs = { ru, en } as const;

export const getSiteConfig = (locale: Locale) => configs[locale];
