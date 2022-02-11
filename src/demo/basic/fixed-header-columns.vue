<docs>
---
order: 0
title:
  en-US: Fixed Columns and Header
  zh-CN: 固定头和列
---

## zh-CN

适合同时展示有大量数据和数据列。

你需要设置  `scrollX` 或者 给每一列都设置宽度，当 `scrollX` 或 列宽总和超过表格宽度时出现滚动条。

你可以设置任意数量的 fixed = `left` \| `true`, 来固定列的位置。

设置 `height` 来固定表头

> 尝试缩放浏览器宽度查看效果吧

## en-US

A Solution for displaying large amounts of data with long columns.

You need to set `scrollX` or set the width for each column. When the sum of `scrollX` or the column width exceeds the table width, a scroll bar will appear.

You can set any number of fixed = `left` \| `true`, to fix the position of the column.

Set `height` to fix the header.

> Try zooming the browser width to see the effect

</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :scroll="{ y: 400, x: 2000 }"
    :pagination="false"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Action</a>
      </template>
    </template>
  </s-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 150,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
      },
      { title: 'Column 5', dataIndex: 'address' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
      },
    ];
    const data: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
