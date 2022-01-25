<template>
  <div
    class="lay"
    :style="{
      padding: '10px 50px',
    }"
  >
    <template v-if="true">
      <h2 class="text-2xl mt-5">Surely Vue Licensing & Pricing</h2>
      <div class="leading-loose py-5">
        <p class="pt-5">
          Surely Vue
          是一个商业产品，他拥有更多的功能、更好的性能，例如：自动行高虚拟滚动、行列虚拟滚动、多列排序、拖拽、图表等等，
        </p>

        <p class="pt-5">
          你可以免费使用我们的产品，但如果你需要去除水印，你需要获取如下相应的授权。
        </p>

        <p class="pt-5">
          下方我们列举了一些常见问题，期望能解答您的一些疑惑，当然你可以通过邮箱
          <a href="mailto:antdv@foxmail.com">antdv@foxmail.com</a>
          咨询更多的问题。
        </p>
      </div>
      <div class="text-center flex card-out">
        <div class="mt-10 m-2 p-5 flex flex-1 flex-col border border-gray-300 rounded bg">
          <span class="p-2 text-2xl">
            标准版
            <a-tooltip>
              <template #title>
                子域名授权，例如：
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
            <i class="not-italic px-2 text-2xl">1,990</i>
            <i class="text-sm not-italic">RMB/CNY</i>
          </span>
          <!-- <span class="primary-color">早鸟折扣价（5折）</span> -->
          <span class="p-2 text-gray-500">子域名授权、永久使用权、一年更新权</span>
          <a-button @click="handleClick('basic')">获取授权</a-button>
        </div>
        <div class="mt-10 m-2 flex flex-1 flex-col border rounded border-green-500 bg">
          <a-badge-ribbon text="推荐">
            <div class="flex flex-col p-5">
              <span class="p-2 text-2xl">
                专业版
                <a-tooltip>
                  <template #title>
                    通配符域名授权，例如：*.vuejs.org
                    <br />
                    授权后，你可以在 v1.vuejs.org、v2.vuejs.org、v3.vuejs.org 等所有 vuejs.org
                    下的域名中使用
                  </template>
                  <QuestionCircleTwoTone class="text-base" />
                </a-tooltip>
              </span>
              <span class="p-2 text-xl">
                <i class="text-gray-500 text-base line-through not-italic">8,980</i>
                <i class="not-italic px-2 text-2xl">4,490</i>
                <i class="text-sm not-italic">RMB/CNY</i>
              </span>
              <!-- <span class="primary-color">早鸟折扣价（5折）</span> -->
              <span class="p-2 text-gray-500">通配符域名、永久使用权、一年更新权</span>
              <a-button type="primary" @click="handleClick('pro')">获取授权</a-button>
            </div>
          </a-badge-ribbon>
        </div>
        <div class="mt-10 m-2 p-5 flex flex-1 flex-col border rounded border-yellow-500 bg">
          <span class="p-2 text-2xl">
            旗舰版
            <a-tooltip>
              <template #title>不限制域名，适合 Electron、IP 内网、SAAS 等项目。</template>
              <QuestionCircleTwoTone class="text-base" />
            </a-tooltip>
          </span>
          <span class="p-2 text-xl">
            <i class="text-gray-500 text-base line-through not-italic">19,880</i>
            <i class="not-italic px-2 text-2xl">9,940</i>
            <i class="text-sm not-italic">RMB/CNY</i>
          </span>
          <!-- <span class="primary-color">早鸟折扣价（5折）</span> -->
          <span class="p-2 text-gray-500">不限制域名、永久使用权、一年更新权</span>
          <a-button @click="handleClick('flag')">获取授权</a-button>
        </div>
        <div class="mt-10 m-2 p-5 flex flex-1 flex-col border rounded border-yellow-400 bg">
          <span class="p-2 text-2xl">
            旗舰版 Plus
            <a-tooltip>
              <template #title>不限制域名，永久更新权。</template>
              <QuestionCircleTwoTone class="text-base" />
            </a-tooltip>
          </span>
          <span class="p-2 text-xl">
            <i class="not-italic px-2 text-2xl">详询客服</i>
          </span>
          <span class="p-2 text-gray-500">不限制域名、永久使用权、永久更新权</span>
          <a-popover title="咨询">
            <template #content>
              <div style="width: 270px">
                <p>如有任何问题，请扫码添加客服微信咨询。</p>
                <img width="270" height="271" :src="Wechat" />
              </div>
            </template>
            <span>
              每月限量发售
              <a type="link">在线咨询</a>
            </span>
          </a-popover>
        </div>
      </div>
      <p class="pt-5">
        <span style="color: #1890ff">早鸟特权：</span>
        抢先体验、限时折扣、并有机会影响产品走向和功能优先级。
      </p>
      <p class="pt-5">
        <span style="color: #1890ff">免费使用：</span>
        仅限 github.io、gitee.io 两类域名，请通过邮箱附上您的开源项目和域名进行申请。
      </p>
      <p class="pt-5">
        <span style="color: #1890ff">教育优惠：</span>
        5折特惠，不和其它活动同享，仅限 .edu 域名或发票信息为学校、研究机构、科研院所等教育机构。
      </p>
      <p class="pt-5">
        如果您还有其它问题，可咨询
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
  </div>
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleClick: (_type: string) => {
        window.open('https://item.taobao.com/item.htm?id=661053273272');
      },
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
.card-out {
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    min-width: 300px;
    max-width: 25%;
  }
}
</style>
