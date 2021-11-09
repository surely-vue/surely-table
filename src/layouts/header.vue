<template>
  <a-layout-header class="header" style="padding: 0">
    <div class="logo">
      <img src="https://alicdn.antdv.com/logo.png" height="40" />
      &nbsp;&nbsp;surely-vue/table
    </div>
    <!-- <div class="center">
      <a-select value="table" style="width: 100px">
        <a-select-option key="table" value="table">table</a-select-option>
      </a-select>
    </div> -->
    <div class="nav">
      <a-menu theme="dark" mode="horizontal" :selected-keys="['1']" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">Doc</a-menu-item>
        <!-- <a-menu-item key="2">Github</a-menu-item> -->
      </a-menu>
      <a-button type="link" @click="globalConfig.changeLocale(!isZhCN)">
        {{ isZhCN ? 'English' : '中文' }}
      </a-button>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import type { GlobalConfig } from '../App.vue';
import { GLOBAL_CONFIG } from '../SymbolKey';
import { defineComponent, inject } from 'vue';
export default defineComponent({
  name: '',
  setup() {
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG)!;
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
