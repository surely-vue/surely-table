<template>
  <div>
    <div class="flex lay">
      <img :src="logo" alt="" class="logo" />
      <div class="right">
        <div class="tagline">高性能组件 Surely Vue</div>
        <div class="sub-title">更快的构建网站 & 构建更快的网站</div>
        <div class="actions">
          <router-link to="/doc/guide">
            <a-button type="primary" class="btn" size="large">
              <span class="btn-icon"></span>
              开始使用
            </a-button>
          </router-link>
          <a-button
            v-clipboard:copy="'npm i --save @surely-vue/table'"
            v-clipboard:success="handleCopy"
            class="copy"
            size="large"
          >
            <span class="tag">$ &nbsp;</span>
            <span>npm i --save @surely-vue/table</span>
            <component
              :is="copied ? 'CheckOutlined' : 'SnippetsOutlined'"
              :key="copied ? 'CheckOutlined' : 'SnippetsOutlined'"
              class="code-box-code-copy code-box-code-action"
            />
          </a-button>
        </div>
      </div>
    </div>
    <basicDemoVue style="margin-top: 30px"></basicDemoVue>
    <div>
      <featureVue />
    </div>
    <!-- <liveDemoVue /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core';
import basicDemoVue from '../components/home/basic-demo.vue';
import logo from '../assets/surely-vue-logo.svg';
import { CheckOutlined, SnippetsOutlined } from '@ant-design/icons-vue';
import featureVue from '../components/home/feature.vue';
import liveDemoVue from '../components/home/live-demo.vue';
export default defineComponent({
  components: {
    basicDemoVue,
    CheckOutlined,
    SnippetsOutlined,
    featureVue,
    liveDemoVue,
  },
  setup() {
    const copied = ref(false);
    return {
      logo,
      copied,
      handleCopy: () => {
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 3000);
      },
    };
  },
});
</script>
<style scoped lang="less">
.logo {
  height: 200px;
}
.flex {
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  flex-wrap: wrap;
}
.right {
  padding-left: 50px;
}
.tagline {
  font-size: 3.2rem;
  padding: 0;
  margin: 0;
  border-bottom: 0;
  font-weight: 300;
}
.sub-title {
  font-size: 20px;
  color: #46505a;
}
.actions {
  display: flex;
  margin-top: 2.3rem;
  .btn-icon {
    position: relative;
    width: 14px;
    height: 12px;
    margin-right: 8px;
    &:before {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      box-sizing: border-box;
      transform: rotate(135deg);
      left: -2px;
      top: 50%;
      margin-top: -4px;
    }
    &:after {
      position: absolute;
      content: '';
      width: 6px;
      height: 2px;
      background-color: #fff;
      right: 0;
      bottom: 0;
    }
  }
  .copy {
    margin-left: 20px;
    .tag {
      color: #ccc;
    }
  }
}
@media only screen and (max-width: 767.99px) {
  .right {
    padding: 0 30px;
    text-align: center;
  }
  .actions {
    flex-wrap: wrap;
    justify-content: center;
    .copy {
      margin-top: 20px;
      margin-left: 0;
    }
  }
}
</style>
