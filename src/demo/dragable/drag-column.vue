<docs>
---
order: 0
title:
  zh-CN: 列拖拽
  en-US: Column Drag
---

## zh-CN

设置 `columnDrag = true`, 启用全列拖拽(选择、展开除外)。

也可以单独为 `column`` 设置 `drag`, 个性化配置。

其它自定义拖拽提示、二次确认拖拽，可参考行拖拽。

## en-US

Set `columnDrag = true` to enable full-column dragging (except for selection and expansion).

You can also set `drag` for `column` separately, personal configuration.

For other custom dragging prompts and secondary confirmation dragging, please refer to row dragging.
</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="false"
    :scroll="{ y: 500, x: 2000 }"
    column-drag
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
        width: 150,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 100,
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: 'address1',
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
        drag: false,
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
