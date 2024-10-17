'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className='ml-3 flex flex-col justify-center'>
      <input
        type='checkbox'
        name='theme-toggle'
        id='theme-toggle'
        className='peer sr-only'
        checked={resolvedTheme === 'light'}
        onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        aria-label='Toggle dark mode'
      />
      <label
        className='peer-focus-visible:ring-ring/20 relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-background p-2 ring-offset-background transition-shadow peer-focus-visible:border-ring peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2'
        htmlFor='theme-toggle'
        aria-hidden='true'
      >
        <Moon
          className={cn(
            'h-5 w-5 transition-all',
            resolvedTheme === 'dark' ? 'block' : 'hidden'
          )}
        />
        <Sun
          className={cn(
            'h-5 w-5 transition-all',
            resolvedTheme === 'dark' ? 'hidden' : 'block'
          )}
        />

        <span className='sr-only'>Switch to light / dark version</span>
      </label>
    </div>
  );
};

export default ThemeToggle;
