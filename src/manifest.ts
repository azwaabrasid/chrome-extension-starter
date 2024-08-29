import { HOST_URL } from './utils/configs';

const manifest = {
  manifest_version: 3,
  // https://developer.chrome.com/docs/extensions/reference/manifest/key
  // key: 'uniqueIdOfTheExtension',
  version: '0.0.0',
  name: 'Chrome Extension Starter',
  description: 'Chrome extension starter development kit.',
  options_ui: {
    page: 'src/pages/options/index.html',
    open_in_tab: true,
  },
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png',
  },
  icons: {
    '128': 'icon-128.png',
  },
  permissions: ['identity', 'storage', 'activeTab', 'tabs', 'scripting'],
  content_scripts: [
    {
      matches: [`${HOST_URL}/*`, '<all_urls>'],
      js: ['src/pages/content/index.js'],
    },
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['icon-128.png', 'icon-34.png'],
      matches: [],
    },
  ],
};

export default manifest;
