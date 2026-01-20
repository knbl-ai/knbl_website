'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

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

  // Update active item based on current pathname
  useEffect(() => {
    const currentItem = menuItems.find((item) => {
      if (item.href === '/') return pathname === '/';
      if (item.href.startsWith('/#')) return pathname === '/';
      return pathname.startsWith(item.href);
    });
    if (currentItem) {
      setActiveItem(currentItem.label);
    }
  }, [pathname]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-6 md:px-[120px] py-[48px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[108px] h-[30px]">
              <Image
                src="/images/logo/knbl-logo.svg"
                alt="KNBL"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

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

            {/* Let's Talk Button */}
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
    </nav>
  );
}
