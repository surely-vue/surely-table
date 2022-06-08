<docs>
---
order: 0
title:
  zh-CN: 分页配置
  en-US: Pagination Config
---

## zh-CN

除了可以配置分页位置和个数之外，你还可以配置 ant-design-vue `pagination` 组件的其它部分属性。

建议你使用 TypeScript，组件暴露了 `TablePaginationConfig` 类型，你可以更加方便的配置属性。

如果这些配置依然不能满足你，请继续阅读文档，查看[自定义示例](#custom)

## en-US

In addition to configuring the pagination position and number, you can also configure some other properties of the ant-design-vue `pagination` component.

It is recommended that you use TypeScript, the component exposes the `TablePaginationConfig` type, you can configure the properties more conveniently

If these configurations still can’t satisfy you, please continue reading the document and check [Custom Examples](#custom)
</docs>

<template>
  <s-table
    v-model:pagination="pagination"
    :columns="columns"
    :data-source="dataSource"
    :height="400"
  >
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
import type { STablePaginationConfig } from '@surely-vue/table';
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default defineComponent({
  setup() {
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
    for (let i = 0; i < 1000; i++) {
      const num = data.length + 1;
      data.push({
        key: String(num),
        name: `John Brown ${num}`,
        age: i + 1,
        address: `London Park no. ${num}`,
        tags: ['cool', 'teacher', 'loser'],
      });
    }
    const pagination = ref<STablePaginationConfig>({
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: total => `Total ${total} items`,
      pageSize: 40,
    });
    return {
      dataSource: ref(data),
      columns: ref(columns),
      pagination,
    };
  },
});
</script>
