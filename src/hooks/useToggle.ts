import { useState, useCallback, useMemo } from 'react';

export const useToggle = (
  init = false,
): [boolean, () => void, React.Dispatch<boolean>] => {
  const [state, setState] = useState(init);
  const toggle = useCallback(() => setState((prev) => !prev), []);

  return useMemo(() => [state, toggle, setState], [state, toggle]);
};
