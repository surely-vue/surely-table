import type { Ref } from 'vue';
import type { InjectionKey } from 'vue';
import { inject, provide } from 'vue';

export interface GlobalConfig {
  isMobile: Ref<boolean>;
  lang: Ref<'zh-CN' | 'en-US'>;
  isZhCN: Ref<boolean>;
  responsive: Ref<null | 'narrow' | 'crowded'>;
  blocked: Ref<boolean>;
  changeLocale: (zh: boolean) => void;
}

const GLOBAL_CONFIG: InjectionKey<GlobalConfig> = Symbol('globalConfig');
export const useProvideGlobalConfig = (props: GlobalConfig) => {
  provide(GLOBAL_CONFIG, props);
};

export const useInjectGlobalConfig = () => {
  return inject(GLOBAL_CONFIG, {} as GlobalConfig);
};
