import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Comfortaa } from 'next/font/google';

import { cn } from '@/lib/utils';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import ThemeProvider from '@/components/common/theme-provider';

import './globals.css';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#1a202c',
};

const fontSans = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Form Elements UI',
  description:
    'A library of reusable and customizable form components built with Next.js and TailwindCSS. Flexible and easy to integrate into any modern web application.',
  keywords: [
    'Next.js',
    'TailwindCSS',
    'Form Components',
    'UI library',
    'Reusable Components',
    'Customizable Forms',
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('bg-background antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='remove-scrollbar grid min-h-screen w-full grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 overflow-hidden supports-[overflow:clip]:overflow-clip'>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
