<docs>
---
order: 3
title:
  en-US: Custom Cell Format
  zh-CN: 自定义单元格格式
---

## zh-CN

通过 `processCellCallback` 自定义导出时的单元格内容，通过 `processHeaderCallback` 自定义表头文本。

## en-US

Use `processCellCallback` to customize cell content during export, and `processHeaderCallback` to customize header text.

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" @click="handleExport">Export with Formatting</a-button>
    </div>
    <s-table ref="tableRef" :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'salary'">${{ text.toLocaleString() }}</template>
        <template v-else-if="column.dataIndex === 'status'">
          <a-tag :color="text === 'active' ? 'green' : 'red'">
            {{ text === 'active' ? 'Active' : 'Inactive' }}
          </a-tag>
        </template>
      </template>
    </s-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DataType {
  key: number;
  name: string;
  department: string;
  salary: number;
  status: string;
}

export default defineComponent({
  setup() {
    const tableRef = ref();
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Department', dataIndex: 'department', key: 'department' },
      { title: 'Salary', dataIndex: 'salary', key: 'salary' },
      { title: 'Status', dataIndex: 'status', key: 'status' },
    ];
    const data: DataType[] = [
      { key: 1, name: 'John Brown', department: 'Engineering', salary: 25000, status: 'active' },
      { key: 2, name: 'Jim Green', department: 'Product', salary: 20000, status: 'active' },
      { key: 3, name: 'Joe Black', department: 'Engineering', salary: 30000, status: 'inactive' },
      { key: 4, name: 'Edward King', department: 'Design', salary: 18000, status: 'active' },
    ];

    const handleExport = () => {
      tableRef.value.exportDataAsCsv({
        fileName: 'formatted-export',
        processHeaderCallback: ({ column }) => {
          const map: Record<string, string> = {
            name: 'Employee Name',
            department: 'Dept',
            salary: 'Annual Salary',
            status: 'Employment Status',
          };
          return map[column.dataIndex as string] ?? String(column.dataIndex);
        },
        processCellCallback: ({ value, column }) => {
          if (column.dataIndex === 'salary') {
            return `$${value.toLocaleString()}`;
          }
          if (column.dataIndex === 'status') {
            return value === 'active' ? 'Active' : 'Inactive';
          }
          return String(value ?? '');
        },
      });
    };

    return { tableRef, columns, data, handleExport };
  },
});
</script>
