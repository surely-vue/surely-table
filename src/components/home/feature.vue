<template>
  <div class="lay flex" style="padding: 50px">
    <div class="rounded-lg p-8">
      <div class="title">
        <span class="icon"></span>
        <span class="highlight">F</span>
        <span>aster</span>
        更快
      </div>
      <div class="info">
        流畅渲染百万级别数据
        <br />
        横向纵向虚拟滚动
        <br />
        最省心的优化
      </div>
    </div>
    <div class="rounded-md p-8">
      <div class="title">
        <span class="icon"></span>
        <span class="highlight">S</span>
        <span>tronger</span>
        更强
      </div>
      <div class="info">
        集成拖拽、图表、CRUD
        <br />
        暗黑主题、导入导出
        <br />
        快速构建应用
      </div>
    </div>
    <div class="rounded-md p-8">
      <div class="title">
        <span class="icon"></span>
        <span class="highlight">E</span>
        <span>asier</span>
        更易用
      </div>
      <div class="info">
        完整 Typescript 类型
        <br />
        丰富的在线示例
        <br />
        So Easy
      </div>
    </div>
  </div>
  <div class="rec">
    <div class="rec-inner lay flex">
      <div class="left">
        <div class="rec-word mt-5">CXO & 大厂技术专家联袂推荐</div>
        <div>
          <br />
          <a-button
            v-clipboard:copy="'npm i --save @surely-vue/table'"
            v-clipboard:success="handleCopy"
            class="copy mt-5"
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
            <a-button type="primary" class="btn mt-5" size="large">
              <span class="btn-icon"></span>
              开始使用
            </a-button>
          </router-link>
        </div>
      </div>
      <div class="right">
        <a-carousel autoplay arrows :dots="!isMobile" :style="carouselStyle">
          <template #prevArrow>
            <div class="custom-slick-arrow" :style="`left: ${isMobile ? 5 : -50}px; z-index: 1`">
              <left-circle-outlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" :style="`right: ${isMobile ? 5 : -50}px`">
              <right-circle-outlined />
            </div>
          </template>
          <div class="card">
            <a-card :bordered="false">
              <template #cover>
                <div class="desc">
                  Ant Design Vue 加快了我们交付产品的速度和质量，给我们节省了每年约 300
                  万的人力投入， 而且我们可以比竞争对手更快地为客户提供产品，它带来的价值更加可观。
                  大数据表格一直是一个痛点，分页已经无法满足日渐“挑剔”的用户，Surely Vue
                  很好地解决了这个问题，非常感谢 Ant Design Vue 不断地付出和维护。
                </div>
              </template>
              <a-card-meta title="胡淼" description="校宝在线 副总裁（VP）">
                <template #avatar>
                  <a-avatar :src="humiao" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card :bordered="false">
              <template #cover>
                <div class="desc">
                  Surely Vue 不管是 UI 还是交互，都保持了 Ant Design
                  的设计体系，同时还添加了更多动画，进一步提升了用户体验，持续的投入会带来更专业的方案。
                  国内的开源商业化发展非常缓慢，而前端更是在起步阶段，很欣慰看到 Ant Design Vue
                  正在摸索新的商业模式，也帮各位前端人探明了一个更好的职业金矿，继续加油，非常期待。
                </div>
              </template>
              <a-card-meta title="Scott" description="早早聊 CEO">
                <template #avatar>
                  <a-avatar :src="scott" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card :bordered="false">
              <template #cover>
                <div class="desc">
                  Ant Design Vue 的新作品 Surely Vue 真的很
                  Cool，这是迄今为止我见过滚动最流畅的复杂表格组件，
                  有幸拜读过源码，真的很开眼界，可以说把 Vue 的性能“压榨”到了极致。
                  <br />
                  不管怎么说，期待 Surely Vue 带来更多的功能。
                </div>
              </template>
              <a-card-meta title="大圣" description="前百度前端架构师 & 自由职业者">
                <template #avatar>
                  <a-avatar :src="dasheng" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card :bordered="false">
              <template #cover>
                <div class="desc">
                  你应该试试它，安装后，使用 s-table 替换
                  a-table，几乎零成本的替换，你会发现网站速度快了很多不是嘛。
                  <br />
                  或许你更应该告诉你的老板，我们可以给客户提供更好的用户体验，然后我们会有更多的客户。
                </div>
              </template>
              <a-card-meta title="梁宵" description="快手 资深技术专家">
                <template #avatar>
                  <a-avatar :src="liangxiao" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card :bordered="false">
              <template #cover>
                <div class="desc">
                  Surely Vue
                  真是一个难产的项目，很早就被邀请内测，从最初的卡顿、略卡、微卡、到如今的流畅滚动，算是见证了它的成长，
                  而且结果看起来非常的棒。
                  <br />
                  作为内测者，感受到团队投入了非常大的精力，不断地调整方案，不断的优化性能，这大概就是专业吧。与其说信任
                  Surely Vue，我更加信任背后的人。
                </div>
              </template>
              <a-card-meta title="郭美青" description="腾讯 资深技术专家">
                <template #avatar>
                  <a-avatar :src="guomeiqing" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card :bordered="false">
              <template #cover>
                <div class="desc">
                  Surely Vue
                  是国内领先的前端数据表格解决方案，在性能，扩展性，易用性等方面在全球属于领先水平，对于中大型企业或者小微企业的SaaS或者PaaS系统的落地起到了核心作用。
                  <br />
                  作为首批内测者，从体验使用到源码阅读，我感受到了「唐金州」老师的专注与专业，期待
                  Surely Vue
                  能帮助更多的工程师快速交付具有商业价值的创新产品，帮助更多企业高效高质量完成数字化建设。
                </div>
              </template>
              <a-card-meta title="张驰" description="前纷享销客前端技术负责人">
                <template #avatar>
                  <a-avatar :src="zhangchi" />
                </template>
              </a-card-meta>
            </a-card>
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
import { defineComponent, ref, computed } from 'vue';
import scott from '../../assets/scott.jpeg';
import liangxiao from '../../assets/liangxiao.jpeg';
import dasheng from '../../assets/dasheng.png';
import humiao from '../../assets/humiao.png';
import guomeiqing from '../../assets/guomeiqing.png';
import zhangchi from '../../assets/zhangchi.jpeg';
import { useInjectGlobalConfig } from '../../context';

export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
    CheckOutlined,
    SnippetsOutlined,
  },
  setup() {
    const copied = ref(false);
    const { isMobile } = useInjectGlobalConfig();
    const carouselStyle = computed(() => {
      return isMobile.value ? { width: '100vw' } : { width: '560px' };
    });
    return {
      scott,
      liangxiao,
      dasheng,
      copied,
      humiao,
      guomeiqing,
      zhangchi,
      isMobile,
      carouselStyle,
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
  justify-content: space-around;
}
.title {
  font-size: 30px;
  padding: 0 0 10px;
  color: rgba(0, 0, 0, 0.85);
}
.highlight {
  color: #1890ff;
}
.info {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 26px;
  text-align: center;
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
.card {
  text-align: left;
  padding: 30px;
  height: 260px;
  color: rgba(0, 0, 0, 0.85);
}
.desc {
  line-height: 26px;
}
.tag {
  color: #ccc;
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
@media only screen and (max-width: 767.99px) {
  .rec {
    .rec-inner {
      padding: 20px;
    }
    .right {
      margin-top: 30px;
    }
  }
  .card {
    height: 300px;
  }
}
</style>
<style lang="less">
.ant-carousel {
  box-shadow: 0 2px 8px #f0f1f2;
}
.ant-carousel .slick-slide {
  text-align: center;
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
.card .ant-card-body {
  padding: 24px 0 0;
}
</style>
