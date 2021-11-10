<template>
  <div>
    <EditCell />
    <EditRow />
    <editCellPerfVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import EditCell from './edit-cell.vue';
import EditRow from './edit-row.vue';
import editCellPerfVue from './edit-cell-perf.vue';

export default defineComponent({
  components: {
    EditCell,
    EditRow,
    editCellPerfVue,
  },
  title: '增删改',
  enTitle: 'Add、Delete、Edit',
  type: 'edit',
  children: [
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
      title: '高性能编辑',
      enTitle: 'Editable Performance',
      disabled: true,
    },
    {
      id: 'edit-modal',
      title: '弹窗编辑',
      enTitle: 'Edit Modal',
      disabled: true,
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
