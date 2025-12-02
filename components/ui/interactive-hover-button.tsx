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
      style={{
        background: 'linear-gradient(90deg, var(--bg-color, rgb(79, 57, 246)), var(--bg-color, rgb(79, 57, 246)))',
      }}
    >
      {/* Gradient shine effect on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          style={{
            transform: 'translateX(-100%)',
            animation: 'none',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.animation = 'shine 0.5s ease-in-out';
          }}
        />
      </div>

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        button:hover > div > div {
          animation: shine 0.5s ease-in-out;
        }
      `}</style>
    </button>
  );
}
