<template>
  <a-style-provider :hash-priority="hashPriority">
    <a-config-provider :locale="locale" :theme="themeConfig">
      <router-view />
      <s-table v-show="false" />
    </a-config-provider>
  </a-style-provider>
</template>

<script lang="ts">
import { computed, defineComponent, provide, watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useMediaQuery from './hooks/useMediaQuery';
import { useProvideGlobalConfig } from './context';
import enUS from 'ant-design-vue/locale/en_US';
import zhCN from 'ant-design-vue/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { theme as antdTheme } from 'ant-design-vue';
import { setConfig } from '@surely-vue/table';
// function isZhCN(name: string) {
//   return /-cn\/?$/.test(name);
// }
export type ThemeName = '' | 'light' | 'dark' | 'compact';
const getAlgorithm = (themes: ThemeName[] = []) =>
  themes
    .filter(theme => !!theme)
    .map(theme => {
      if (theme === 'dark') {
        return antdTheme.darkAlgorithm;
      }
      if (theme === 'compact') {
        return antdTheme.compactAlgorithm;
      }
      return antdTheme.defaultAlgorithm;
    });

export default defineComponent({
  setup() {
    const i18n = useI18n();
    const colSize = useMediaQuery();
    const isMobile = computed(() => colSize.value === 'sm' || colSize.value === 'xs');
    const theme = ref<ThemeName>((localStorage.getItem('theme') as ThemeName) || 'light');
    const compactTheme = ref<ThemeName>((localStorage.getItem('compactTheme') as ThemeName) || '');
    const responsive = computed(() => {
      if (colSize.value === 'xs') {
        return 'crowded';
      } else if (colSize.value === 'sm') {
        return 'narrow';
      }
      return null;
    });
    const themeConfig = computed(() => {
      return { algorithm: getAlgorithm([...new Set([theme.value, compactTheme.value])]) };
    });
    const hashPriority = ref('low' as const);
    watch(hashPriority, () => {
      location.reload();
    });
    const isZhCN = ref(!localStorage.getItem('en-US'));
    const globalConfig = {
      isMobile,
      responsive,
      lang: computed(() => i18n.locale.value as any),
      isZhCN: isZhCN,
      blocked: ref(false),
      changeLocale: zh => {
        isZhCN.value = zh;
        localStorage.setItem('en-US', !zh ? 'true' : '');
      },
    };
    const changeTheme = (t: ThemeName) => {
      theme.value = t;
      localStorage.setItem('theme', t);
    };
    provide('themeMode', {
      theme,
      changeTheme,
    });
    watch(
      theme,
      () => {
        setConfig({
          theme: theme.value as any,
        });
      },
      { immediate: true },
    );
    useProvideGlobalConfig(globalConfig);
    // watch(
    //   () => route.path,
    //   val => {
    //     i18n.locale.value = isZhCN(val) ? 'zh-CN' : 'en-US';
    //   },
    //   { immediate: true },
    // );
    watch(
      globalConfig.isZhCN,
      val => {
        if (val) {
          dayjs.locale(zhCN.locale);
        } else {
          dayjs.locale(enUS.locale);
        }
      },
      { immediate: true },
    );
    const locale = computed(() => {
      return globalConfig.isZhCN.value ? zhCN : enUS;
    });
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'adsbox';
      document.body.appendChild(div);
      globalConfig.blocked.value = 'none' === getComputedStyle(div).display;
    }, 300);
    watch(
      theme,
      () => {
        if (theme.value === 'dark') {
          document.getElementsByTagName('html')[0].setAttribute('data-doc-theme', 'dark');
          document.getElementsByTagName('body')[0].setAttribute('data-theme', 'dark');
        } else {
          document.getElementsByTagName('html')[0].setAttribute('data-doc-theme', 'light');
          document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
        }
      },
      { immediate: true },
    );
    return { globalConfig, locale, themeConfig, hashPriority };
  },
});
</script>
