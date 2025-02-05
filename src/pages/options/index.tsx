import { createRoot } from 'react-dom/client';

import { Options } from './Options';

import '../../styles/index.scss';

(() => {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error("Can't find Options root element.");
  const root = createRoot(rootContainer);
  root.render(<Options />);
})();
