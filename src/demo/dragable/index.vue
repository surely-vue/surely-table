<template>
  <div>
    <Columns />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Columns from './columns.vue';

export default defineComponent({
  components: {
    Columns,
  },
  title: '拖拽',
  enTitle: 'Dragable',
  type: 'dragable',
  children: [
    {
      id: 'columns',
      title: '列宽拖拽',
      enTitle: 'Resize Width',
    },
    {
      id: 'sort',
      title: '拖拽排序',
      enTitle: 'Drag sorting',
      disabled: true,
    },
    {
      id: 'multipe-sort',
      title: '多行拖拽',
      enTitle: 'Multipe drag sorting',
      disabled: true,
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
