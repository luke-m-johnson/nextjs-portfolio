'use client'; // Required for framer-motion in app router

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export const MotionH1 = (props: HTMLMotionProps<'h1'>) => {
  return <motion.h1 {...props} />;
};
