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
  containerRef?: React.RefObject<HTMLElement | null>;
  biggerFirstLine?: boolean;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  initialColor = "#B3B3B3",
  revealedColor = "#000000",
  startEarly = false,
  containerRef,
  biggerFirstLine = false,
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
  const totalWords = text.replace(/\*\*/g, '').split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div ref={internalRef} className={cn("relative z-0", className)} {...props}>
      <div className={cn("w-full leading-[1.4] tracking-[-0.02em] whitespace-normal font-sans",
        className?.includes('text-center') ? 'text-center' : 'text-left'
      )}>
        {lines.map((line, lineIdx) => (
          <div key={lineIdx} className={cn("inline-flex flex-wrap",
            className?.includes('text-center') ? 'justify-center w-full' : 'w-full',
            biggerFirstLine && lineIdx === 0 ? "text-[28px] md:text-[36px] font-bold mb-4 md:mb-6" : ""
          )}>
            {(() => {
              let isBoldMode = false;
              return line.split(" ").map((word, i) => {
                if (word === "") return null;

                const markerCount = (word.match(/\*\*/g) || []).length;
                if (word.startsWith("**")) isBoldMode = true;

                const isThisWordBold = isBoldMode;
                const displayWord = word.replace(/\*\*/g, '');

                if (word.endsWith("**") || word.match(/\*\*[.,!?;:]+$/) || markerCount === 2) {
                  isBoldMode = false;
                }

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
                    className={isThisWordBold ? "font-bold" : ""}
                  >
                    {displayWord}
                  </Word>
                );
              });
            })()}
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
  className?: string;
}

const Word: FC<WordProps> = ({ children, progress, range, initialColor, revealedColor, className }) => {
  const color = useTransform(progress, range, [initialColor, revealedColor]);

  return (
    <span className={cn("relative mr-[0.25em] last:mr-0 whitespace-nowrap", className)}>
      <motion.span style={{ color }}>
        {children}
      </motion.span>
    </span>
  );
};
