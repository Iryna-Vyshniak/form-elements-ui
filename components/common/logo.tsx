'use client';

import React, { CSSProperties, ReactNode } from 'react';

import { Variants } from 'framer-motion';
import * as motion from 'framer-motion/client';

import { BASE_ITEM_VARIANTS, BASE_TRANSITION } from '@/lib/motion-variants';

const Logo = ({
  text,
  fontSize = 1.5,
  radius = 6,
  itemVariant,
}: {
  text: string;
  fontSize?: number;
  radius?: number;
  itemVariant?: Variants;
}) => {
  const letters = text.split('');
  const totalLetters = letters.length;

  const finalTransition = {
    ...BASE_TRANSITION,
    duration: 20,
  };

  const containerVariants = {
    visible: { rotate: 360 },
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...(itemVariant ?? {}),
  };

  return (
    <motion.div
      className='custom-transition group relative tracking-widest'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, idx) => (
        <motion.span
          aria-hidden='true'
          key={`${idx}-${letter}`}
          variants={itemVariants}
          className='text-background-foreground absolute left-1/2 top-1/2 inline-block text-balance font-mono font-medium drop-shadow-[0_0.02rem_0.02rem_var(--background)] hover:text-background hover:drop-shadow-[0_0.02rem_0.02rem_var(--text-background)] focus:text-accent-foreground'
          style={
            {
              '--index': idx,
              '--total': totalLetters,
              '--radius': radius ?? 6,
              '--font-size': fontSize ?? 1.5,
              fontSize: `calc(var(--font-size, 2) * 1rem)`,
              transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
              transformOrigin: 'center',
            } as React.CSSProperties
          }
        >
          {letter}
        </motion.span>
      ))}
      <span className='sr-only'>{text}</span>
    </motion.div>
  );
};

export default Logo;
