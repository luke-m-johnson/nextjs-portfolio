'use client';

import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

type MotionH1Props = ComponentPropsWithoutRef<'h1'> & MotionProps;

export const MotionH1 = (props: MotionH1Props) => {
  return <motion.h1 {...props} />;
};
