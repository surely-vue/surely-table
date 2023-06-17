<docs>
---
order: 6
title:
  en-US: Native Editable Cells
  zh-CN: 自带可编辑单元格
---

## zh-CN

带单元格编辑功能的表格。使用组件自带的 `editable` 属性，可以快速实现高性能单元格编辑功能。
双击单元格触发编辑模式。
#### 相关 API：
#### editable
单元格是否可编辑，可选参数为 `boolean` 或者 `(params) => boolean`，返回 `true` 时可编辑。
#### valueParser
将编辑后的字符串值转换为数据源中的值，例如：将 字符串`1,000` 转换为整数`1000`。
#### valueGetter
将数据源中的值转换为字符串值，例如：将整数`1000` 转换为 字符串`1,000`。
#### valueSetter
默认我们将编辑后的值直接赋值给响应式数据源，但有时无法提供有效的 dataIndex 时， 你需要自定义赋值逻辑，可以使用 `valueSetter`，
当valueSetter 返回 true 时，组件认为编辑成功并退出编辑模式。
#### valueChange
当单元格值发生变化时触发，你可以通过 `valueChange` 来实现自定义的值变化逻辑。


## en-US

Table with editable cells. Use the `editable` property of the component to quickly implement the cell editing function.
Double-click the cell to trigger the edit mode.
#### Related API：
#### editable
Whether the cell is editable, the optional parameter is `boolean` or `(params) => boolean`, return `true` when editable.
#### valueParser
Convert the edited string value to the value in the data source, for example: convert the string `1,000` to the integer `1000`.
#### valueGetter
Convert the value in the data source to a string value, for example: convert the integer `1000` to the string `1,000`.
#### valueSetter
By default, we directly assign the edited value to the reactive data source, but sometimes when an effective `dataIndex` cannot be provided, you need to customize the assignment logic, you can use `valueSetter`,
When `valueSetter` returns true, the component thinks that the edit is successful and exits the edit mode.
#### valueChange
Triggered when the cell value changes, you can use `valueChange` to implement custom value change logic.


</docs>
<template>
  <s-table bordered :data-source="dataSource" :columns="columns"></s-table>
</template>
<script lang="ts">
import type { Ref, UnwrapRef } from 'vue';
import { defineComponent, reactive, ref } from 'vue';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        autoHeight: true,
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        editable: ({ record }) => {
          return record.age > 20;
        },
        valueParser: ({ newValue, oldValue }) => {
          return isNaN(+newValue) ? oldValue : +newValue;
        },
      },
      {
        title: 'address',
        dataIndex: 'address',
        editable: true,
      },
    ];
    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        name: 'Edward King 0',
        age: 32,
        address: 'London, Park Lane no. 0',
      },
      {
        key: '1',
        name: 'Edward King 1',
        age: 32,
        address: 'London, Park Lane no. 1',
      },
      {
        key: '2',
        name: 'Edward King 2',
        age: 12,
        address: 'London, Park Lane no. 2',
      },
    ]);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    return {
      columns,
      dataSource,
      editableData,
    };
  },
});
</script>
