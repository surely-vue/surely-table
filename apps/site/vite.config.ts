import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import docs from './plugin/docs';
import md from './plugin/md';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  build: {
    outDir: 'dist',
    cssCodeSplit: false,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vuex', 'vue-router', 'vue-i18n'],
          antdv: ['ant-design-vue', '@ant-design/icons-vue'],
          dayjs: ['dayjs'],
          // surely: [path.join(__dirname, './core/src')],
        },
      },
      plugins: [
        getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          allowAllFormats: true,
          plugins: [['@babel/plugin-transform-object-rest-spread', { useBuiltIns: true }]],
          compact: false,
        }) as any,
      ],
    },
  },
  base: './',
  resolve: {
    alias: {
      // moment: 'moment/dist/moment.js',
      '@surely-vue/table': path.join(__dirname, './core/src'),
      vue: './node_modules/vue/dist/vue.runtime.esm-browser.prod.js',
    },
  },
  server: {
    host: true,
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11', 'Chrome 63'],
      modernPolyfills: true,
    }),
    Unocss(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('my-example'),
        },
      },
    }),
  ],
  optimizeDeps: {
    include: ['@ant-design/icons-vue', 'lodash-es', 'dayjs', 'vue', 'vue-router', 'vue-i18n'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
