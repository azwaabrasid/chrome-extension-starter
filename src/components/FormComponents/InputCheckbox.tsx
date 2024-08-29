import { forwardRef } from 'react';

import type { FieldError } from 'react-hook-form';

interface InputCheckboxProps
  extends React.PropsWithoutRef<React.InputHTMLAttributes<HTMLInputElement>> {
  className?: string;
  error?: boolean | FieldError;
}

export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ error = false, className = '', ...props }, ref) => (
    <input
      type="checkbox"
      className={`form-input-checkbox ${className} ${error ? 'error' : ''}`}
      ref={ref}
      {...props}
    />
  ),
);
