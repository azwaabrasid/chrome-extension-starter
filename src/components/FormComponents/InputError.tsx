import { Collapsible } from '../Collapsible';

import type { FieldError } from 'react-hook-form';

interface InputErrorProps {
  error?: FieldError;
  errorText?: string;
  className?: string;
}

export const InputError = ({
  error,
  errorText,
  className = '',
}: InputErrorProps) => (
  <Collapsible
    show={!!errorText || !!error}
    className={`form-input-error pt-1.5 ${className}`}
  >
    {errorText || error?.message || 'Field input error.'}
  </Collapsible>
);
