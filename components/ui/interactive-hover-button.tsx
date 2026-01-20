'use client';

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border-none bg-primary-600 text-center font-semibold text-white transition-colors duration-300 hover:bg-[#8B8BFF]",
        className
      )}
      {...props}
    >
      <motion.div
        className="relative flex items-center justify-center py-3 px-8"
        variants={{
          initial: { paddingLeft: "32px", paddingRight: "32px" },
          hover: {
            paddingLeft: "52px", // Expands the button to the left
            paddingRight: "32px",
            transition: { duration: 0.6, ease: "easeInOut" }
          }
        }}
      >
        {/* Invisible anchor to lock button dimensions */}
        <span className="invisible block h-6 whitespace-nowrap">
          {children}
        </span>

        {/* Single Rail System - Locked synchronization */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={{
              initial: { x: "0%" },
              hover: {
                x: "-66.66%",
                transition: { duration: 0.8, ease: "easeInOut" }
              }
            }}
            className="flex w-[300%] h-full"
          >
            {/* First Pass: Initial Centered Text */}
            <div className="w-1/3 h-full flex items-center justify-center">
              <span className="whitespace-nowrap">{children}</span>
            </div>

            {/* Second Pass: Hover Centered Text */}
            <div className="w-1/3 h-full flex items-center justify-center px-[10px]">
              <span className="whitespace-nowrap">{children}</span>
            </div>

            {/* Third Pass: Hover Centered Text */}
            <div className="w-1/3 h-full flex items-center justify-center px-[10px] gap-2">
              <span className="whitespace-nowrap">{children}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.button>
  );
}
