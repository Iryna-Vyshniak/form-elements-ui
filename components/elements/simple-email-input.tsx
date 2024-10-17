'use client';

import React from 'react';

import * as motion from 'framer-motion/client';

import { validateEmail } from '@/lib/utils';

import Input from '../ui/input';
import Label from '../ui/label';

const SimpleEmailInput = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className='space-y-2'
    >
      <Label htmlFor='email'>Email</Label>
      <Input
        id='email'
        placeholder='Enter your email'
        type='email'
        validate={validateEmail}
      />
    </motion.div>
  );
};

export default SimpleEmailInput;
