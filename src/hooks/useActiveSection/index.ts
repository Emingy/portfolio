'use client';

import { useEffect, useRef, useState } from 'react';

export const useActiveSection = (ids: string[]) => {
    const [active, setActive] = useState('');
    const intersecting = useRef(new Set<string>());

    useEffect(() => {
        const update = () => {
            const first = ids.find((id) => intersecting.current.has(id));
            setActive(first ?? '');
        };

        const observers = ids.map((id) => {
            const el = document.getElementById(id);

            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        intersecting.current.add(id);
                    } else {
                        intersecting.current.delete(id);
                    }

                    update();
                },
                { rootMargin: '-40% 0px -55% 0px' }
            );

            observer.observe(el);

            return observer;
        });

        return () => {
            observers.forEach((o) => o?.disconnect());
            intersecting.current.clear();
        };
    }, [ids]);

    return active;
};
