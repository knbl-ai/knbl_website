'use client';

import { useEffect } from 'react';

export default function ThemeController() {
    useEffect(() => {
        // Select all sections that we want to observe
        // We assume the parent page wraps sections in divs with data-theme-section attribute
        const sections = document.querySelectorAll('[data-theme-section]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Only trigger if it's intersecting the center area
                    if (entry.isIntersecting) {
                        const theme = entry.target.getAttribute('data-theme-section');
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
                    }
                });
            },
            {
                // Slightly broader range to detect intersection before it hits the dead center
                threshold: [0, 0.1, 0.5, 0.9, 1],
                rootMargin: '-45% 0px -45% 0px'
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return null;
}
