'use client';

import { motion } from 'framer-motion';

interface InteractiveHoverButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function InteractiveHoverButton({
  children = 'Hover Me',
  className = '',
  onClick,
}: InteractiveHoverButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Animated gradient shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: 'none' }}
      />

      {/* Content */}
      <span className="relative z-10 inline-flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
}
