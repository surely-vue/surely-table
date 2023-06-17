<template>
  <div>
    <edit-cell-native />
    <edit-cell />
    <edit-row />
    <edit-cell-perf-vue />
    <edit-modal-vue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import EditCell from './edit-cell.vue';
import EditRow from './edit-row.vue';
import editCellPerfVue from './edit-cell-perf.vue';
import editModalVue from './edit-modal.vue';
import EditCellNative from './edit-cell-native.vue';

export default defineComponent({
  components: {
    EditCell,
    EditRow,
    editCellPerfVue,
    editModalVue,
    EditCellNative,
  },
  title: '编辑',
  enTitle: 'Add、Delete、Edit',
  type: 'edit',
  children: [
    {
      id: 'edit-cell-native',
      title: '高性能编辑单元格(推荐)',
      enTitle: 'Edit Cell Native',
    },
    {
      id: 'edit-cell',
      title: '编辑单元格',
      enTitle: 'Edit Cell',
    },
    {
      id: 'edit-row',
      title: '编辑行',
      enTitle: 'Edit Row',
    },
    {
      id: 'edit-cell-perf',
      title: 'v-model 编辑',
      enTitle: 'v-model edit',
    },
    {
      id: 'edit-more',
      title: '编辑更多内容',
      enTitle: 'Edit More',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
