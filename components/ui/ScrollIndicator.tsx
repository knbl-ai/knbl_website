'use client';

import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  onClick?: () => void;
}

export default function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <motion.button
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      animate="initial"
      className="relative flex items-center justify-center w-14 h-14 rounded-full overflow-hidden"
      variants={{
        initial: {
          backgroundColor: "#4F39F6",
          scale: 1
        },
        hover: {
          backgroundColor: "#000000",
          scale: 1.1
        },
        tap: {
          scale: 0.9,
          backgroundColor: "#000000",
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="relative w-full h-full">
        {/* First Arrow (Starts visible, goes way up) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: 0 },
            hover: { y: -120 },
            tap: { y: -110 }
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>

        {/* Second Arrow (Passes through) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: 60 },
            hover: { y: -60 },
            tap: { y: -50 }
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>

        {/* Third Arrow (Enters and stays) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: 120 },
            hover: { y: 0 },
            tap: { y: 10 }
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </motion.button>
  );
}
