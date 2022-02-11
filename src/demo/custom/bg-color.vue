<docs>
---
order: 0
title:
  zh-CN: 自定义背景色
  en-US: Custom Color
---

## zh-CN

自定义 `Header` `Body` `Summary` `Row` `Cell` 的背景色。
由于有固定列、固定行等功能，没有办法简单的改变背景色。

## en-US

Custom `Header` `Body` `Summary` `Row` `Cell` background color

</docs>
<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :scroll="{ y: 400, x: 2000 }"
    :pagination="false"
    :custom-row="customRow"
    :custom-cell="customCell"
    :custom-header-cell="customHeaderCell"
    summary-fixed
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Action</a>
      </template>
    </template>
    <template #summary>
      <s-table-summary-row>
        <s-table-summary-cell style="background-color: #d3adf7" :index="0">
          Summary
        </s-table-summary-cell>
        <s-table-summary-cell style="background-color: #ffadd2; color: #1890ff" :index="1">
          <template #default="{ total }">{{ total }}</template>
        </s-table-summary-cell>
        <s-table-summary-cell :index="2" :col-span="Infinity" style="background-color: #ffadd2">
          <!-- 使用 col-span 占位来自定义颜色 -->
        </s-table-summary-cell>
        <s-table-summary-cell
          column-key="operation"
          style="background-color: #ffadd2"
        ></s-table-summary-cell>
      </s-table-summary-row>
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
    const customRow = (record, index) => {
      return index % 2 === 1
        ? { style: { background: '#ffa39e' } }
        : { style: { background: '#91d5ff' } };
    };
    const customCell = ({ rowIndex, column }) => {
      if (column.dataIndex === 'name') {
        return rowIndex < 3
          ? { style: { background: '#f5222d' } }
          : { style: { background: '#87e8de' } };
      } else if (column.key === 'operation') {
        return { style: { background: '#fffb8f' } };
      }
      return {};
    };
    const customHeaderCell = column => {
      return column.fixed ? { style: { background: '#b7eb8f' } } : {};
    };
    return {
      dataSource: ref(data),
      columns: ref(columns),
      customRow,
      customCell,
      customHeaderCell,
    };
  },
});
</script>
