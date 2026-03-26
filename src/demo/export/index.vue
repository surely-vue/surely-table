<template>
  <div>
    <basic-csv />
    <export-rows-columns />
    <process-cell />
    <export-excel />
    <export-merge />
    <standalone />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BasicCsv from './basic-csv.vue';
import ExportRowsColumns from './export-rows-columns.vue';
import ProcessCell from './process-cell.vue';
import ExportExcel from './export-excel.vue';
import ExportMerge from './export-merge.vue';
import Standalone from './standalone.vue';

export default defineComponent({
  components: {
    BasicCsv,
    ExportRowsColumns,
    ProcessCell,
    ExportExcel,
    ExportMerge,
    Standalone,
  },
  title: '导出',
  enTitle: 'Export',
  type: 'export',
  children: [
    {
      id: 'basic-csv',
      title: '基础 CSV 导出',
      enTitle: 'Basic CSV Export',
    },
    {
      id: 'export-rows-columns',
      title: '导出指定行列',
      enTitle: 'Export Specific Rows & Columns',
    },
    {
      id: 'process-cell',
      title: '自定义单元格格式',
      enTitle: 'Custom Cell Format',
    },
    {
      id: 'export-excel',
      title: '导出 Excel',
      enTitle: 'Excel Export',
    },
    {
      id: 'export-merge',
      title: '导出合并单元格',
      enTitle: 'Export Merged Cells',
    },
    {
      id: 'standalone',
      title: '独立导出',
      enTitle: 'Standalone Export',
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
