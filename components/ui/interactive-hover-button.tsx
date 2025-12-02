'use client';

import React, { useState } from 'react';

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
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden transition-all duration-200 hover:scale-105 ${className}`}
    >
      {/* Gradient shine effect - animates when hovering */}
      <div
        className={`absolute inset-0 overflow-hidden bg-gradient-to-r from-transparent via-white/50 to-transparent ${
          isHovering ? 'animate-shine' : ''
        }`}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
