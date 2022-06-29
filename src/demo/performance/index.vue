<template>
  <div>
    <div class="markdown">
      <h3>如果你发现你的表格依然不够流畅，可以尝试从如下几个点进行进一步的排查和优化：</h3>
      <ul>
        <li>首先确保虚拟滚动是否生效</li>
        <li>开发环境性能有一定的损耗，如果开启了 Vue devTool，也会有一定的卡顿</li>
        <li>开启自动表头高度，表头部分会全量加载，会有一定的性能损耗</li>
        <li>
          单元格内容是否过于复杂，虚拟滚动是减少 DOM
          渲染来达到页面流畅的，如果您的每一个单元格都是很复杂的节点(成百上千的DOM），那么表格很难流畅滚动
        </li>
        <li>找到那个耗性能的列，并针对性优化，如，图片过大、有耗时计算等等</li>
        <li>指定行高</li>
        <li>如需要自动行高，可以试试指定部分列自动，毕竟大部分场景，只有少数列需要动态调整行高</li>
        <li>指定 number 类型的列宽</li>
        <li>关闭动画</li>
      </ul>
    </div>
    <br />
    <heightVue />
    <dynamicHeightVue />
    <autoHeightVue />
    <width />
    <animateVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import heightVue from './height.vue';
import dynamicHeightVue from './dynamic-height.vue';
import autoHeightVue from './auto-height.vue';
import width from './width.vue';
import animateVue from './animate.vue';

export default defineComponent({
  components: {
    heightVue,
    dynamicHeightVue,
    autoHeightVue,
    animateVue,
    width,
  },
  title: '性能优化',
  enTitle: 'Performance',
  type: 'performance',
  children: [
    {
      id: 'height',
      title: '指定行高',
      enTitle: 'Height',
    },
    {
      id: 'dynamic-height',
      title: '动态行高',
      enTitle: 'Dynamic Height.',
    },
    {
      id: 'auto-height',
      title: '自动行高',
      enTitle: 'Auto Height',
    },
    {
      id: 'width',
      title: '指定宽度',
      enTitle: 'width',
    },
    {
      id: 'animate',
      title: '动画',
      enTitle: 'Animation',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
