'use client';

import { useEffect, useRef, useState } from 'react';

export const useReveal = <T extends Element>() => {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
};
