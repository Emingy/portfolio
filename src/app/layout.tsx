import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Oswald } from 'next/font/google';
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

export const metadata: Metadata = {
    title: 'Александр Потапов — Frontend Developer',
    description: 'Frontend Developer: React, TypeScript, Next.js',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#07070c',
};

type TProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: TProps) {
    return (
        <html lang="ru" className={`${oswald.variable} ${jetbrainsMono.variable}`}>
            <body>{children}</body>
        </html>
    );
}
