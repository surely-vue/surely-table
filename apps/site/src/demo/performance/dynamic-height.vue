<docs>
---
order: 0
title:
  zh-CN: 动态高度
  en-US: Dynamic Height
---

## zh-CN

如果指定固定高度不能满足，可以尝试使用函数形式的 `rowHeight`，
你可以对每一列设置不同的高度，包括展开行、子表格，当展开行、子表格返回 `undefined` 时，会启用自动行高

## en-US

If the specified fixed height is not enough, you can try to use the function form of `rowHeight`,
You can set different heights for each column, including expanded rows and sub-tables. When expanded rows and sub-tables return `undefined`, automatic row height will be enabled

</docs>

<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 400, x: 2000 }"
    :pagination="false"
    :data-source="dataSource"
    :row-height="getRowHeight"
    stripe
  >
    <template #expandedRowRender>
      <p style="margin: 0">More info, More Height</p>
    </template>
  </s-table>
</template>

<script lang="ts">
import type { RowHeight } from '@surely-vue/table';
import { defineComponent } from 'vue';

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
        width: 200,
      },
      {
        title: 'Age',
        dataIndex: 'age',
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
    const getRowHeight: RowHeight = (record, isExpandRow, defaultHeight) => {
      if (isExpandRow) {
        return 100;
      }
      if (record.age % 2 === 1) {
        return 40;
      } else {
        return defaultHeight;
      }
    };
    return {
      dataSource: data,
      columns,
      getRowHeight,
    };
  },
});
</script>
