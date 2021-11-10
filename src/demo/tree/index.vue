<template>
  <div>
    <expandVue />
    <expandChildrenVue />
    <nestedTableVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import expandVue from './expand.vue';
import expandChildrenVue from './expand-children.vue';
import nestedTableVue from './nested-table.vue';

export default defineComponent({
  components: {
    expandVue,
    expandChildrenVue,
    nestedTableVue,
  },
  title: '树形、子表格',
  enTitle: 'Tree、Nested tables',
  type: 'tree',
  children: [
    {
      id: 'expand',
      title: '可展开',
      enTitle: 'Expandable Row',
    },
    {
      id: 'expand-children',
      title: '树形数据展示',
      enTitle: 'Tree data',
    },
    {
      id: 'nested-table',
      title: '嵌套子表格',
      enTitle: 'Nested tables',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
