'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  validate?: (value: string) => string | null; // Custom validation
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = 'text', errorMessage, validate, required, ...props },
    ref
  ) => {
    const [inputError, setInputError] = useState<string | null>(null);
    const [touched, setTouched] = useState<boolean>(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setTouched(true); // The input was "touched" by the user
      const value = event.target.value.trim();

      // Mandatory check
      if (required && !value) {
        setInputError('This field is required');
        return;
      }

      // If there is a custom validation, we check the entered value
      if (validate) {
        const validationError = validate(value);
        setInputError(validationError);
      } else {
        setInputError(null); // If there is no custom validation, we reset the error
      }
    };

    const baseClasses =
      'placeholder:text-muted-foreground/70 focus-visible:ring-ring/30 flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const searchClasses =
      type === 'search'
        ? '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
        : null;

    const fileClasses =
      type === 'file'
        ? 'text-muted-foreground/70 p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground'
        : null;

    return (
      <div className='flex w-full flex-col space-y-1'>
        <input
          type={type}
          className={cn(
            baseClasses,
            searchClasses,
            fileClasses,
            touched && inputError // If there is an error after the interaction
              ? 'border-danger focus-visible:border-danger'
              : touched && !inputError && (validate || required) // Turns green only if there is validation or the field is required
                ? 'border-success focus-visible:border-success'
                : '', // Remains default if there are no errors and no validation is required
            className
          )}
          ref={ref}
          required={required} // Field remains required if required is passed
          aria-invalid={!!(errorMessage || inputError)}
          onBlur={handleBlur} // Validate when exiting the field
          {...props}
        />
        {touched &&
          inputError && ( // Display the error, if there is one
            <p className='text-sm text-danger'>{inputError}</p>
          )}
        {touched &&
          !inputError &&
          errorMessage && ( // Display a custom error
            <p className='text-sm text-danger'>{errorMessage}</p>
          )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
