'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { X } from 'lucide-react';
import NewsletterModal from './NewsletterModal';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Agency', href: '/agency' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  // Check if body has 'is-dark' class to update text color
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.body.classList.contains('is-dark'));
    };

    checkTheme();
    // Observe class changes on body
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Listen for global event to open newsletter modal
  useEffect(() => {
    const handleOpenNewsletter = () => setIsNewsletterModalOpen(true);
    window.addEventListener('open-newsletter', handleOpenNewsletter);
    return () => window.removeEventListener('open-newsletter', handleOpenNewsletter);
  }, []);

  // Update active item based on current pathname
  useEffect(() => {
    const currentItem = menuItems.find((item) => {
      if (item.href === '/') return pathname === '/';
      if (item.href.startsWith('/#')) return pathname === '/';
      return pathname.startsWith(item.href);
    });

    if (pathname === '/ai-productions') {
      setActiveItem('AI Productions');
    } else if (pathname === '/contact') {
      setActiveItem("Let's Talk");
    } else {
      setActiveItem(currentItem ? currentItem.label : '');
    }
  }, [pathname]);

  // Close mobile menu when clicking a link
  const handleMobileMenuItemClick = (label: string) => {
    setActiveItem(label);
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll and add 'move down' class when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      html.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      html.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      html.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const navTextColor = isMobileMenuOpen || isDark ? 'white' : 'black';
  const logoFill = isMobileMenuOpen || isDark ? 'fill-white' : 'fill-black';
  const burgerBg = isMobileMenuOpen || isDark ? 'bg-white' : 'bg-black';

  return (
    <nav className={`${isMobileMenuOpen ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 ${isMobileMenuOpen ? 'bg-black' : 'bg-transparent'} transition-all duration-300`}>
      <div className="w-full px-6 md:px-24 py-6 md:py-[48px] relative z-[60]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <div className={`relative flex items-center w-[92px] h-[26px] md:w-[108px] md:h-[30px] -ml-4 -mt-2 md:ml-0 md:mt-0 transition-colors duration-300`}>
              <svg
                viewBox="0 0 108 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full scale-100"
              >
                <g clipPath="url(#clip0_0_717)">
                  <path
                    d="M6.4442 14.1036L17.0652 0H24.663L15.0365 12.5896L24.7425 29.4821H17.3039L10.8199 18.0876L6.4442 23.8247V29.4821H0V0H6.4442V14.1036Z"
                    className={`transition-colors duration-300 ${logoFill}`}
                  />
                  <path
                    d="M26.2144 29.4821V0H32.579L44.9901 18.7649V0H51.3547V29.4821H44.9901L32.579 10.757V29.4821H26.2144Z"
                    className={`transition-colors duration-300 ${logoFill}`}
                  />
                  <path
                    d="M55.4917 0H67.7436C73.6707 0 77.2508 3.10757 77.2508 8.16733C77.2508 11.3147 75.8188 13.6255 73.1536 14.7809C76.0575 15.7371 77.6088 18.008 77.6088 21.3546C77.6088 21.3546 77.6088 21.3546 77.6088 21.3546C77.6088 26.5737 74.1083 29.4821 67.7436 29.4821H55.4917V0ZM61.9359 5.65737V12.0717H67.0674C69.3746 12.0717 70.6475 10.9163 70.6475 8.80478C70.6475 6.69323 69.4144 5.65737 67.0674 5.65737H61.9359ZM61.9359 17.49V23.8247H67.3856C69.7724 23.8247 71.0055 22.749 71.0055 20.5578C71.0055 18.5657 69.7326 17.49 67.3856 17.49H61.9359Z"
                    className={`transition-colors duration-300 ${logoFill}`}
                  />
                  <path
                    d="M86.4 23.506H98.0155V29.4821H79.9558V0H86.4V23.506Z"
                    className={`transition-colors duration-300 ${logoFill}`}
                  />
                  <path
                    d="M100.681 26.4143C100.681 24.4223 102.312 22.7888 104.34 22.7888C106.369 22.7888 108 24.4223 108 26.4143C108 28.4064 106.289 30 104.34 30C102.391 30 100.681 28.3665 100.681 26.4143Z"
                    fill="#4F39F6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_717">
                    <rect width="108" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          {/* Mobile Menu Button - Cross-fade Burger to X */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[60] p-2 -mr-6 h-10 w-10 flex items-center justify-center translate-y-[-2px]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Burger Stripes */}
            <motion.div
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                scale: isMobileMenuOpen ? 0.8 : 1
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-[5.5px] absolute"
            >
              <span className={`w-[24px] h-[2px] rounded-full transition-colors duration-300 ${burgerBg}`} />
              <span className={`w-[24px] h-[2px] rounded-full transition-colors duration-300 ${burgerBg}`} />
              <span className={`w-[24px] h-[2px] rounded-full transition-colors duration-300 ${burgerBg}`} />
            </motion.div>

            {/* X Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                scale: isMobileMenuOpen ? 1 : 0.8
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute flex items-center justify-center"
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          </button>

          {/* Desktop Menu - Shifted Right, closer to Buttons */}
          <div className="hidden md:flex items-center justify-end gap-2 lg:gap-4 flex-1 mr-8 lg:mr-12">
            {menuItems.map((item) => {
              const isItemActive = activeItem === item.label;
              const isItemHovered = hoveredItem === item.label;
              // Rule: Only one name can be purple at a time. Hover takes priority over Active.
              const shouldShowPurple = isItemHovered || (isItemActive && hoveredItem === null);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-[12px] py-[10px] flex cursor-pointer group"
                >
                  <motion.div className="flex text-[15px] font-normal leading-[24px]">
                    {item.label.split('').map((char, i) => (
                      <span key={i} className="relative inline-block whitespace-pre">
                        <span className="text-[#888888]">{char}</span>
                        <motion.span
                          initial="initial"
                          animate={shouldShowPurple ? "visible" : "initial"}
                          variants={{
                            initial: {
                              clipPath: 'inset(0 100% 0 0)',
                              transition: {
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: (item.label.length - i) * 0.03
                              }
                            },
                            visible: {
                              clipPath: 'inset(0 0% 0 0)',
                              transition: {
                                duration: 0.6,
                                delay: i * 0.06,
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
              );
            })}
          </div>

          {/* Desktop CTA Buttons - Flush Right */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <InteractiveHoverButton
              onClick={() => setIsNewsletterModalOpen(true)}
              className="bg-black text-white rounded-full font-medium border border-white/10 hover:border-white/30"
            >
              Newsletter Sign-Up
            </InteractiveHoverButton>
            <Link href="/ai-productions" className="transition-all duration-300">
              <InteractiveHoverButton
                className={`bg-[#4F39F6] text-white rounded-full font-medium ${activeItem === 'AI Productions' ? 'ring-2 ring-white/20' : ''}`}
              >
                AI Productions
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

      {/* Mobile Menu Overlay - Now fades in with transparency */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black z-40 md:hidden flex flex-col"
          >
            {/* Safe area for header */}
            <div className="h-[180px]" />

            {/* Mobile Menu Items */}
            <div className="flex flex-col items-start justify-start flex-1 gap-5 px-10 -ml-4 pb-20 pt-0">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleMobileMenuItemClick(item.label)}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`text-[38px] font-medium tracking-[-0.04em] leading-[1.0] transition-colors ${activeItem === item.label ? 'text-[#4F39F6]' : 'text-white'
                      }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}

              {/* Newsletter Link */}
              <button
                onClick={() => {
                  setIsNewsletterModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-[38px] font-medium tracking-[-0.04em] leading-[1.0] transition-colors text-white hover:text-[#4F39F6]"
                >
                  Newsletter Sign-Up
                </motion.div>
              </button>

              {/* AI Productions Link */}
              <Link
                href="/ai-productions"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`text-[38px] font-medium tracking-[-0.04em] leading-[1.0] transition-colors ${activeItem === "AI Productions" ? 'text-[#4F39F6]' : 'text-white'}`}
                >
                  AI Productions
                </motion.div>
              </Link>

              {/* Let's Talk Link */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`text-[38px] font-medium tracking-[-0.04em] leading-[1.0] transition-colors ${activeItem === "Let's Talk" ? 'text-[#4F39F6]' : 'text-white'}`}
                >
                  Let&apos;s Talk
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <NewsletterModal 
        isOpen={isNewsletterModalOpen} 
        onClose={() => setIsNewsletterModalOpen(false)} 
      />
    </nav>
  );
}
