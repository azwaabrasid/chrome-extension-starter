import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import { BUILD_FOLDER } from './utils/configs';
import { buildContentScript } from './utils/plugins/buildContentScript';
import { makeManifest } from './utils/plugins/makeManifest';

const root = resolve(__dirname, 'src');
const pagesDir = resolve(root, 'pages');
const outDir = resolve(__dirname, BUILD_FOLDER);
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  resolve: {
    alias: {},
  },
  plugins: [react(), makeManifest(), buildContentScript()],
  publicDir,
  build: {
    outDir,
    sourcemap: process.env.__DEV__ === 'true',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        devtools: resolve(pagesDir, 'devtools', 'index.html'),
        panel: resolve(pagesDir, 'panel', 'index.html'),
        background: resolve(pagesDir, 'background', 'index.ts'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html'),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
});
