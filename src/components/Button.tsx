import { BiLoader } from 'react-icons/bi';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  className?: string;
}

export const Button = ({
  loading = false,
  loadingText,
  className = '',
  children,
  ...props
}: ButtonProps) => (
  <button
    className={`form-btn relative z-0 overflow-hidden ${className} ${
      loading ? 'loading' : ''
    }`}
    {...props}
  >
    {loading ? (
      <div className="absolute inset-0 flex items-center justify-center">
        <BiLoader className="animate-spin-slow h-[22px] w-[22px]" />
        {loadingText && <div className="ml-3">{loadingText}</div>}
      </div>
    ) : (
      children
    )}
  </button>
);
