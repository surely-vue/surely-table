import path from 'path';
import vue from '@vitejs/plugin-vue';
import md from './plugin/md';
import docs from './plugin/docs';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import legacy from '@vitejs/plugin-legacy';

/**
 * @type {import('vite').UserConfig}
 */
export default {
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
    WindiCSS(),
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
        modifyVars: {
          'root-entry-name': 'variable',
        },
        javascriptEnabled: true,
        // includePaths: ["node_modules/"],
      },
    },
  },
};
