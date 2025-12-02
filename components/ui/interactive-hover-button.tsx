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
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="initial"
      animate="initial"
      variants={{
        initial: { opacity: 1 },
        hover: { opacity: 1 },
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovering ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={{
          textShadow: isHovering
            ? '0 0 20px rgba(255,255,255,0.3)'
            : '0 0 0px rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}
