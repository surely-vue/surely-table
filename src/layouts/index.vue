<template>
  <a-layout class="layout">
    <HeaderVue :show-left-nav="showLeftNav" style="position: fixed; width: 100%; z-index: 999" />
    <a-layout style="padding-top: 64px">
      <template v-if="isMobile">
        <a-drawer
          key="mobile-menu"
          :closable="false"
          placement="left"
          class="drawer drawer-left"
          :visible="visible"
          wrapper-class-name="drawer-wrapper"
          width="50%"
        >
          <navVue />
          <template #handle>
            <div class="drawer-handle" @click="handleClickShowButton">
              <close-outlined v-if="visible" :style="iconStyle" />
              <MenuOutlined v-else :style="iconStyle" />
            </div>
          </template>
        </a-drawer>
      </template>
      <a-layout-sider
        v-if="!isMobile && showLeftNav"
        width="260"
        theme="light"
        :style="{
          overflowY: 'auto',
          overflowX: 'hidden',
          background: '#fff',
          position: 'fixed',
          left: 0,
          bottom: 0,
          top: '64px',
        }"
      >
        <navVue />
      </a-layout-sider>
      <a-layout
        :style="
          showLeftNav && !isMobile ? 'padding: 0 24px 24px 284px' : 'padding: 0; background: #fff'
        "
      >
        <a-layout-content
          v-if="showLeftNav"
          :style="{ marginTop: '0px', width: '100%', background: '#fff' }"
        >
          <div
            :style="{
              padding: '10px 50px',
              margin: '0px auto',
              minHeight: '280px',
              maxWidth: '1400px',
            }"
          >
            <router-view />
          </div>
        </a-layout-content>
        <template v-else>
          <router-view />
        </template>
        <FooterVue />
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import HeaderVue from './header.vue';
import FooterVue from './footer.vue';
import { ref, defineComponent, toRef, computed } from 'vue';
import demos from '../demo/demos';
import { useInjectGlobalConfig } from '../context';
import { useRoute } from 'vue-router';
import navVue from './nav.vue';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    HeaderVue,
    FooterVue,
    navVue,
    MenuOutlined,
    CloseOutlined,
  },
  setup() {
    const globalConfig = useInjectGlobalConfig();
    const route = useRoute();
    const visible = ref(false);
    const handleClickShowButton = () => {
      visible.value = !visible.value;
    };
    return {
      demos,
      visible,
      isMobile: globalConfig.isMobile,
      isZhCN: globalConfig.isZhCN,
      selectedKey: toRef(route, 'fullPath'),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>([...new Set(['/doc/guide', route.path])]),
      showLeftNav: computed(() => route.path.indexOf('doc') !== -1),
      iconStyle: {
        // color: '#fff',
        fontSize: '20px',
      },
      handleClickShowButton,
    };
  },
});
</script>
<style lang="less" scoped>
.layout {
  min-height: 100%;
  background: #fff;
}
.nav :deep(.ant-menu-item) {
  margin: 0;
}
</style>
