'use client';

import { useEffect } from 'react';

export default function ThemeController() {
    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll('[data-theme-section]')
        ) as HTMLElement[];

        const applyTheme = (theme: string | null) => {
            const body = document.body;
            if (theme === 'black') {
                body.style.backgroundColor = '#000000';
                body.classList.add('is-dark');
            } else if (theme === 'purple') {
                body.style.backgroundColor = '#4F39F6';
                body.classList.add('is-dark');
            } else {
                body.style.backgroundColor = '#ffffff';
                body.classList.remove('is-dark');
            }
        };

        // Find the last section whose top edge has crossed the viewport midpoint.
        // Sections are in DOM order top→bottom so we iterate and keep updating
        // until we find one that hasn't reached the midpoint yet.
        const updateTheme = () => {
            const mid = window.innerHeight * 0.5;
            let active: HTMLElement | null = null;

            for (const section of sections) {
                if (section.getBoundingClientRect().top <= mid) {
                    active = section;
                } else {
                    break;
                }
            }

            if (active) {
                applyTheme(active.getAttribute('data-theme-section'));
            }
        };

        // Throttle to one update per animation frame
        let rafId: number | null = null;
        const onScroll = () => {
            if (rafId !== null) return;
            rafId = requestAnimationFrame(() => {
                updateTheme();
                rafId = null;
            });
        };

        updateTheme();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
}
