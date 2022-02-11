<docs>
---
order: 0
title:
  zh-CN: 表格高度
  en-US: Table Height
---

## zh-CN

固定表格高度，不受内容多少的影响

> `height` 和 `scroll.y` 一般只需要设置一个，当然你可以同时设置，组合出你想要的效果

## en-US

Fixed table height, not affected by content

> `height` and `scroll.y` generally only need to be set, of course, you can set them at the same time to combine the effects you want

</docs>
<template>
  <s-table
    :columns="columns"
    :scroll="{ x: 1000 }"
    :height="500"
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
      },
      {
        title: 'Age',
        dataIndex: 'age',
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
    ];
    const data: DataItem[] = [];
    for (let i = 0; i < 1; i++) {
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
