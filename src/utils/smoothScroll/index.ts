const DURATION = 800;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

let rafId: number | null = null;

export const cancelSmoothScroll = () => {
    if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
};

export const smoothScrollToY = (targetY: number) => {
    cancelSmoothScroll();

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

export const scrollToElement = (target: Element) => {
    const navbarHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') || '80'
    );

    smoothScrollToY(target.getBoundingClientRect().top + window.scrollY - navbarHeight);
};
