<template>
  <div>
    <Colspan />
    <Rowspan />
    <Header />
    <ColspanRowspan />
    <GroupingColumns />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Colspan from './colspan.vue';
import Rowspan from './rowspan.vue';
import Header from './header.vue';
import ColspanRowspan from './colspan-rowspan.vue';
import GroupingColumns from './grouping-columns.vue';

export default defineComponent({
  components: {
    Colspan,
    Rowspan,
    Header,
    ColspanRowspan,
    GroupingColumns,
  },
  title: '合并',
  enTitle: 'Span And Group',
  type: 'group',
  children: [
    {
      id: 'colspan',
      title: '合并列',
      enTitle: 'Colspan',
    },
    {
      id: 'rowspan',
      title: '合并行',
      enTitle: 'Rowspan',
    },
    {
      id: 'header',
      title: '表头合并',
      enTitle: 'Header span',
    },
    {
      id: 'colspan-rowspan',
      title: '综合',
      enTitle: 'Colspan & Rowspan',
    },
    {
      id: 'grouping-columns',
      title: '表头分组',
      enTitle: 'Grouping table head',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
