'use client';

import React from 'react';

import { validateEmail } from '@/lib/utils';

import Input from '../ui/input';
import Label from '../ui/label';

const RequiredInput = () => {
  return (
    <div className='space-y-2'>
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
    </div>
  );
};

export default RequiredInput;
