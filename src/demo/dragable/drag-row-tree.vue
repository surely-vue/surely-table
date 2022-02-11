<docs>
---
order: 0
title:
  zh-CN: 树形拖拽
  en-US: Drag Tree Table
---

## zh-CN

对于树形结构，组件新增了一个父节点高亮效果，即拖拽后是哪个节点的子节点。

## en-US

For the tree structure, the component adds a parent node highlighting effect, that is, the child node of which node is dragged.
</docs>

<template>
  <a-space align="center" style="margin-bottom: 16px">
    CheckStrictly:
    <a-switch v-model:checked="rowSelection.checkStrictly"></a-switch>
  </a-space>
  <s-table
    :columns="columns"
    :data-source="data"
    :row-selection="rowSelection"
    expand-row-by-click
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
  children?: DataItem[];
}

export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        rowDrag: true,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '12%',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        width: '30%',
        key: 'address',
      },
    ];
    const data: DataItem[] = [
      {
        key: 1,
        name: 'John Brown sr.',
        age: 60,
        address: 'New York No. 1 Lake Park',
        children: [
          {
            key: 11,
            name: 'John Brown',
            age: 42,
            address: 'New York No. 2 Lake Park',
          },
          {
            key: 12,
            name: 'John Brown jr.',
            age: 30,
            address: 'New York No. 3 Lake Park',
            children: [
              {
                key: 121,
                name: 'Jimmy Brown',
                age: 16,
                address: 'New York No. 3 Lake Park',
              },
            ],
          },
          {
            key: 13,
            name: 'Jim Green sr.',
            age: 72,
            address: 'London No. 1 Lake Park',
            children: [
              {
                key: 131,
                name: 'Jim Green',
                age: 42,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 1311,
                    name: 'Jim Green jr.',
                    age: 25,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 1312,
                    name: 'Jimmy Green sr.',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: 3,
        name: 'Joe Green',
        age: 42,
        address: 'Sidney No. 2 Lake Park',
      },
    ];

    const rowSelection = ref({
      checkStrictly: false,
      onChange: (selectedRowKeys: (string | number)[], selectedRows: DataItem[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected: boolean, selectedRows: DataItem[], changeRows: DataItem[]) => {
        console.log(selected, selectedRows, changeRows);
      },
    });
    return {
      data,
      columns,
      rowSelection,
    };
  },
});
</script>
