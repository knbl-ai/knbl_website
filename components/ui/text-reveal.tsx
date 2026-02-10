"use client";

import { ComponentPropsWithoutRef, FC, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  className?: string;
  initialColor?: string;
  revealedColor?: string;
  startEarly?: boolean;
  containerRef?: React.RefObject<any>;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  initialColor = "#B3B3B3",
  revealedColor = "#000000",
  startEarly = false,
  containerRef,
  ...props
}) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const targetRef = containerRef || internalRef;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: startEarly ? ["start 0.92", "start 0.55"] : ["start 0.85", "start 0.5"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    mass: 0.8,
    restDelta: 0.001
  });

  const highestProgress = useMotionValue(0);
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest > highestProgress.get()) {
      highestProgress.set(latest);
    }
  });

  const text = String(children);
  const lines = text.split("\n");
  let globalWordIndex = 0;
  const totalWords = text.split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div ref={internalRef} className={cn("relative z-0", className)} {...props}>
      <div className={cn("flex flex-wrap text-[24px] font-medium leading-[1.4] tracking-[-0.02em] whitespace-normal font-sans",
        className?.includes('text-center') ? 'justify-center' : 'justify-start'
      )}>
        {lines.map((line, lineIdx) => (
          <div key={lineIdx} className={cn("flex flex-wrap",
            className?.includes('text-center') ? 'justify-center w-full' : 'w-full'
          )}>
            {line.split(" ").map((word, i) => {
              if (word === "") return null;
              const currentIndex = globalWordIndex++;
              const start = currentIndex / totalWords;
              const end = start + 1 / totalWords;
              return (
                <Word
                  key={`${lineIdx}-${i}`}
                  progress={highestProgress}
                  range={[start, end]}
                  initialColor={initialColor}
                  revealedColor={revealedColor}
                >
                  {word}
                </Word>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  initialColor: string;
  revealedColor: string;
}

const Word: FC<WordProps> = ({ children, progress, range, initialColor, revealedColor }) => {
  const color = useTransform(progress, range, [initialColor, revealedColor]);

  return (
    <span className="relative mr-[0.25em] last:mr-0 whitespace-nowrap">
      <motion.span style={{ color }}>
        {children}
      </motion.span>
    </span>
  );
};
