'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-2';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-white text-primary-600 hover:bg-neutral-50',
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
