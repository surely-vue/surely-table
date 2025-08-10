// @ts-check

import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import { extendsConfig } from './index.js'
import lib from './vite.config.lib.js'

/**
 * @type {import('./index.d.ts').GetUserConfig}
 */
export default dirname =>
  extendsConfig(
    lib(dirname),
    defineConfig({
      plugins: [checker({ typescript: true })],
    }),
  )
