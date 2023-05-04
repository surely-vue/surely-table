<template>
  <a-layout-header
    class="header"
    style="padding: 0"
    :style="
      theme === 'dark' ? 'background-color: #141414; box-shadow: none;' : 'background-color: #fff'
    "
  >
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
        <unordered-list-outlined class="nav-phone-icon" />
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
      <a-tooltip title="暗黑主题" placement="bottom">
        <span
          class="w-16px h-16px flex theme-icon cursor-pointer"
          @click="() => changeTheme(theme === 'light' ? 'dark' : 'light')"
        >
          <template v-if="theme === 'light'">
            <svg
              t="1683197487967"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1814"
            >
              <path
                d="M593.054 120.217C483.656 148.739 402.91 248.212 402.91 366.546c0 140.582 113.962 254.544 254.544 254.544 118.334 0 217.808-80.746 246.328-190.144C909.17 457.12 912 484.23 912 512c0 220.914-179.086 400-400 400S112 732.914 112 512s179.086-400 400-400c27.77 0 54.88 2.83 81.054 8.217z"
                fill="currentColor"
                fill-opacity=".65"
                p-id="1815"
              ></path>
            </svg>
          </template>
          <template v-else>
            <svg
              t="1683198227015"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1961"
            >
              <path
                d="M720.024199 351.521545c0 259.827641-221.37703 469.494584-494.203586 473.067991 78.511375 91.05714 197.258887 145.666943 326.238161 145.666942 231.677057 0 418.199246-174.779145 418.199246-388.489122 0-162.588837-109.02069-306.67623-270.391319-363.244579 13.309646 42.857343 20.157499 87.526106 20.157498 132.998768zM643.743261 219.995218c-9.553802-27.055963-9.007669-37.450152 0-49.873508 0 0 28.781462-16.84892 59.647412-7.071485C889.786921 222.09383 1024.000365 387.289747 1024.000365 581.767356 1024.000365 825.967816 812.66442 1024 552.058774 1024c-157.887853 0-297.577931-72.693407-383.223172-184.328239-6.153416-8.018979-9.259549-17.87292-8.788745-27.878694 1.121692-23.846253 21.852395-42.292377 46.303632-41.197757 4.425563 0.198915 8.55452 0.297784 12.385692 0.297784 247.139457 0 447.544497-187.78983 447.544497-419.371549 0-45.950529-7.93188-90.163789-22.53624-131.52515zM337.560199 498.624441l4.35612-26.753471-18.702713-19.486602c-4.374952-4.557389-4.269021-11.840736 0.235403-16.266299a11.31932 11.31932 0 0 1 6.2464-3.126143l25.329287-3.813517 20.8896-44.885333a0.75211 0.75211 0 0 0 0.051788-0.154189l0.015302-0.068266a0.045903 0.045903 0 0 1 0.01177-0.022364 0.009416 0.009416 0 0 1 0.015301 0.003532l20.934326 45.12662 25.361067 3.818225c6.209913 0.935724 10.495411 6.787825 9.571457 13.07189a11.555899 11.555899 0 0 1-3.080239 6.311136l-18.665048 19.49131 4.354943 26.753471c1.021646 6.268763-3.173223 12.187954-9.369012 13.220193a11.254584 11.254584 0 0 1-7.33749-1.277057l-21.754703-12.137343-21.75588 12.137343c-5.497821 3.068469-12.412763 1.045186-15.444745-4.518547a11.620634 11.620634 0 0 1-1.262934-7.424589zM32.549441 178.15246l8.990014-53.652892L3.423114 85.910069a11.767761 11.767761 0 0 1 0.251881-16.84068 12.192662 12.192662 0 0 1 6.654823-3.236782l52.159264-7.630566C74.850057 19.40068 86.55779 0 97.609928 0c11.054492 0 21.675844 19.40068 31.866409 58.202041l52.191044 7.636451c6.617159 0.96868 11.182786 7.026759 10.198805 13.532101a11.833674 11.833674 0 0 1-3.281508 6.534768l-38.03395 38.594207 8.990014 53.652892c1.086382 6.490041-3.382731 12.617563-9.983412 13.687466-2.683586 0.434317-5.436616-0.031779-7.81771-1.32296l-45.695117-24.773738-45.695117 24.773738c-5.857986 3.176754-13.226078 1.082851-16.455798-4.677444a11.737159 11.737159 0 0 1-1.345324-7.685885z"
                fill="currentColor"
                p-id="1962"
              ></path>
            </svg>
          </template>
        </span>
      </a-tooltip>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import { useInjectGlobalConfig } from '../context';
import { defineComponent, inject, ref } from 'vue';
import logo from '../assets/surely-vue-logo.svg';
import { UnorderedListOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'CustomHeader',
  components: {
    UnorderedListOutlined,
  },
  props: { showLeftNav: Boolean },
  setup() {
    const globalConfig = useInjectGlobalConfig();
    const { theme, changeTheme } = inject('themeMode', {
      theme: ref('light'),
      changeTheme: (t: any) => {},
    });
    return {
      isZhCN: globalConfig.isZhCN,
      isMobile: globalConfig.isMobile,
      globalConfig,
      logo,
      theme,
      changeTheme,
    };
  },
});
</script>
<style lang="less" scoped>
.header {
  // background-color: #fff;
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
  display: flex;
  align-items: center;
}
[data-doc-theme='dark'] {
  .logo {
    color: #fff;
  }
  .theme-icon {
    color: #fff;
  }
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
