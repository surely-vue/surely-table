import SurelyTable, { setLicenseKey } from '@surely-vue/table';
import '@surely-vue/table/style';
import Antd from 'ant-design-vue';
import 'uno.css';
import { createApp, version } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import DemoBox from './components/DemoBox.vue';
import clipboard from './directives/clipboard';
import i18n from './i18n';
import './index.less';
import routes from './routes';

setLicenseKey(
  'bd8e9bae80c43b524960987020b1f47dT1JERVI6MDAwMDEsRVhQSVJZPTMzMjI3NzEyMDAwMDAwLERPTUFJTj1zdXJlbHkuY29vbCxLRVlWRVJTSU9OPTE=',
);

console.log('vue version', version);
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
