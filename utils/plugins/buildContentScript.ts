import { resolve } from 'path';

import { PluginOption, build } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

import { colorLog } from '../colorLog';
import { BUILD_FOLDER } from '../configs';

const packages = [
  {
    content: resolve(__dirname, '../../', 'src/pages/content/index.ts'),
  },
];

const outDir = resolve(__dirname, '../../', BUILD_FOLDER);

export const buildContentScript = (): PluginOption => ({
  name: 'build-content',
  async buildEnd() {
    for (let i = 0; i < packages.length; i++) {
      /* eslint no-await-in-loop: "off" */
      await build({
        publicDir: false,
        plugins: [cssInjectedByJsPlugin()],
        build: {
          outDir,
          sourcemap: process.env.__DEV__ === 'true',
          emptyOutDir: false,
          rollupOptions: {
            input: packages[i],
            output: {
              entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
            },
          },
        },
        configFile: false,
      });
    }

    colorLog('Content code build sucessfully!', 'success');
  },
});
