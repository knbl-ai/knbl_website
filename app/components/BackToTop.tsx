'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isMobileInteraction, setIsMobileInteraction] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleInteraction = () => {
            if (window.innerWidth < 768) {
                setIsMobileInteraction(true);
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    setIsMobileInteraction(false);
                }, 3000); // Hide after 3 seconds
            }
        };

        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Check if the area where the button sits is over a dark section
            const x = window.innerWidth - 60;
            const y = window.innerHeight - 60;

            if (typeof document !== 'undefined') {
                const elements = document.elementsFromPoint(x, y);
                const darkSection = elements.find(el => {
                    const isSelf = el.closest('.back-to-top-btn');
                    if (isSelf) return false;
                    return el.closest('[data-theme="dark"]');
                });
                setIsDarkTheme(!!darkSection);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        window.addEventListener('touchstart', handleInteraction, { passive: true });
        window.addEventListener('click', handleInteraction, { passive: true });

        const timer = setTimeout(toggleVisibility, 100);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('click', handleInteraction);
            clearTimeout(timer);
            clearTimeout(timeoutId);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    const showButton = isVisible && (!isMobile || isMobileInteraction);

    return (
        <AnimatePresence>
            {showButton && (
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
                    className="back-to-top-btn flex fixed bottom-8 right-10 md:right-10 z-[100] w-12 h-12 rounded-full items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
