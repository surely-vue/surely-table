<docs>
---
order: 0
title:
  zh-CN: 自定义拖拽提示
  en-US: Custom Drag Ghost
---

## zh-CN

组件内部默认使用当前单元格的内容显示提示，你可以使用 `rowDragGhost` 插槽自定义内容。

## en-US
By default, the component will use the content of the current cell to display the prompt. You can use the `rowDragGhost` slot to customize the content.

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
    <template #rowDragGhost="{ record, icon, preTargetInfo, nextTargetInfo }">
      <component :is="icon"></component>
      <span style="color: red">
        dragging from {{ record.name }} to
        {{ preTargetInfo?.record.name || nextTargetInfo?.record.name }}
      </span>
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
