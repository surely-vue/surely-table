<docs>
---
order: 2
title:
  en-US: radio selection
  zh-CN: 单选
---

## zh-CN
只能选择一行。

根据 HTML 标准规范， Radio 选择后是不可以置空的，但的确有置空这类业务需求，我们提供了 `allowCancelRadio` 可以配置是否允许取消选择 Radio。

`allowCancelRadio` 最低支持 2.1.0。

## en-US
Only one row can be selected.

You can set `allowCancelRadio = true` to allow cancel radio selection.

</docs>

<template>
  <s-table :row-selection="rowSelection" :columns="columns" :data-source="data">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-else>{{ text }}</template>
    </template>
  </s-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { STableProps, STableColumnType } from '@surely-vue/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const columns: STableColumnType<DataType>[] = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];
    const data: DataType[] = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    const rowSelection: STableProps['rowSelection'] = {
      onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
      type: 'radio',
      // allowCancelRadio: true,
    };

    return {
      data,
      columns,
      rowSelection,
    };
  },
});
</script>
