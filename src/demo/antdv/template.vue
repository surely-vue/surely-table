<docs>
---
order: 99
title:
  en-US: template style API
  zh-CN: template 风格的 API
---

## zh-CN

使用 template 风格的 API。

> 不推荐使用，会有一定的性能损耗。

> 这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column` 和 `ColumnGroup`。

## en-US

Using template style API.

> Not recommended, there will be a certain performance loss.

> Since this is just a syntax sugar for the prop `columns`, so that you can't compose `Column` and `ColumnGroup` with other Components.

</docs>

<template>
  <s-table :data-source="data">
    <s-table-column-group>
      <template #title><span style="color: #1890ff">Name</span></template>
      <s-table-column key="firstName" data-index="firstName">
        <template #title><span style="color: #1890ff">First Name</span></template>
      </s-table-column>
      <s-table-column key="lastName" title="Last Name" data-index="lastName" />
    </s-table-column-group>
    <s-table-column key="age" title="Age" data-index="age" />
    <s-table-column key="address" title="Address" data-index="address" />
    <s-table-column key="tags" title="Tags" data-index="tags">
      <template #default="{ text: tags }">
        <span>
          <a-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</a-tag>
        </span>
      </template>
    </s-table-column>
    <s-table-column key="action" title="Action">
      <template #default="{ record }">
        <span>
          <a>Action 一 {{ record.firstName }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
        </span>
      </template>
    </s-table-column>
  </s-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>
