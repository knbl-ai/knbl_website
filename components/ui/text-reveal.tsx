"use client";

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  className?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 py-44", className)}>
      <div className="mx-auto max-w-[680px] px-4">
        <p className="flex flex-wrap justify-center text-center text-2xl leading-8 tracking-tight">
          {words.map((word, i) => {
            const start = 1 - (i + 1) / words.length;
            const end = 1 - i / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [1, 0]);
  return (
    <span className="relative mx-1 inline-block">
      <span className="absolute inset-0 text-neutral-300">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="relative text-black"
      >
        {children}
      </motion.span>
    </span>
  );
};
