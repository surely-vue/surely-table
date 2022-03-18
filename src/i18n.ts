import { createI18n } from 'vue-i18n';
import enUS from './locale/en-US';
import zhCN from './locale/zh-CN';

const isZhCN = !!localStorage.getItem('zh-CN');
const i18n = createI18n({
  legacy: false,
  locale: isZhCN ? 'zh-CN' : 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
});

export default i18n;
