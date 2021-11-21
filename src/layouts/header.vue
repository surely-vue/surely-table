<template>
  <a-layout-header class="header" style="padding: 0">
    <div
      class="header-wrap"
      :style="
        showLeftNav
          ? { padding: '0px 40px' }
          : { padding: '0px 50px', margin: '0px auto', maxWidth: '1400px' }
      "
    >
      <router-link class="logo" to="/">
        <img :src="logo" class="h-40px inline-block" height="40" />
        &nbsp;&nbsp;Surely Vue
      </router-link>
      <!-- <div class="center">
      <a-select value="table" style="width: 100px">
        <a-select-option key="table" value="table">table</a-select-option>
      </a-select>
    </div> -->
      <div class="nav" style="min-width: 500px">
        <a-menu mode="horizontal" :selected-keys="[]" class="nav-menu" disabled-overflow>
          <a-menu-item key="doc"><router-link to="/doc/guide">Doc</router-link></a-menu-item>
          <a-menu-item key="api"><router-link to="/doc/api">API</router-link></a-menu-item>
          <a-menu-item key="Pricing">
            <router-link to="/pricing">{{ isZhCN ? '授权' : 'Pricing' }}</router-link>
          </a-menu-item>
          <a-menu-item key="Github">
            <a href="https://github.com/surely-vue/table" target="_blank">Github</a>
          </a-menu-item>
        </a-menu>
      </div>
      <a-button size="small" @click="globalConfig.changeLocale(!isZhCN)">
        {{ isZhCN ? 'English' : '中文' }}
      </a-button>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import { useInjectGlobalConfig } from '../context';
import { defineComponent } from 'vue';
import logo from '../assets/surely-vue-logo.svg';
export default defineComponent({
  name: 'Header',
  props: ['showLeftNav'],
  setup() {
    const globalConfig = useInjectGlobalConfig();
    return {
      isZhCN: globalConfig.isZhCN,
      globalConfig,
      logo,
    };
  },
});
</script>
<style lang="less" scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  .ant-menu-horizontal {
    border-bottom: none;
  }
}
.header-wrap {
  display: flex;
  align-content: space-between;
  align-items: center;
}
.logo {
  color: #2c3d50;
  font-size: 28px;
  width: 260px;
}
.center {
  float: left;
}
.nav {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  :deep(.ant-btn-link) {
    width: 80px;
  }
}
.nav-menu {
  line-height: 64px;
}
</style>
