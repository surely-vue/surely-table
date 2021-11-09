<docs>
---
order: 12
title:
  zh-CN: 固定表头
  en-US: Fixed Header
---

## zh-CN

方便一页内展示大量数据。

## en-US

Display large amounts of data in scrollable view.

</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [...Array(100)].map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
