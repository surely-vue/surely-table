<docs>
---
order: 1
title:
  zh-CN: 整行拖动
  en-US: Whole-row drag
---

## zh-CN

把顶层 `rowDrag` 设置为 `WHOLE_ROW_DRAG_KEY`，行内任意位置都可发起拖动，不再依赖列上的拖拽手柄。

注意：与 `rangeSelection` 互斥。开启整行拖动后，框选会被静默禁用。

## en-US

Set the top-level `rowDrag` to `WHOLE_ROW_DRAG_KEY` and the row can be dragged from anywhere, no column handle required.

Note: mutually exclusive with `rangeSelection`. Range selection is silently disabled when whole-row drag is on.
</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="false"
    :row-drag="WHOLE_ROW_DRAG_KEY"
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
import { WHOLE_ROW_DRAG_KEY } from '@surely-vue/table';

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
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
        key: 'age',
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: 'address1',
        minWidth: 100,
        maxWidth: 500,
      },
      { title: 'Column 2', key: 'address2', dataIndex: 'address' },
      { title: 'Column 3', key: 'address3', dataIndex: 'address' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
      },
    ]);
    const data: DataItem[] = [];
    for (let i = 0; i < 200; i++) {
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
      WHOLE_ROW_DRAG_KEY,
    };
  },
});
</script>
