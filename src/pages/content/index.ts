import { MESSAGE } from '../../utils/constants';

import type { Message } from '../../types';

console.info('Content script running.');

// Main message listener event controller.
chrome.runtime.onMessage.addListener(
  async (message: Message, _sender, _sendResponse) => {
    switch (message.name) {
      case MESSAGE.MESSAGE_TO_CONTENT: {
        console.info('Message received by content script.');
        break;
      }
      default:
        console.error(`Unhandled message: ${message.name}`);
    }
  },
);

// Code that we want to run immediately on load.
(async () => {
  // Write code here.
})();
