<template>
  <div>
    <animateVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import animateVue from './bg-color.vue';

export default defineComponent({
  components: {
    animateVue,
  },
  title: '自定义样式',
  enTitle: 'custom style',
  type: 'custom',
  children: [
    {
      id: 'bg-color',
      title: '背景色',
      enTitle: 'Background Color',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
