<template>
  <a-layout-header class="header" style="padding: 0">
    <div
      class="header-wrap"
      :style="
        showLeftNav || isMobile
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
      <a-popover
        v-if="isMobile"
        overlay-class-name="popover-menu"
        placement="bottomRight"
        trigger="click"
        arrow-point-at-center
      >
        <UnorderedListOutlined class="nav-phone-icon" />
        <template #content>
          <a-menu mode="vertical" :selected-keys="[]" class="nav-menu" disabled-overflow>
            <a-menu-item key="doc"><router-link to="/doc/guide">Doc</router-link></a-menu-item>
            <a-menu-item key="api"><router-link to="/doc/api">API</router-link></a-menu-item>
            <a-menu-item key="Pricing">
              <router-link to="/pricing">{{ isZhCN ? '授权' : 'Pricing' }}</router-link>
            </a-menu-item>
            <a-menu-item key="Github">
              <a href="https://github.com/surely-vue/table" target="_blank">Github</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-popover>
      <div v-else class="nav">
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
      <a-button size="small" class="mr-5" @click="globalConfig.changeLocale(!isZhCN)">
        {{ isZhCN ? 'English' : '中文' }}
      </a-button>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import { useInjectGlobalConfig } from '../context';
import { defineComponent } from 'vue';
import logo from '../assets/surely-vue-logo.svg';
import { UnorderedListOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'Header',
  components: {
    UnorderedListOutlined,
  },
  props: ['showLeftNav'],
  setup() {
    const globalConfig = useInjectGlobalConfig();
    return {
      isZhCN: globalConfig.isZhCN,
      isMobile: globalConfig.isMobile,
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
  justify-content: space-between;
}
.logo {
  color: #2c3d50;
  font-size: 28px;
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
  border-right: none;
  line-height: 64px;
}
</style>
