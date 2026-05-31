'use client';

import React, { useEffect, useRef } from 'react';

import styles from './index.module.scss';

export const ScrollProgress = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const update = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const progress = scrollTop / (scrollHeight - clientHeight);

            el.style.transform = `scaleX(${progress})`;
        };

        window.addEventListener('scroll', update, { passive: true });

        return () => window.removeEventListener('scroll', update);
    }, []);

    return <div ref={ref} className={styles.ScrollProgress} aria-hidden="true" />;
};
