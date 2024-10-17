'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, htmlFor, ...props }, ref) => (
  <label
    ref={ref}
    htmlFor={htmlFor}
    className={cn('text-sm font-medium text-foreground', className)}
    {...props}
  />
));

Label.displayName = 'Label';

export default Label;
