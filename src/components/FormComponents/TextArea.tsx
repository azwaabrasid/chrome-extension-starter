import { forwardRef } from 'react';

import type { FieldError } from 'react-hook-form';

interface TextAreaProps
  extends React.PropsWithoutRef<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  > {
  className?: string;
  error?: boolean | FieldError;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error = false, className = '', ...props }, ref) => (
    <textarea
      className={`form-input ${className} ${error ? 'error' : ''}`}
      ref={ref}
      {...props}
    />
  ),
);
