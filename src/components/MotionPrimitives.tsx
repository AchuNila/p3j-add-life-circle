import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'motion/react';

export const EASE_CALM = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.12,
} as const;

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  immediate?: boolean;
}

export function FadeUp({
  children,
  className = '',
  delay = 0,
  duration = 0.52,
  yOffset = 16,
  immediate = false,
}: FadeUpProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay, ease: EASE_CALM }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration, delay, ease: EASE_CALM }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number = 0.075) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.04,
    },
  }),
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: EASE_CALM,
    },
  },
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  immediate?: boolean;
}

export function StaggerGroup({
  children,
  className = '',
  staggerDelay = 0.075,
  immediate = false,
}: StaggerGroupProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        variants={staggerContainerVariants}
        custom={staggerDelay}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      custom={staggerDelay}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export function StaggerItem({
  children,
  className = '',
  hoverLift = false,
}: StaggerItemProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={hoverLift ? { y: -3 } : undefined}
      transition={{ duration: 0.25, ease: EASE_CALM }}
      className={`${className} ${
        hoverLift
          ? 'transition-[box-shadow,border-color] duration-300 hover:shadow-[0_12px_28px_-10px_rgba(36,75,59,0.14)]'
          : ''
      }`}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxFrameProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function ParallaxFrame({
  children,
  className = '',
  offset = 10,
}: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full scale-[1.035]">
        {children}
      </motion.div>
    </div>
  );
}
