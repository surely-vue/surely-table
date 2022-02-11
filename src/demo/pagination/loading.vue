<docs>
---
order: 0
title:
  zh-CN: 分页加载
  en-US: Pagination Loading
---

## zh-CN

这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据。

**注意，此示例使用 [模拟接口](https://randomuser.me)，展示数据可能不准确，请打开网络面板查看请求。**

## en-US

This example shows how to fetch and present data from a remote server。

**Note, this example use [Mock API](https://randomuser.me) that you can look up in Network Console.**

</docs>

<template>
  <s-table
    v-model:pagination="pagination"
    :loading="loading"
    :columns="columns"
    :data-source="dataSource"
    :row-key="record => record.login.uuid"
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        {{ `${text.first} ${text.last}` }}
      </template>
    </template>
  </s-table>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import type { STablePaginationConfig } from '@surely-vue/table';

interface DataItem {
  name: string;
  first: string;
  last: string;
  email: string;
  gender: string;
}

const getRandomuserParams = (params: STablePaginationConfig) => ({
  results: params.pageSize,
  page: params.current,
  ...params,
});

export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
    ];
    const dataSource = ref<DataItem[]>([]);
    const pagination = ref<STablePaginationConfig>({
      current: 1,
      pageSize: 10,
    });
    const loading = ref(true);

    const fetch = (params: STablePaginationConfig = {}) => {
      loading.value = true;

      let u = new URLSearchParams(getRandomuserParams(params) as any).toString();

      window
        .fetch(`https://randomuser.me/api?${u}`, {
          method: 'GET', // or 'PUT'
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('Success:', response);
          loading.value = false;
          dataSource.value = response.results;
          pagination.value = {
            ...params,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          };
        });
    };

    watch(
      () => ({ ...pagination.value }),
      (cur, pre) => {
        if (cur.current !== pre.current || cur.pageSize !== pre.pageSize) {
          fetch(pagination.value);
        }
      },
    );

    onMounted(() => {
      fetch(pagination.value);
    });

    return {
      dataSource,
      columns: ref(columns),
      pagination,
      loading,
    };
  },
});
</script>
