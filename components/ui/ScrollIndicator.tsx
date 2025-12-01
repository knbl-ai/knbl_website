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
      <div className="w-12 h-16 rounded-full border-2 border-primary-600 flex items-start justify-center p-2">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-2 h-2 bg-primary-600 rounded-full"
        />
      </div>
    </motion.div>
  );
}
