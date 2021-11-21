<template>
  <div class="lay flex" style="padding-bottom: 30px">
    <div class="border rounded-md p-8">
      <div class="title">
        <span class="icon"></span>
        更快
      </div>
      <div class="info">
        超快虚拟滚动
        <br />
        流畅渲染10W行10万列
        <br />
        最省心的优化
      </div>
    </div>
    <div class="border rounded-md p-8">
      <div class="title">
        <span class="icon"></span>
        更强
      </div>
      <div class="info">
        响应式、暗黑主题、SSR
        <br />
        集成拖拽、图表、CRUD
        <br />
        快速构建应用
      </div>
    </div>
    <div class="border rounded-md p-8">
      <div class="title">
        <span class="icon"></span>
        更易用
      </div>
      <div class="info">
        完整 Typescript 类型
        <br />
        丰富的在线示例
        <br />
        开发从未如此 Easy
      </div>
    </div>
  </div>
  <div class="rec">
    <div class="rec-inner lay flex">
      <div class="left">
        <div class="rec-word">大厂技术专家联袂推荐 & Ant Design Vue 团队出品</div>
        <div>
          <br />
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
          <br />
          <br />
          <router-link to="/doc/guide">
            <a-button type="primary" class="btn" size="large">
              <span class="btn-icon"></span>
              开始使用
            </a-button>
          </router-link>
        </div>
      </div>
      <div class="right">
        <a-carousel arrows style="width: 500px">
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: -50px; z-index: 1">
              <left-circle-outlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" style="right: -50px">
              <right-circle-outlined />
            </div>
          </template>
          <div class="card">
            Ant Design Vue的新作品 Surely Vue 真的很 Cool，这是迄今为止我见过滚动最流畅的表格组件，
            有幸拜读过源码，真的开眼界，可以说把 Vue 的性能压榨到了极致。 不管怎么说，期待 Surely
            Vue 带来更多的功能。
          </div>
          <div class="card">
            Ant Design Vue的新作品 Surely Vue 真的很 Cool，这是迄今为止我见过滚动最流畅的表格组件，
            有幸拜读过源码，真的开眼界，可以说把 Vue 的性能压榨到了极致。 不管怎么说，期待 Surely
            Vue 带来更多的功能。
          </div>
          <div class="card">
            这次 Ant Design Vue 团队出品的商业组件，不管是 UI 还是交互，都保持了 Ant Design
            的设计体系，同时还添加了更多动画，进一步提升了用户体验，持续的投入会带来更专业的方案。
            国内的开源商业化发展非常缓慢，而前端更是在起步阶段，很欣慰看到 Ant Design Vue
            团队正在摸索这种新的商业模式，也帮各位前端人探明了一个更好的职业金矿，继续加油，非常期待。
          </div>
        </a-carousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  CheckOutlined,
  SnippetsOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
    CheckOutlined,
    SnippetsOutlined,
  },
  setup() {
    const copied = ref(false);
    return {
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
.flex {
  justify-content: space-between;
}
.title {
  font-size: 30px;
}
.info {
  font-size: 16px;
}
.rec {
  background: #f3f6f9;
  .rec-inner {
    padding: 100px;
  }
  .rec-word {
    font-size: 24px;
    color: #1890ff;
  }
}
.left {
}
.card {
  width: 500px;
}
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
</style>
<style lang="less">
.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #fff;
  overflow: hidden;
}

.ant-carousel .slick-arrow.custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #ccc;
  z-index: 1;
}
.ant-carousel .custom-slick-arrow:before {
  display: none;
}
.ant-carousel .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel .slick-slide h3 {
  color: #fff;
}

.ant-carousel .slick-dots-bottom {
  bottom: -15px;
  left: 10px;
}
.ant-carousel .slick-dots li button {
  background: #ccc;
  opacity: 0.8;
  width: 6px;
  height: 6px;
  border-radius: 3px;
}
.ant-carousel .slick-dots {
  text-align: left;
}
.ant-carousel .slick-dots li.slick-active button {
  background: #ccc;
  opacity: 1;
  width: 6px;
  height: 6px;
  border-radius: 3px;
}
</style>
