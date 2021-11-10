<template>
  <div>
    <MultipleSorter />
    <ResetFilter />
    <CustomFilterPanel />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CustomFilterPanel from './custom-filter-panel.vue';
import MultipleSorter from './multiple-sorter.vue';
import ResetFilter from './reset-filter.vue';

export default defineComponent({
  components: {
    CustomFilterPanel,
    MultipleSorter,
    ResetFilter,
  },
  title: '过滤和排序',
  enTitle: 'Filter And Sorter',
  type: 'filter',
  children: [
    {
      id: 'multiple-sorter',
      title: '多列排序',
      enTitle: 'Multiple Sorter',
    },
    {
      id: 'reset-filter',
      title: '可控的筛选和排序',
      enTitle: 'Reset filters and sorters',
    },
    {
      id: 'custom-filter-panel',
      title: '自定义筛选菜单',
      enTitle: 'Customized filter panel',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
