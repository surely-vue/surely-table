<docs>
---
order: 12
title:
  en-US: stripe
  zh-CN: 斑马纹
---

## zh-CN

斑马纹样式，让不同行的数据更加容易区分

## en-US

The stripe pattern makes it easier to distinguish the data in different rows

</docs>

<template>
  <s-table :columns="columns" :data-source="dataSource" stripe></s-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Cash Assets',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

interface DataItem {
  rowKey: string;
  name: string;
  money: string;
  address: string;
}

export default defineComponent({
  setup() {
    const data: DataItem[] = [
      {
        rowKey: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        rowKey: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
      },
      {
        rowKey: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
      },
      {
        rowKey: '4',
        name: 'Tom',
        money: '￥186,000.00',
        address: 'Sidney No. 2 Lake Park',
      },
      {
        rowKey: '5',
        name: 'Tony',
        money: '￥110,000.00',
        address: 'Sidney No. 2 Lake Park',
      },
      {
        rowKey: '6',
        name: 'YaYa',
        money: '￥200,000.00',
        address: 'Sidney No. 4 Lake Park',
      },
    ];
    return {
      dataSource: data,
      columns: ref(columns),
    };
  },
});
</script>
