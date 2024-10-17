import * as motion from 'framer-motion/client';

import InputWithHelper from '@/components/elements/input-with-helper';
import RequiredInput from '@/components/elements/required-input';
import SimpleEmailInput from '@/components/elements/simple-email-input';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className='[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12'
    >
      <SimpleEmailInput />
      <RequiredInput />
      <InputWithHelper />
    </motion.main>
  );
}
