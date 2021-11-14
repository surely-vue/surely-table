<template>
  <a-layout-header class="header" style="padding: 0">
    <div class="logo">
      <img src="https://alicdn.antdv.com/logo.png" class="h-40px inline-block" height="40" />
      &nbsp;&nbsp;Surely Vue
    </div>
    <!-- <div class="center">
      <a-select value="table" style="width: 100px">
        <a-select-option key="table" value="table">table</a-select-option>
      </a-select>
    </div> -->
    <div class="nav" style="min-width: 500px">
      <a-menu
        theme="dark"
        mode="horizontal"
        :selected-keys="[]"
        :style="{ lineHeight: '64px', width: '100%' }"
      >
        <a-menu-item key="doc"><router-link to="/doc/guide">Doc</router-link></a-menu-item>
        <a-menu-item key="api"><router-link to="/doc/api">API</router-link></a-menu-item>
        <a-menu-item key="Pricing">
          <router-link to="/doc/pricing">{{ isZhCN ? '授权' : 'Pricing' }}</router-link>
        </a-menu-item>
        <a-menu-item key="Github">
          <a href="https://github.com/surely-vue/table" target="_blank">Github</a>
        </a-menu-item>
      </a-menu>
      <a-button type="link" @click="globalConfig.changeLocale(!isZhCN)">
        {{ isZhCN ? 'English' : '中文' }}
      </a-button>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import { useInjectGlobalConfig } from '../context';
import { defineComponent } from 'vue';
export default defineComponent({
  name: '',
  setup() {
    const globalConfig = useInjectGlobalConfig();
    return {
      isZhCN: globalConfig.isZhCN,
      globalConfig,
    };
  },
});
</script>
<style lang="less" scoped>
.logo {
  color: #fff;
  float: left;
  font-size: 18px;
  padding-left: 35px;
  width: 260px;
}
.center {
  float: left;
}
.nav {
  float: right;
  padding-right: 40px;
  display: flex;
  align-items: center;
  :deep(.ant-btn-link) {
    width: 80px;
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
