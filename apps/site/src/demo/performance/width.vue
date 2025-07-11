<docs>
---
order: 0
title:
  zh-CN: 指定宽度
  en-US: Set width
---

## zh-CN

对列指定数字类型的宽度，可以提升性能
如果是百分比或者其它字符串类型的宽度，性能会有一定的损耗

## en-US

Specify the width of the number type for the column to improve performance


</docs>

<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 400 }"
    :pagination="false"
    :data-source="dataSource"
  ></s-table>
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
        width: 100,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 100,
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        width: 100,
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        width: 100,
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        width: 100,
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        width: 100,
      },
      { title: 'Column 5', dataIndex: 'address', width: 100 },
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
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
