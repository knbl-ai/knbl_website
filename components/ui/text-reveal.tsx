"use client";

import { ComponentPropsWithoutRef, FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  className?: string;
  initialColor?: string;
  revealedColor?: string;
  startEarly?: boolean;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  initialColor = "#B3B3B3",
  revealedColor = "#000000",
  startEarly = false,
  ...props
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: startEarly ? ["start 0.95", "end 0.5"] : ["start 0.85", "end 0.5"],
  });

  const text = String(children);
  const lines = text.split("\n");
  let globalWordIndex = 0;
  const totalWords = text.split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div ref={targetRef} className={cn("relative z-0", className)} {...props}>
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
                  progress={scrollYProgress}
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
  progress: any;
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
