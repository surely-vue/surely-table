<docs>
---
order: 0
title:
  zh-CN: 基本分页
  en-US: Basic Pagination
---

## zh-CN

组件默认开启了分页，你不但可以通过 `pagination` 配置显示或隐藏，还可以配置显示位置。

如果需要，还可以同时配置上下同时显示分页。

## en-US

The component has pagination enabled by default. Not only can you configure the display or hide through `pagination`, you can also configure the display position.

If necessary, you can also configure the top and bottom to display paging simultaneously.

</docs>

<template>
  <a-radio-group
    v-model:value="top"
    :options="topOptions"
    style="margin-bottom: 10px"
  ></a-radio-group>
  <br />
  <a-radio-group
    v-model:value="bottom"
    :options="bottomOptions"
    style="margin-bottom: 10px"
  ></a-radio-group>
  <s-table :columns="columns" :data-source="dataSource" :pagination="{ position: [top, bottom] }">
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.key === 'action'">
        <a-space size="middle">
          <a>Invite {{ record.name }}</a>
          <a>Delete</a>
        </a-space>
      </template>
      <template v-else-if="column.key === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in text"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
    </template>
  </s-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

type Options = { label: string; value: string }[];

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default defineComponent({
  setup() {
    const topOptions: Options = [
      { label: 'topLeft', value: 'topLeft' },
      { label: 'topCenter', value: 'topCenter' },
      { label: 'topRight', value: 'topRight' },
      { label: 'none', value: 'none' },
    ];

    const bottomOptions: Options = [
      { label: 'bottomLeft', value: 'bottomLeft' },
      { label: 'bottomCenter', value: 'bottomCenter' },
      { label: 'bottomRight', value: 'bottomRight' },
      { label: 'none', value: 'none' },
    ];

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
      },
      {
        title: 'Action',
        key: 'action',
      },
    ];
    const data: DataItem[] = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    const top = ref('topLeft');
    const bottom = ref('bottomRight');
    return {
      dataSource: ref(data),
      columns: ref(columns),
      top,
      bottom,
      topOptions,
      bottomOptions,
    };
  },
});
</script>
