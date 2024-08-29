import * as fs from 'fs';
import * as path from 'path';

import { PluginOption } from 'vite';

import manifest from '../../src/manifest';
import { colorLog } from '../colorLog';

const { resolve } = path;

const outDir = resolve(__dirname, '..', '..', 'public');

export const makeManifest = (): PluginOption => ({
  name: 'make-manifest',
  buildEnd() {
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    }

    const manifestPath = resolve(outDir, 'manifest.json');

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    colorLog(`Manifest file copy complete: ${manifestPath}`, 'success');
  },
});
