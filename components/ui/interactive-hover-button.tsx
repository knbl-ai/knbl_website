'use client';

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      {/* White overlay that appears on hover */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Initial content with text */}
      <div className="relative flex items-center justify-center">
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* Hover state content with arrow - slides in from right */}
      <div className="absolute inset-0 flex translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span className="text-black">{children}</span>
        <ArrowRight className="h-4 w-4 text-black" />
      </div>
    </button>
  );
}
