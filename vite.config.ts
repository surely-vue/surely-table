import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import docs from './plugin/docs';
import md from './plugin/md';
// eslint-disable-next-line import/no-unresolved
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';

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
        },
      },
    },
  },
  base: './',
  resolve: {
    alias: {
      // moment: 'moment/dist/moment.js',
      '@surely-vue/table': path.join(__dirname, './core/src'),
      vue: './node_modules/vue/dist/vue.runtime.esm-bundler.js',
    },
  },
  server: {
    host: true,
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    Unocss(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
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
