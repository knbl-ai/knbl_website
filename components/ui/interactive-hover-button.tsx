'use client';

import React from 'react';

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
    <button
      onClick={onClick}
      className={`relative overflow-hidden group transition-all duration-200 hover:scale-105 ${className}`}
    >
      {/* Gradient shine effect on hover - uses Tailwind animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shine" />
      </div>

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
