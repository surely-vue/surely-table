<docs>
---
order: 12
title:
  en-US: border, title and footer
  zh-CN: 带边框
---

## zh-CN

添加表格边框线，页头和页脚。

title、footer 使用插槽传递

## en-US

Add border, title and footer for table.

please use slot for title and footer.

</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    bordered
    :scroll="{ y: 400 }"
    :pagination="false"
  >
    <template #title>
      <span style="color: red">Header</span>
    </template>
    <template #footer>
      <span style="color: blue">Footer</span>
    </template>
  </s-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: string;
  name: string;
  money: string;
  address: string;
}

export default defineComponent({
  setup() {
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
    const data: DataItem[] = [
      {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    return {
      dataSource: data,
      columns: ref(columns),
    };
  },
});
</script>
