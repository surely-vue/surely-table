<docs>
---
order: 0
title:
  zh-CN: 指定行高
  en-US: Set rowHeight
---

## zh-CN

指定行高可以拥有更好的性能

> 通过 css 指定行高，达不到提升性能的目的
> 固定行高不会对展开行、子表格生效，他们会自动调整高度


## en-US

Specifying the row height can have better performance

> Specifying the row height through css does not achieve the purpose of improving performance
> row height will not take effect on expanded rows and sub-tables, they will automatically adjust the height

</docs>

<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 400 }"
    :pagination="false"
    :data-source="dataSource"
    :row-height="50"
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
