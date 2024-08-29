import { forwardRef } from 'react';

import type { FieldError } from 'react-hook-form';

interface SelectProps
  extends React.PropsWithoutRef<React.SelectHTMLAttributes<HTMLSelectElement>> {
  className?: string;
  error?: boolean | FieldError;
  options?: string[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error = false, className = '', options = [], ...props }, ref) => (
    <select
      className={`form-input ${className} ${error ? 'error' : ''} cursor-pointer`}
      ref={ref}
      {...props}
    >
      {options.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}
    </select>
  ),
);
