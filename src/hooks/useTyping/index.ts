'use client';

import { useEffect, useState } from 'react';

export const useTyping = (phrases: string[]) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        let phraseIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timeoutId: number;

        const tick = () => {
            const phrase = phrases[phraseIndex];

            setValue(deleting ? phrase.slice(0, charIndex--) : phrase.slice(0, charIndex++));

            let delay = deleting ? 35 : 70;

            if (!deleting && charIndex === phrase.length + 1) {
                deleting = true;
                delay = 1400;
            }

            if (deleting && charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            timeoutId = window.setTimeout(tick, delay);
        };

        timeoutId = window.setTimeout(tick, 100);

        return () => clearTimeout(timeoutId);
    }, [phrases]);

    return value;
};
