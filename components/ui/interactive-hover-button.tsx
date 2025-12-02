'use client';

import React, { useState } from 'react';
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
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Animated gradient shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovering ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </motion.button>
  );
}
