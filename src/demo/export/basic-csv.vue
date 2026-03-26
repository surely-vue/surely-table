<docs>
---
order: 1
title:
  en-US: Basic CSV Export
  zh-CN: 基础 CSV 导出
---

## zh-CN

通过 `ref` 获取表格实例，调用 `exportDataAsCsv()` 方法导出 CSV 文件。默认导出所有经过排序和筛选后的数据。

## en-US

Get the table instance via `ref` and call `exportDataAsCsv()` to export a CSV file. By default, all sorted and filtered data is exported.

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" @click="handleExport">Export CSV</a-button>
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
  address: string;
}

export default defineComponent({
  setup() {
    const tableRef = ref();
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
    ];
    const data: DataType[] = [
      { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
      { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
      { key: 3, name: 'Joe Black', age: 28, address: 'Sidney No. 1 Lake Park' },
      { key: 4, name: 'Edward King', age: 36, address: 'Los Angeles No. 1 Lake Park' },
    ];

    const handleExport = () => {
      tableRef.value.exportDataAsCsv({
        fileName: 'basic-export',
      });
    };

    return { tableRef, columns, data, handleExport };
  },
});
</script>
