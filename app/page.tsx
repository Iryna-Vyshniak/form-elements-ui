import * as motion from 'framer-motion/client';

import { BLUR_VARIANT } from '@/lib/motion-variants';

import Logo from '@/components/common/logo';
import InputWithHelper from '@/components/elements/input-with-helper';
import RequiredInput from '@/components/elements/required-input';
import SimpleEmailInput from '@/components/elements/simple-email-input';
import TagInput from '@/components/elements/tag-input';

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ top: '0%' }}
        animate={{ top: '-100%' }}
        transition={{ duration: 20, delay: 0.8, ease: 'easeInOut' }}
        className='absolute top-0 z-[100] flex h-screen w-screen items-center justify-center bg-accent'
      >
        <Logo
          fontSize={1.2}
          radius={7}
          itemVariant={BLUR_VARIANT}
          text='form • elements • ui • '
        />
      </motion.div>{' '}
      <main className='[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-2 [&>*]:py-8 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12'>
        <SimpleEmailInput />
        <RequiredInput />
        <InputWithHelper />
        <TagInput />
      </main>
    </>
  );
}
