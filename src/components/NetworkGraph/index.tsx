'use client';

import React, { useEffect, useRef } from 'react';

import { getRandom } from '@/utils/getRandom';

import styles from './index.module.scss';

import { CONNECTION_DISTANCE, MOUSE_RADIUS, PARTICLE_COUNT, SPEED } from './constants';
import type { TMouse, TParticle } from './types';

export const NetworkGraph = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef<TMouse>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        let rafId: number;
        const particles: TParticle[] = [];
        let logicalW = window.innerWidth;
        let logicalH = window.innerHeight;

        const isMobile = () => window.innerWidth <= 820;

        const resize = () => {
            logicalW = window.innerWidth;
            logicalH = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = logicalW * dpr;
            canvas.height = logicalH * dpr;
            canvas.style.width = `${logicalW}px`;
            canvas.style.height = `${logicalH}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const init = () => {
            particles.length = 0;
            const count = isMobile() ? Math.floor(PARTICLE_COUNT / 2) : PARTICLE_COUNT;

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: getRandom(0, logicalW),
                    y: getRandom(0, logicalH),
                    vx: getRandom(-SPEED, SPEED),
                    vy: getRandom(-SPEED, SPEED),
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, logicalW, logicalH);

            const mouse = isMobile() ? null : mouseRef.current;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > logicalW) p.vx *= -1;
                if (p.y < 0 || p.y > logicalH) p.vy *= -1;

                let nearMouse = false;

                if (mouse) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MOUSE_RADIUS) {
                        nearMouse = true;
                        const lineOpacity = (1 - dist / MOUSE_RADIUS) * 0.45;

                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(31, 224, 232, ${lineOpacity})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, nearMouse ? 2 : 1.5, 0, Math.PI * 2);
                ctx.fillStyle = nearMouse ? 'rgba(31, 224, 232, 0.6)' : 'rgba(31, 224, 232, 0.2)';
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.08;

                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(31, 224, 232, ${opacity})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            rafId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = null;
        };

        const handleScroll = () => {
            canvas.style.opacity = String(1 - Math.min(window.scrollY / window.innerHeight, 1));
        };

        resize();
        init();
        draw();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 150);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(rafId);
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.NetworkGraph} aria-hidden="true" />;
};
