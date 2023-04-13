// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import '@surely-vue/table/style';
import './index.less';
import { createApp, version } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import SurelyTable, { setLicenseKey } from '@surely-vue/table';
import App from './App.vue';
import routes from './routes';
import i18n from './i18n';
import Antd from 'ant-design-vue/es';
import DemoBox from './components/DemoBox.vue';
import clipboard from './directives/clipboard';

setLicenseKey(
  'bd8e9bae80c43b524960987020b1f47dT1JERVI6MDAwMDEsRVhQSVJZPTMzMjI3NzEyMDAwMDAwLERPTUFJTj1zdXJlbHkuY29vbCxLRVlWRVJTSU9OPTE=',
);
console.log('vue version', version);
// eslint-disable-next-line import/no-named-as-default-member
console.log('ant-design-vue version', Antd.version);
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
        return { el: to.hash, top: 200, behavior: 'auto' };
      } else {
        return { top: 0, behavior: 'auto' };
      }
    },
  }),
);
app.use(SurelyTable).mount('#app');
app.component('DemoBox', DemoBox);
