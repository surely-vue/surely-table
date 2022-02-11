<docs>
---
order: 0
title:
  zh-CN: Tooltip 自定义提示
  en-US: Tooltip
---

## zh-CN

使用 `tooltip.title` 或 `slot="tooltipTitle"` 自定义更加友好的提示。

你可以全量开启 tooltip，不用担心性能问题，我们已经帮你解决了。

本示例，Full Name、Column 1 两列开启了 tooltip。

## en-US

Use `tooltip.title` or `slot="tooltipTitle"` to customize more friendly tips.

You can open the tooltip in full without worrying about performance issues, we have solved it for you.

In this example, the tooltip is turned on in the `Full Name` and `Column 1` columns.

</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :scroll="{ y: 400, x: 2000 }"
    :pagination="false"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Action</a>
      </template>
    </template>
    <template #tooltipTitle="{ value }">
      <HomeTwoTone />
      {{ value }}
    </template>
  </s-table>
</template>

<script lang="ts">
import type { SurelyTableProps } from '@surely-vue/table';
import { defineComponent, ref } from 'vue';
import { HomeTwoTone } from '@ant-design/icons-vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  components: { HomeTwoTone },
  setup() {
    const columns: SurelyTableProps['columns'] = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 150,
        tooltip: { title: ({ value }) => value, color: '#f50', placement: 'topLeft' },
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
        // set `showTitle: false` close dom title
        ellipsis: { showTitle: false },
        // we can set object not have title prop, then use `tooltipTitle` slot
        tooltip: { placement: 'topLeft' },
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
    for (let i = 0; i < 5000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
