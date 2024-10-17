'use client';

import React from 'react';

import { validateEmail } from '@/lib/utils';

import Input from '../ui/input';
import Label from '../ui/label';

const SimpleEmailInput = () => {
  return (
    <div className='space-y-2'>
      <Label htmlFor='email'>Email</Label>
      <Input
        id='email'
        placeholder='Enter your email'
        type='email'
        validate={validateEmail}
      />
    </div>
  );
};

export default SimpleEmailInput;
