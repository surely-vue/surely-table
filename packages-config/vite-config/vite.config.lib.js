// @ts-nocheck

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

/**
 * @type {import('./index.d.ts').GetUserConfig}
 */
export default dirname =>
  defineConfig(({ mode }) => {
    const pkg = JSON.parse(readFileSync(resolve(dirname, './package.json'), 'utf-8'))
    const isDev = mode === 'development'
    return {
      plugins: [
        dts({
          outDir: 'dist',
          compilerOptions: { declarationMap: isDev },
          include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.d.ts'],
          insertTypesEntry: true,
          skipDiagnostics: false,
        }),
      ],
      build: {
        cssCodeSplit: true,
        lib: {
          entry: {
            lib: resolve(dirname, 'src/index.ts'),
          },
          formats: ['umd', 'es', 'iife'],
          name: pkg.globalName,
          fileName: (format, entryName) => {
            if (format === 'umd') {
              return `${entryName}.umd.js`
            }
            if (format === 'es') {
              return `${entryName}.esm.js`
            }
            if (format === 'iife') {
              return `${entryName}.min.js`
            }
          },
        },
        rollupOptions: {
          external: isDev
            ? id => {
                if (pkg.peerDependencies && id in pkg.peerDependencies) {
                  return true
                }
                if (/^@(surely-vue)\//.test(id)) {
                  return true
                }
                return false
              }
            : pkg.peerDependencies && Object.keys(pkg.peerDependencies),
          output: {
            inlineDynamicImports: false,
            manualChunks(id) {
              if (id.includes('.css')) {
                return 'lib'
              }
            },
            exports: 'named',
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
        sourcemap: isDev ? 'inline' : undefined,
        minify: !isDev,
        emptyOutDir: !isDev,
        watch: process.argv.includes('--watch')
          ? {
              buildDelay: 300,
            }
          : null,
      },
      resolve: {
        alias: {
          '@': resolve(dirname, './src'),
        },
      },
    }
  })
