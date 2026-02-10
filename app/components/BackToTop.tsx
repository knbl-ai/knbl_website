'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Check if the area where the button sits is over a dark section
            // We look at the bottom right area (where the button is fixed)
            const x = window.innerWidth - 60; // Approximate button center
            const y = window.innerHeight - 60;

            if (typeof document !== 'undefined') {
                const elements = document.elementsFromPoint(x, y);
                // We want to skip the button itself when checking what's behind it
                const darkSection = elements.find(el => {
                    // Check if the element or its parents are NOT the button
                    const isSelf = el.closest('.back-to-top-btn');
                    if (isSelf) return false;

                    // Check if it belongs to a dark theme container
                    return el.closest('[data-theme="dark"]');
                });
                setIsDarkTheme(!!darkSection);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        // Run initial check after a short delay to ensure DOM is ready
        const timer = setTimeout(toggleVisibility, 100);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            clearTimeout(timer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        backgroundColor: isDarkTheme ? '#FFFFFF' : '#4F39F6',
                        color: isDarkTheme ? '#4F39F6' : '#FFFFFF'
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileHover={{ scale: 1.1, translateY: -4 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="back-to-top-btn hidden md:flex fixed bottom-8 right-10 z-[100] w-12 h-12 rounded-full items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
