<docs>
---
order: 0
title:
  zh-CN: 自定义分页
  en-US: Custom Pagination
---

## zh-CN

Table 集成了分页组件，为了方便使用，使用了属性的配置方式，使用方便的同时，灵活度有一定的损失。

但你完全可以关闭 Table 自带的分页功能，而是使用一个独立的分页组件。

## en-US

Table integrates the pagination component. For the convenience of use, the attribute configuration method is used. While it is convenient to use, there is a certain loss of flexibility.

But you can completely turn off the pagination function that comes with Table, but use an independent pagination component.

</docs>

<template>
  <s-table
    ref="tableRef"
    :columns="columns"
    :data-source="dataSource"
    :pagination="false"
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
  <a-pagination
    v-model:current="current"
    v-model:pageSize="pageSize"
    style="margin-top: 30px; justify-content: flex-end; display: flex"
    :page-size-options="pageSizeOptions"
    :total="total"
    show-size-changer
    :page-size="pageSize"
  >
    <template #buildOptionText="props">
      <span v-if="+props.value <= 500" style="width: 60px; display: inline-block">
        {{ props.value }}条/页
      </span>
      <span v-else style="width: 60px; display: inline-block">全部</span>
    </template>
  </a-pagination>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

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
    const originData: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      originData.push({
        key: String(i),
        name: `John Brown ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
        tags: ['cool', 'teacher', 'loser'],
      });
    }
    const pageSizeOptions = computed<string[]>(() => [
      '100',
      '200',
      '500',
      String(originData.length),
    ]);
    const current = ref(1);
    const pageSize = ref(100);
    const total = ref(originData.length);
    const dataSource = computed(() => {
      return originData.slice(
        (current.value - 1) * pageSize.value,
        (current.value - 1) * pageSize.value + pageSize.value,
      );
    });
    const tableRef = ref();
    watch(
      current,
      () => {
        // when current change, we can scroll to top position
        tableRef.value.scrollTo({ top: 0 });
      },
      { flush: 'post' },
    );
    return {
      tableRef,
      dataSource,
      columns: ref(columns),
      pageSizeOptions,
      current,
      pageSize: pageSize,
      total,
    };
  },
});
</script>
