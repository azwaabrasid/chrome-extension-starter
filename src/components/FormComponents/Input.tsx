import { forwardRef } from 'react';

import type { FieldError } from 'react-hook-form';

interface InputProps
  extends React.PropsWithoutRef<React.InputHTMLAttributes<HTMLInputElement>> {
  type?: 'text' | 'number';
  className?: string;
  error?: boolean | FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, className = '', type = 'text', ...props }, ref) => (
    <input
      className={`form-input ${className} ${error ? 'error' : ''}`}
      type={type}
      ref={ref}
      {...props}
    />
  ),
);
