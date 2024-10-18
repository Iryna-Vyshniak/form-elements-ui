import React from 'react';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='footer row-start-3 w-full'>
      <div className='mx-auto flex w-full max-w-5xl items-center justify-between text-xs'>
        {' '}
        <a
          className='custom-transition custom-transition peer-focus-visible:ring-ring/20 relative flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-background p-2 text-xs ring-offset-background transition-shadow hover:text-accent hover:underline hover:underline-offset-4 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
          href='https://github.com/Iryna-Vyshniak'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='https://nextjs.org/icons/globe.svg'
            alt='Globe icon'
            width={16}
            height={16}
          />
          <span>Go to GitHub → </span>
        </a>{' '}
        <p>Form Elements UI - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
