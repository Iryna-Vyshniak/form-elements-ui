import * as motion from 'framer-motion/client';

import Input from '../ui/input';
import Label from '../ui/label';

const InputWithHelper = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className='space-y-2'
    >
      <Label htmlFor='text-helper'>Input with helper text</Label>
      <Input
        id='text-helper'
        placeholder='Enter your name'
        type='text'
        aria-describedby='input-with-helper'
      />
      <p
        id='input-with-helper'
        className='mt-2 text-xs text-muted-foreground'
        role='region'
        aria-live='polite'
      >
        We won`t share your information with anyone
      </p>
    </motion.div>
  );
};

export default InputWithHelper;
