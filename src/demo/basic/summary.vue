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
  <s-table :columns="columns" :data-source="data" :pagination="false" bordered>
    <template #summary>
      <s-table-summary-row>
        <s-table-summary-cell :index="0">Total</s-table-summary-cell>
        <s-table-summary-cell :index="1">
          <template #default="{ total }">
            <a-typography-text type="danger">{{ total }}</a-typography-text>
          </template>
        </s-table-summary-cell>
        <s-table-summary-cell :index="2">
          <a-typography-text>{{ totals.totalRepayment }}</a-typography-text>
        </s-table-summary-cell>
      </s-table-summary-row>
      <s-table-summary-row>
        <s-table-summary-cell :index="0">Balance</s-table-summary-cell>
        <s-table-summary-cell :index="1" :col-span="2">
          <a-typography-text type="danger">
            {{ totals.totalBorrow - totals.totalRepayment }}
          </a-typography-text>
        </s-table-summary-cell>
      </s-table-summary-row>
    </template>
  </s-table>
  <br />
  <s-table
    :columns="fixedColumns"
    :data-source="fixedData"
    :pagination="false"
    :scroll="{ x: 2000, y: 500 }"
    bordered
    summary-fixed
  >
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

export default defineComponent({
  setup() {
    const columns = ref([
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
    ]);

    const data = ref([
      {
        key: '1',
        name: 'John Brown',
        borrow: 10,
        repayment: 33,
      },
      {
        key: '2',
        name: 'Jim Green',
        borrow: 100,
        repayment: 0,
      },
      {
        key: '3',
        name: 'Joe Black',
        borrow: 10,
        repayment: 10,
      },
      {
        key: '4',
        name: 'Jim Red',
        borrow: 75,
        repayment: 45,
      },
    ]);

    const fixedColumns = ref([
      {
        title: 'Name',
        dataIndex: 'name',
        fixed: true,
        width: 500,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        width: 1000,
      },
    ]);

    const fixedData = ref<{ key: number; name: string; description: string }[]>([]);
    for (let i = 0; i < 20; i += 1) {
      fixedData.value.push({
        key: i,
        name: ['Light', 'Bamboo', 'Little'][i % 3],
        description: 'Everything that has a beginning, has an end.',
      });
    }

    const totals = computed(() => {
      let totalBorrow = 0;
      let totalRepayment = 0;

      data.value.forEach(({ borrow, repayment }) => {
        totalBorrow += borrow;
        totalRepayment += repayment;
      });
      return { totalBorrow, totalRepayment };
    });
    return {
      data,
      columns,
      totals,
      fixedColumns,
      fixedData,
    };
  },
});
</script>

<style>
#components-table-demo-summary tfoot th,
#components-table-demo-summary tfoot td {
  background: #fafafa;
}
[data-theme='dark'] #components-table-demo-summary tfoot th,
[data-theme='dark'] #components-table-demo-summary tfoot td {
  background: #1d1d1d;
}
</style>
