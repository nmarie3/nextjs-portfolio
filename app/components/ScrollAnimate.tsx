'use client';
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export const ScrollAnimate = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 50,
  className = '',
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount:0.1});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration,
        delay,
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
};