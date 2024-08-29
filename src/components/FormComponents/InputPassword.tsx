import { forwardRef } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import { useToggle } from '../../hooks/useToggle';

import type { FieldError } from 'react-hook-form';

interface InputPasswordProps
  extends React.PropsWithoutRef<React.InputHTMLAttributes<HTMLInputElement>> {
  className?: string;
  error?: boolean | FieldError;
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ error = false, className = '', ...props }, ref) => {
    const [visible, toggleVisible] = useToggle();

    return (
      <div className="relative w-full">
        <input
          className={`form-input ${className} ${error ? 'error' : ''}`}
          type={visible ? 'text' : 'password'}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 transform cursor-pointer fill-transparent p-1"
          onClick={toggleVisible}
        >
          {visible ? (
            <BsEye className="h-5 w-5 fill-gray-400" />
          ) : (
            <BsEyeSlash className="h-5 w-5 fill-gray-400" />
          )}
        </button>
      </div>
    );
  },
);
