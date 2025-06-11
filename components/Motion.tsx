'use client';

import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

// Extend props from a regular <h1> plus motion
export const MotionH1 = (props: ComponentPropsWithoutRef<'h1'>) => {
  return <motion.h1 {...props} />;
};
