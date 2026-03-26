<docs>
---
order: 5
title:
  en-US: Standalone Export
  zh-CN: 独立导出（无需表格实例）
---

## zh-CN

使用 `exportToCsv` 方法可以直接传入数据和列定义进行导出，不依赖表格组件实例。适用于导出非表格展示的数据。

## en-US

Use the `exportToCsv` function to export data directly without a table instance. Just pass data and column definitions. Useful for exporting data that is not displayed in a table.

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" @click="handleExport">Standalone CSV Export</a-button>
    </div>
    <p>
      This example exports data using
      <code>exportToCsv</code>
      without rendering a table.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { exportToCsv } from '@surely-vue/table';

export default defineComponent({
  setup() {
    const columns = [
      { title: 'Product', dataIndex: 'product', key: 'product' },
      { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
      { title: 'Price', dataIndex: 'price', key: 'price' },
    ];
    const data = [
      { product: 'Apple', quantity: 100, price: 5.5 },
      { product: 'Banana', quantity: 200, price: 3.2 },
      { product: 'Orange', quantity: 150, price: 4.0 },
    ];

    const handleExport = () => {
      exportToCsv({
        data,
        columns,
        fileName: 'standalone-export',
        processCellCallback: ({ value, column }) => {
          if (column.dataIndex === 'price') return `$${value}`;
          return String(value ?? '');
        },
      });
    };

    return { handleExport };
  },
});
</script>
