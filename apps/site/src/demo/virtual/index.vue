<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  title: '分页',
  enTitle: 'Pagination',
  type: 'pagination',
  children: [
    {
      id: 'basic',
      title: '基本分页',
      enTitle: 'Basic Pagination',
    },
    {
      id: 'config',
      title: '分页配置',
      enTitle: 'Pagination Config',
    },
    {
      id: 'loading',
      title: '分页加载',
      enTitle: 'Pagination Loading',
    },
    {
      id: 'custom',
      title: '自定义分页',
      enTitle: 'Custom Pagination',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
