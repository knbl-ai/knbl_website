'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { X } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Agency', href: '/agency' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active item based on current pathname
  useEffect(() => {
    const currentItem = menuItems.find((item) => {
      if (item.href === '/') return pathname === '/';
      if (item.href.startsWith('/#')) return pathname === '/';
      return pathname.startsWith(item.href);
    });

    if (pathname === '/ai-productions') {
      setActiveItem('AI productions');
    } else {
      setActiveItem(currentItem ? currentItem.label : '');
    }
  }, [pathname]);

  // Close mobile menu when clicking a link
  const handleMobileMenuItemClick = (label: string) => {
    setActiveItem(label);
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-6 md:px-[120px] py-6 md:py-[48px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-24 h-7 md:w-[108px] md:h-[30px]">
              <Image
                src="/images/logo/knbl-logo.svg"
                alt="KNBL"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          {/* Desktop Menu & Button Container */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-12">
            <div className="flex items-center gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className="relative px-[12px] py-[10px] flex cursor-pointer group"
                >
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    animate="initial" // Ensures variants reset smoothly on mouse leave
                    className="flex text-[15px] font-normal leading-[24px]"
                  >
                    {item.label.split('').map((char, i) => (
                      <span key={i} className="relative inline-block whitespace-pre">
                        {/* Base Text */}
                        <span className={`transition-colors duration-200 ${activeItem === item.label ? 'text-[#4F39F6]' : 'text-[#888888]'}`}>
                          {char}
                        </span>
                        {/* Hover Effect Layer (The 'Wave') */}
                        <motion.span
                          variants={{
                            initial: {
                              clipPath: 'inset(0 100% 0 0)',
                              transition: { duration: 0.15, ease: "easeInOut" }
                            },
                            hover: {
                              clipPath: 'inset(0 0% 0 0)',
                              transition: {
                                duration: 0.12,
                                delay: i * 0.015, // Faster wave stagger
                                ease: "easeInOut"
                              }
                            }
                          }}
                          className="absolute inset-0 text-[#4F39F6]"
                          aria-hidden="true"
                        >
                          {char}
                        </motion.span>
                      </span>
                    ))}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* AI productions & Let's Talk Buttons */}
            <div className="flex items-center gap-4">
              <Link href="/ai-productions" className="transition-all duration-300">
                <InteractiveHoverButton
                  className={`bg-[#4F39F6] text-white rounded-full font-medium ${activeItem === 'AI productions' ? 'ring-2 ring-white/20' : ''}`}
                >
                  AI productions
                </InteractiveHoverButton>
              </Link>
              <Link href="/contact" className="transition-all duration-300">
                <InteractiveHoverButton
                  className="bg-[#4F39F6] text-white rounded-full font-medium"
                >
                  Let&apos;s Talk
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-50 md:hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-24 h-7">
                  <Image
                    src="/images/logo/knbl-logo.svg"
                    alt="KNBL"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleMobileMenuItemClick(item.label)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-2xl font-medium transition-colors ${
                      activeItem === item.label ? 'text-[#4F39F6]' : 'text-black'
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
                <Link
                  href="/ai-productions"
                  onClick={() => handleMobileMenuItemClick('AI productions')}
                  className="w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <InteractiveHoverButton
                      className={`bg-[#4F39F6] text-white rounded-full font-medium w-full ${
                        activeItem === 'AI productions' ? 'ring-2 ring-black/20' : ''
                      }`}
                    >
                      AI productions
                    </InteractiveHoverButton>
                  </motion.div>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <InteractiveHoverButton className="bg-[#4F39F6] text-white rounded-full font-medium w-full">
                      Let&apos;s Talk
                    </InteractiveHoverButton>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
