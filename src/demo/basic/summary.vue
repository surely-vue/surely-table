<docs>
---
order: 29
title:
  en-US: Summary
  zh-CN: 总结栏
---

## zh-CN

通过 `summary` 插槽设置总结栏。因为支持设置多行总结栏，所以不能简单的通过属性进行设置。

使用 `s-table-summary-row` 设置一行，`s-table-summary-cell` 设置列。

你可以通过在 `s-table-summary-cell` 上设置 `index` 和 `colSpan`，来表示展示位置和合并列数。

你可以通过插槽 default 获取组件内部自动计算的和，当然你也可以设置任意内容。

## en-US

Set summary content by `summary` slot. Because it supports the setting of multi-line summary columns, it cannot be set simply through properties.

Use `s-table-summary-row` to set a row, and `s-table-summary-cell` to set a column.

You can set the `index` and `colSpan` on the `s-table-summary-cell` to indicate the placement and the number of combined columns.

You can get the sum automatically calculated inside the component through the slot default, of course, you can also set any content.
</docs>

<template>
  <s-table :columns="columns" :data-source="dataSource" bordered>
    <template #summary>
      <s-table-summary-row>
        <s-table-summary-cell :index="0">Total</s-table-summary-cell>
        <s-table-summary-cell :index="1">
          <template #default="{ total }">
            <span style="color: red">{{ total }}</span>
          </template>
        </s-table-summary-cell>
        <s-table-summary-cell :index="2">
          <template #default="{ total }">{{ total }}</template>
        </s-table-summary-cell>
      </s-table-summary-row>
      <s-table-summary-row>
        <s-table-summary-cell :index="0">Balance</s-table-summary-cell>
        <s-table-summary-cell :index="1" :col-span="2">
          <template #default="{ total }">
            <span style="color: red">
              {{ `${total} - ${repaymentTotal} = ${total - repaymentTotal}` }}
            </span>
          </template>
        </s-table-summary-cell>
      </s-table-summary-row>
    </template>
  </s-table>
  <s-table :columns="fixedColumns" :data-source="fixedData" :scroll-x="2000" :height="400">
    <template #summary>
      <s-table-summary-row>
        <s-table-summary-cell :index="0">Summary</s-table-summary-cell>
        <s-table-summary-cell :index="1">This is a summary content</s-table-summary-cell>
      </s-table-summary-row>
    </template>
  </s-table>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow',
  },
  {
    title: 'Repayment',
    dataIndex: 'repayment',
  },
];

interface DataItem {
  rowKey: string;
  name: string;
  borrow: number;
  repayment: number;
}

const fixedColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: true,
    width: 100,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

const fixedData: any[] = [];
for (let i = 0; i < 20; i += 1) {
  fixedData.push({
    rowKey: i,
    name: ['Light', 'Bamboo', 'Little'][i % 3],
    description: 'Everything that has a beginning, has an end.',
  });
}

export default defineComponent({
  setup() {
    const data: DataItem[] = [
      {
        rowKey: '1',
        name: 'John Brown',
        borrow: 10,
        repayment: 33,
      },
      {
        rowKey: '2',
        name: 'Jim Green',
        borrow: 100,
        repayment: 0,
      },
      {
        rowKey: '3',
        name: 'Joe Black',
        borrow: 10,
        repayment: 10,
      },
      {
        rowKey: '4',
        name: 'Jim Red',
        borrow: 75,
        repayment: 45,
      },
    ];

    const repaymentTotal = computed(() => {
      return data.reduce((pre, { repayment }) => pre + repayment, 0);
    });

    return {
      dataSource: data,
      columns: ref(columns),
      fixedColumns,
      fixedData,
      repaymentTotal,
    };
  },
});
</script>
