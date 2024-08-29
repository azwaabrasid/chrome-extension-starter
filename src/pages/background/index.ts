import { MESSAGE } from '../../utils/constants';

import type { Message } from '../../types';

console.info('Background script running.');

// Main message listener event controller.
chrome.runtime.onMessage.addListener(
  async (message: Message, sender, sendResponse) => {
    switch (message.name) {
      case MESSAGE.MESSAGE_TO_BACKGROUND: {
        const tabId = sender.tab?.id;

        // TabId is required only if we need to send any information
        // back to content script. Otherwise just run what's needed
        // in background script.
        if (tabId) console.info(tabId);
        break;
      }
      default:
        console.error(`Unhandled message: ${message.name}`);
    }
  },
);

// Url change listener. This is the first detection that a url has been loaded,
// also it is useful to detect modals opening that involves url changes.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const url = tab.url;
  if (!url || changeInfo.status !== 'complete') return;

  // At this point we can check if the url matches the pattern we are interested in.
  console.info(url);
});
