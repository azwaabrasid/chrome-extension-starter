import { createRoot } from 'react-dom/client';

import { Popup } from './Popup';

import '../../styles/index.scss';

(() => {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error("Can't find Popup root element.");
  const root = createRoot(rootContainer);
  root.render(<Popup />);
})();
