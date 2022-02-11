<docs>
---
order: 0
title:
  zh-CN: 行拖拽
  en-US: Drag sorting
---

## zh-CN

设置 `rowDrag = true`, 该列将添加拖拽图标。

`rowDrag` 同样可以是一个返回 boolean 类型的函数，用来自定义不同的行是否允许 拖拽。

## en-US

Set `rowDrag = true`, the drag icon will be added to the column.

`rowDrag` can also be a function that returns a boolean to customize whether different rows are allowed to be dragged.
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
        rowDrag: true,
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
