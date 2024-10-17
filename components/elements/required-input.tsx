'use client';

import React from 'react';

import * as motion from 'framer-motion/client';

import { validateEmail } from '@/lib/utils';

import Input from '../ui/input';
import Label from '../ui/label';

const RequiredInput = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className='space-y-2'
    >
      <Label htmlFor='required-input'>
        Required input <span className='text-danger'>*</span>
      </Label>
      <Input
        id='required-input'
        placeholder='Email'
        type='email'
        required
        validate={validateEmail}
      />
    </motion.div>
  );
};

export default RequiredInput;
