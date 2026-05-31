'use client';

import { useEffect } from 'react';

const DURATION = 800;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

let rafId: number | null = null;

const cancel = () => {
    if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
};

export const smoothScrollToY = (targetY: number) => {
    cancel();

    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const step = (ts: number) => {
        if (startTime === null) startTime = ts;

        const progress = Math.min((ts - startTime) / DURATION, 1);

        window.scrollTo(0, startY + distance * easeOutCubic(progress));

        if (progress < 1) {
            rafId = requestAnimationFrame(step);
        } else {
            rafId = null;
        }
    };

    rafId = requestAnimationFrame(step);
};

const scrollToElement = (target: Element) => {
    const navbarHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') || '80'
    );

    const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    smoothScrollToY(targetY);
};

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
        window.addEventListener('wheel', cancel, { passive: true });
        window.addEventListener('touchstart', cancel, { passive: true });

        return () => {
            document.removeEventListener('click', handleClick);
            window.removeEventListener('wheel', cancel);
            window.removeEventListener('touchstart', cancel);
            cancel();
        };
    }, []);

    return null;
};
