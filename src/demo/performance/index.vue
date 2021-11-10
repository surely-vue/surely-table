<template>
  <div>
    <heightVue />
    <dynamicHeightVue />
    <autoHeightVue />
    <animateVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import heightVue from './height.vue';
import dynamicHeightVue from './dynamic-height.vue';
import autoHeightVue from './auto-height.vue';
import animateVue from './animate.vue';

export default defineComponent({
  components: {
    heightVue,
    dynamicHeightVue,
    autoHeightVue,
    animateVue,
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
