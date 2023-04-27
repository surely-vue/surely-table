<template>
  <div>
    <basic id="basic" />
    <config id="config" />
    <loading id="loading" />
    <custom id="custom" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Config from './config.vue';
import Loading from './loading.vue';
import Custom from './custom.vue';

export default defineComponent({
  components: {
    Basic,
    Config,
    Loading,
    Custom,
  },
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
