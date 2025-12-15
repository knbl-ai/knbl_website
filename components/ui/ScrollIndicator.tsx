'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-14 h-14 bg-[#5B4DFF] rounded-full flex items-center justify-center shadow-lg">
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
      </div>
    </motion.div>
  );
}
