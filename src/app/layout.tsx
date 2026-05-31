import type { Viewport } from 'next';
import { JetBrains_Mono, Oswald } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import React from 'react';

import '@/styles/globals.scss';

const oswald = Oswald({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#07070c',
};

type TProps = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: TProps) {
    const locale = await getLocale();

    return (
        <html lang={locale} className={`${oswald.variable} ${jetbrainsMono.variable}`}>
            <body>{children}</body>
        </html>
    );
}
