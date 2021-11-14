<template>
  <template v-if="isZhCN">
    <h2 class="text-2xl">Surely Vue Licensing & Pricing</h2>
    <div class="leading-loose py-5">
      <p class="pt-5">
        Surely Vue
        是一个商业产品，他拥有更多的功能、更好的性能，例如：自动行高虚拟滚动、行列虚拟滚动、多列排序、拖拽、图表等等，
      </p>

      <p class="pt-5">你可以免费使用我们的产品，但如果你需要去除水印，你需要获取如下相应的授权。</p>

      <p class="pt-5">
        下方我们列举了一些常见问题，期望能解答您的一些疑惑，当然你可以通过邮箱
        <a href="mailto:antdv@foxmail.com">antdv@foxmail.com</a>
        咨询更多的问题。
      </p>
    </div>
    <a-row :gutter="40" class="text-center pt-10">
      <a-col :span="8">
        <div class="p-5 flex flex-col border border-gray-300 rounded bg">
          <span class="p-2 text-2xl">
            子域名
            <a-tooltip>
              <template #title>
                例如：
                <br />
                www.baidu.com、v3.vuejs.org
                <br />
                这类明确子域名的网站，它可以满足大部分的网站应用，并且支持三个月内的补差价升级通配符域名。
              </template>
              <QuestionCircleTwoTone class="text-base" />
            </a-tooltip>
          </span>
          <span class="p-2 text-xl">
            <i class="text-gray-500 text-base line-through not-italic">3980</i>
            <i class="not-italic px-2">3,184</i>
            <i class="text-sm not-italic">RMB/CNY</i>
          </span>
          <span class="primary-color">限时早鸟折扣价（8折）</span>
          <span class="p-2 text-gray-500">永久使用权、一年更新权</span>
          <a-button>获取授权</a-button>
        </div>
      </a-col>
      <a-col :span="8">
        <a-badge-ribbon text="推荐">
          <div class="p-5 flex flex-col border rounded border-green-500 bg">
            <span class="p-2 text-2xl">
              通配符域名
              <a-tooltip>
                <template #title>
                  例如：*.vuejs.org
                  <br />
                  授权后，你可以在 v1.vuejs.org、v1.vuejs.org、v1.vuejs.org 等所有 vuejs.org
                  下的域名中使用
                </template>
                <QuestionCircleTwoTone class="text-base" />
              </a-tooltip>
            </span>
            <span class="p-2 text-xl">
              <i class="text-gray-500 text-base line-through not-italic">8,980</i>
              <i class="not-italic px-2">6,286</i>
              <i class="text-sm not-italic">RMB/CNY</i>
            </span>
            <span class="primary-color">限时早鸟折扣价（7折）</span>
            <span class="p-2 text-gray-500">永久使用权、一年更新权</span>
            <a-button class="" type="primary">获取授权</a-button>
          </div>
        </a-badge-ribbon>
      </a-col>
      <a-col :span="8">
        <div class="p-5 flex flex-col border rounded border-yellow-500 bg">
          <span class="p-2 text-2xl">
            通配符域名
            <a-tooltip>
              <template #title>
                例如：*.vuejs.org
                <br />
                授权后，你可以在 v1.vuejs.org、v1.vuejs.org、v1.vuejs.org 等所有 vuejs.org
                下的域名中使用。
                <br />
                该版本在永久使用权的基础上，额外拥有永久更新权。
              </template>
              <QuestionCircleTwoTone class="text-base" />
            </a-tooltip>
          </span>
          <span class="p-2 text-xl">
            <i class="text-gray-500 text-base line-through not-italic">19,880</i>
            <i class="not-italic px-2">13,916</i>
            <i class="text-sm not-italic">RMB/CNY</i>
          </span>
          <span class="primary-color">限时早鸟折扣价（7折）</span>
          <span class="p-2 text-gray-500">永久使用权、永久更新权</span>
          <a-button>获取授权</a-button>
        </div>
      </a-col>
    </a-row>
    <p class="p-5">
      购买越多、折扣越多，详情可咨询
      <a href="mailto:antdv@foxmail.com">antdv@foxmail.com</a>
      或者
      <a-popover title="咨询">
        <template #content>
          <div style="width: 270px">
            <p>如有任何问题，请扫码添加客服微信咨询。</p>
            <img width="270" height="271" :src="Wechat" />
          </div>
        </template>
        <a type="link">在线咨询</a>
      </a-popover>
    </p>
    <faq />
  </template>
  <template v-else>ing</template>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import faq from '../doc/faq.md';
import { useInjectGlobalConfig } from '../context';
import { QuestionCircleTwoTone } from '@ant-design/icons-vue';
import Wechat from '../assets/wechat.png';

export default defineComponent({
  name: '',
  components: {
    faq,
    QuestionCircleTwoTone,
  },
  setup() {
    const globalConfig = useInjectGlobalConfig();
    return {
      isZhCN: globalConfig.isZhCN,
      Wechat,
    };
  },
});
</script>
<style lang="less" scoped>
.bg {
  background-color: #fdfdfd;
}
.primary-color {
  color: #1890ff;
}
</style>
