import dynamic from 'next/dynamic';
import Link from 'next/link';

import Logo from './logo';

const ThemeToggle = dynamic(() => import('./theme-toggle'));

const Header = () => {
  return (
    <header className='sticky left-0 top-0 z-50 row-start-1 mb-16 w-full bg-accent bg-opacity-10 bg-clip-padding px-4 py-2 shadow-sm backdrop-blur-sm backdrop-filter sm:px-6'>
      <div className='mx-auto flex w-full max-w-5xl items-center justify-between'>
        {' '}
        <Link
          href='/'
          aria-label='Home'
          className='custom-transition peer-focus-visible:ring-ring/20 relative inline-flex cursor-pointer items-center justify-center rounded-lg border border-transparent bg-accent p-2 ring-offset-background transition-shadow focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
        >
          <Logo fontSize={0.5} radius={4} text=' form • elements • ui • ' />

          <span className='custom-transition text-background-foreground font-bold hover:text-background focus:text-accent-foreground'></span>
        </Link>
        <nav>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
