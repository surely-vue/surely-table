<docs>
---
order: 2
title:
  en-US: Export Specific Rows & Columns
  zh-CN: 导出指定行列
---

## zh-CN

通过 `rowKeys` 指定导出的数据行，通过 `columnKeys` 指定导出的列。

## en-US

Use `rowKeys` to specify which rows to export, and `columnKeys` to specify which columns to export.

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-space>
        <a-button @click="handleExportAll">Export All</a-button>
        <a-button @click="handleExportSelectedRows">Export Rows (key: 1, 3)</a-button>
        <a-button @click="handleExportSelectedColumns">Export Columns (Name, Age)</a-button>
        <a-button type="primary" @click="handleExportRowsAndColumns">
          Export Rows & Columns (key: 2, 4 + Name, Address)
        </a-button>
      </a-space>
    </div>
    <s-table ref="tableRef" :columns="columns" :data-source="data" :pagination="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DataType {
  key: number;
  name: string;
  age: number;
  email: string;
  address: string;
}

export default defineComponent({
  setup() {
    const tableRef = ref();
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
    ];
    const data: DataType[] = [
      {
        key: 1,
        name: 'John Brown',
        age: 32,
        email: 'john@example.com',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: 2,
        name: 'Jim Green',
        age: 42,
        email: 'jim@example.com',
        address: 'London No. 1 Lake Park',
      },
      {
        key: 3,
        name: 'Joe Black',
        age: 28,
        email: 'joe@example.com',
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: 4,
        name: 'Edward King',
        age: 36,
        email: 'edward@example.com',
        address: 'Los Angeles No. 1 Lake Park',
      },
    ];

    const handleExportAll = () => {
      tableRef.value.exportDataAsCsv({ fileName: 'all-data' });
    };
    const handleExportSelectedRows = () => {
      tableRef.value.exportDataAsCsv({
        fileName: 'selected-rows',
        rowKeys: [1, 3],
      });
    };
    const handleExportSelectedColumns = () => {
      tableRef.value.exportDataAsCsv({
        fileName: 'selected-columns',
        columnKeys: ['name', 'age'],
      });
    };
    const handleExportRowsAndColumns = () => {
      tableRef.value.exportDataAsCsv({
        fileName: 'rows-and-columns',
        rowKeys: [2, 4],
        columnKeys: ['name', 'address'],
      });
    };

    return {
      tableRef,
      columns,
      data,
      handleExportAll,
      handleExportSelectedRows,
      handleExportSelectedColumns,
      handleExportRowsAndColumns,
    };
  },
});
</script>
