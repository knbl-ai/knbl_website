'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Insights', href: '#insights' },
  { label: 'Agency', href: '#agency' },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-24 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="108" height="30" viewBox="0 0 108 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" className="font-bold text-2xl" fill="currentColor">KNBL</text>
            </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className="relative px-3 py-2 text-neutral-200 hover:text-primary-600 transition-colors"
              >
                {item.label}
                {activeItem === item.label && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Let's Talk Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              Let's Talk
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
