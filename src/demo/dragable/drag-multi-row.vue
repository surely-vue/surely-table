<docs>
---
order: 6
title:
  zh-CN: 多行拖拽
  en-US: Multipe drag sorting
---

## zh-CN

选中多行后，拖拽其中任意一行，可以将所有选中行一起移动到目标位置。

注意：多行拖拽仅支持扁平数据，不支持树形结构。

## en-US

Select multiple rows, then drag any selected row to move all selected rows together to the target position.

Note: Multi-row drag only supports flat data, not tree structures.
</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :row-selection="rowSelection"
    :pagination="false"
    :scroll="{ y: 500, x: 2000 }"
    multi-row-drag
    @rowDragEnd="onRowDragEnd"
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
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
        resizable: true,
        key: 'age',
      },
      {
        title: 'Column 1',
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
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    const selectedRowKeys = ref<number[]>([]);
    const rowSelection = ref({
      selectedRowKeys,
      onChange: (keys: number[]) => {
        selectedRowKeys.value = keys;
      },
    });
    const onRowDragEnd = (info: any) => {
      console.log('rowDragEnd', info);
    };
    return {
      dataSource: ref(data),
      columns,
      rowSelection,
      onRowDragEnd,
    };
  },
});
</script>
