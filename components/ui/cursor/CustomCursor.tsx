'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMouseEvents } from './useMouseEvents';
import { useInteractiveElements } from './useInteractiveElements';

export const CustomCursor = () => {
  const [isEnabled] = useState(true);
  const { mousePosition, isHovering, isVisible } = useMouseEvents(isEnabled);

  useInteractiveElements();

  if (!isEnabled || !isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 h-6 w-6 rounded-full bg-primary/20 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-primary mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 10,
          mass: 0.05,
        }}
      />
    </>
  );
};
