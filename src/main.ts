import 'ant-design-vue/dist/antd.less';
import '@surely-vue/table/style';
import './index.less';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import SurelyTable, { setLicenseKey } from '@surely-vue/table';
import App from './App.vue';
import routes from './routes';
import i18n from './i18n';
import Antd from 'ant-design-vue/es';
import DemoBox from './components/DemoBox.vue';
import clipboard from './directives/clipboard';

setLicenseKey(
  '02bdd0a4a7ca1f45446b6ae0005316fbT1JERVI6MDAwMDAxLEVYUElSWT0zMzE5MzQ5NzYwMDAwMCxET01BSU49c3VyZWx5LXZ1ZS5naXRodWIuaW8sS0VZVkVSU0lPTj0x',
);
const app = createApp(App);
app.use(i18n);
app.use(Antd);
app.use(clipboard);
app.use(
  createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: to => {
      if (to.hash) {
        return { el: to.hash, top: 80, behavior: 'auto' };
      }
    },
  }),
);
app.use(SurelyTable).mount('#app');
app.component('DemoBox', DemoBox);

app.config.globalProperties.$i18n = i18n;
