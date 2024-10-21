'use client';

import React, { useEffect, useState } from 'react';

import {
  motion,
  useAnimationControls,
  useMotionValue,
  useTransform,
} from 'framer-motion';

import { cn } from '@/lib/utils';

import Icon from '../ui/icon';
import Input from '../ui/input';
import Label from '../ui/label';

const MAX_PASSWORD_LENGTH = 8;

const InputPasswordStrength = () => {
  const [value, setValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // To toggle password visibility
  const [percentage, setPercentage] = useState<number>(0);
  const passwordLength = useMotionValue(value.length);
  const background = useTransform(
    passwordLength,
    [0, 4, 6, MAX_PASSWORD_LENGTH],
    ['#ffcccb', '#ffa07a', '#90ee90', '#32cd32']
  );
  const scaleControls = useAnimationControls();

  const strengthMessages = [
    '',
    'Let’s start strong!',
    'Needs a bit more!',
    'Looking better!',
    'Almost there!',
    'You’re getting stronger!',
    'Great password!',
    'Super secure!',
    'Perfectly secure!',
  ];

  useEffect(() => {
    const val = (value.length / MAX_PASSWORD_LENGTH) * 100;
    setPercentage(val > 100 ? 100 : val);
    passwordLength.set(value.length);

    if (value.length === MAX_PASSWORD_LENGTH) {
      scaleControls.start({
        scale: [1, 0.9, 1.1, 1],
        transition: { duration: 0.5 },
      });
    }
  }, [value, passwordLength, scaleControls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className='relative'
    >
      <motion.div
        layout
        transition={{ duration: 0.1, ease: 'easeInOut' }}
        className='center mx-auto w-96 max-w-full flex-col space-y-2'
      >
        <Label htmlFor='input-password-strength'>
          Input with animated password strength
        </Label>
        <motion.div
          animate={scaleControls}
          className='relative z-0 h-12 w-full overflow-hidden rounded-lg bg-muted p-2 px-3 py-2'
        >
          <div className='m-auto h-full w-full overflow-hidden rounded-lg bg-primary'>
            <Input
              id='input-password-strength'
              onChange={(e) => setValue(e.target.value)}
              placeholder='Enter your password'
              type={showPassword ? 'text' : 'password'}
              autoComplete={showPassword ? 'false' : 'new-password'}
              className='z-10 h-full w-full border-none px-5 pr-12 text-muted-foreground outline-none'
            />
            <Icon
              name={showPassword ? 'eye' : 'eye-closed'}
              size='4'
              className='absolute bottom-0 right-4 top-0 z-20 my-auto size-4 cursor-pointer text-muted-foreground transition-transform hover:text-foreground'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
            <motion.div
              style={{ background }}
              animate={{ width: `${percentage}%` }}
              className={cn('absolute left-0 top-0 -z-10 h-full bg-primary')}
            />
          </div>
        </motion.div>
        <p className='mt-2 text-xs text-muted-foreground'>
          {
            strengthMessages[
              value.length > MAX_PASSWORD_LENGTH
                ? strengthMessages.length - 1
                : value.length
            ]
          }
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InputPasswordStrength;
