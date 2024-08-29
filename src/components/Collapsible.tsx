import { AnimatePresence, motion } from 'framer-motion';

import { collapsible } from '../utils/motion';

interface CollapsibleProps {
  show: boolean;
  children?: React.ReactNode;
  initial?: boolean;
  containerClassName?: string;
  className?: string;
}

export const Collapsible = ({
  show,
  children,
  initial = false,
  containerClassName = '',
  className = '',
}: CollapsibleProps) => (
  <AnimatePresence initial={initial}>
    {show && (
      <motion.div className={containerClassName} {...collapsible}>
        <div className={className}>{children}</div>
      </motion.div>
    )}
  </AnimatePresence>
);
