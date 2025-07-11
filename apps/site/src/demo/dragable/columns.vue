<docs>
---
order: 0
title:
  zh-CN: 列宽拖拽
  en-US: Resize Width
---

## zh-CN

设置 `resizable = true`, 可以将列变成可拖拽改变宽度的列，通过设置 minWidth、maxWidth 控制列宽的最小宽度和最大宽度，当然这都是可选的配置。
当有些列没有设置 width 时，该列将会是自动伸缩，其它可拖拽的列大小改变时，会重新计算自动伸缩列的宽度。

注意：仅支持叶子结点拖拽

## en-US

Set `resizable = true`, you can turn the column into a column that can be dragged to change the width. By setting minWidth and maxWidth, you can control the minimum and maximum width of the column width. Of course, this is an optional configuration.
When some columns are not set to width, the column will be automatically stretched. When the size of other draggable columns is changed, the width of the automatically stretched column will be recalculated.

Note: Only leaf node dragging is supported
</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="false"
    :scroll="{ y: 500, x: 2000 }"
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
    const columns = ref([
      {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 150,
        resizable: true,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
        resizable: true,
      },
      {
        title: 'Column 1（minWidth： 100， maxWidth： 500）',
        dataIndex: 'address',
        key: 'address1',
        minWidth: 100,
        maxWidth: 500,
        resizable: true,
      },
      {
        title: 'Column 2',
        key: 'address2',
        dataIndex: 'address',
      },
      {
        title: 'Column 3',
        key: 'address3',
        dataIndex: 'address',
      },
      {
        title: 'Column 4',
        key: 'address4',
        dataIndex: 'address',
      },
      { title: 'Column 5', dataIndex: 'address', key: 'address5' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        resizable: true,
      },
    ]);
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
      columns,
    };
  },
});
</script>
