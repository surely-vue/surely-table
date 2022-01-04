<template>
  <transition name="slide-fade" appear>
    <div v-if="show" class="discount">
      早早鸟 + 双十二，5 折特惠，仅此一次，
      <a href="javascript:;" @click="handleClick">即刻上车</a>
    </div>
  </transition>
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
import { useRoute, useRouter } from 'vue-router';
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
    const router = useRouter();
    const visible = ref(false);
    const handleClickShowButton = () => {
      visible.value = !visible.value;
    };
    const show = ref(false);
    const willShow = !localStorage.getItem('12-12');
    if (willShow) {
      setTimeout(() => {
        // show.value = true;
      }, 1000);
    }
    return {
      show,
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
      handleClick: () => {
        localStorage.setItem('12-12', 'true');
        router.push('/pricing');
        show.value = false;
      },
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

.discount {
  text-align: center;
  background: #35485e;
  color: #fff;
  font-size: 18px;
  height: 100px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
