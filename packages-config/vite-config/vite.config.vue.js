// @ts-check

import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
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
    defineConfig(({ mode }) => {
      const pkg = JSON.parse(readFileSync(resolve(dirname, './package.json'), 'utf-8'))
      return {
        plugins: [vue(), checker({ vueTsc: { root: dirname } })],
        build: {
          cssCodeSplit: true,
          rollupOptions: {
            output: {
              exports: 'named',
              name: pkg.globalName,
              globals: {
                vue: 'Vue',
                'ant-design-vue/es/spin': 'antd.Spin',
                'ant-design-vue/es/pagination': 'antd.Pagination',
                'ant-design-vue/es/empty': 'antd.Empty',
                'ant-design-vue/es/tooltip': 'antd.Tooltip',
                'ant-design-vue/es/dropdown': 'antd.Dropdown',
                'ant-design-vue/es/button': 'antd.Button',
                'ant-design-vue/es/menu': 'antd.Menu',
              },
            },
          },
        },
      }
    }),
  )
