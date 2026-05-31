'use client';

import { useEffect } from 'react';

import { cancelSmoothScroll, scrollToElement } from '@/utils/smoothScroll';

export const SmoothScroll = () => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a');

            if (!anchor) return;

            const href = anchor.getAttribute('href');

            if (!href?.startsWith('#')) return;

            const section = document.querySelector(href);

            if (!section) return;

            e.preventDefault();
            scrollToElement(section);
        };

        document.addEventListener('click', handleClick);
        window.addEventListener('wheel', cancelSmoothScroll, { passive: true });
        window.addEventListener('touchstart', cancelSmoothScroll, { passive: true });

        return () => {
            document.removeEventListener('click', handleClick);
            window.removeEventListener('wheel', cancelSmoothScroll);
            window.removeEventListener('touchstart', cancelSmoothScroll);
            cancelSmoothScroll();
        };
    }, []);

    return null;
};
