import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';

import { getSiteConfig } from '@/content/site';
import type { Locale } from '@/intl/routing';
import { routing } from '@/intl/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const { personal } = getSiteConfig(locale);

    return {
        title: `${personal.name} — Frontend Developer`,
        description: 'Frontend Developer: React, TypeScript, Next.js',
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-touch-icon.png',
        },
    };
}

type TProps = Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}>;

export default async function LocaleLayout({ children }: TProps) {
    const messages = await getMessages();

    return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
