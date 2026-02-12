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
                    if (entry.isIntersecting) {
                        const theme = entry.target.getAttribute('data-theme-section');
                        if (theme === 'black') {
                            document.body.style.backgroundColor = '#000000';
                        } else if (theme === 'purple') {
                            document.body.style.backgroundColor = '#4F39F6';
                        } else {
                            document.body.style.backgroundColor = '#ffffff';
                        }
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return null;
}
