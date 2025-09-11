import SurelyTable, { setLicenseKey } from '@surely-vue/table';
import '@surely-vue/table/style';
import Antd, { Modal } from 'ant-design-vue';
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
  'dcde100698486c93766cc491b53562a4T1JERVI6MTAwMDAwLEVYUElSWT00ODQwNTYwMDAwMDAwLERPTUFJTj1zdXJlbHl2dWUuY29tLFVMVElNQVRFPTAsS0VZVkVSU0lPTj0x',
);

if (process.env.NODE_ENV === 'production' && !location.hostname.includes('surelyvue.com')) {
  Modal.confirm({
    title: '提示',
    content: '这个域名一点都不 cool，请使用最新 surelyvue.com 域名访问',
    onOk: () => {
      location.href = 'https://surelyvue.com';
    },
    onCancel: () => {
      alert('我真的会下线的，请使用最新 surelyvue.com 域名访问');
    },
  });
}

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
