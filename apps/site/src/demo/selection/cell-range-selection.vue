<docs>
---
order: 2
title:
  en-US: Cell Range Selection(4.1+)
  zh-CN: 单元格范围选择（4.1+）
---

## zh-CN
通过鼠标、键盘、拖拽进行范围选择
- Arrow Keys：点中单元格后使用上下左右按键调整选中单元格
- Tab：选中单元格后，使用`Tab`按键选中下一个单元格
- Shift Tab：选中单元格后，使用`Tab`按键选中上一个单元格
- 拖拽：鼠标点击单元格或直接在单元格上拖动选择多个单元格
- Ctrl+拖动：`rangeSelection=true` 时按住键盘`Ctrl`按键，可以选择多个范围
- Shift+Click：点击单元格使其在 focus 状态，按住`Shift`按键点击另外一个单元格，这两个单元格的区间将被选中
- Ctrl+Shift+Arrow Keys：点击单元格使其在 focus 状态，按住`Shift`和方向键，选中这个方向下的所有单元格
- Ctrl+A：选中所有单元格
- Ctrl+C：复制选中单元格，使用 `formatRangeCellText` 可以自定义复制的文本

更多接口请查看[API](/doc/api#方法)页面。

## en-US
Range selection by mouse, keyboard, drag and drop
- Arrow Keys: After clicking on the cell, use the up, down, left, and right keys to adjust the selected cell
- Tab: After selecting a cell, use the `Tab` button to select the next cell
- Shift Tab: After selecting a cell, use the `Tab` key to select the previous cell
- Drag and drop: click on the cell or drag directly on the cell to select multiple cells
- Ctrl+drag: press and hold the keyboard `Ctrl` key when `rangeSelection=true`, you can select multiple ranges
- Shift+Click: Click the cell to make it in focus, hold down the `Shift` button and click another cell, the range of these two cells will be selected
- Ctrl+Shift+Arrow Keys: Click the cell to make it in focus, hold down `Shift` and the arrow keys, and select all cells in this direction
- Ctrl+A: Select all cells
- Ctrl+C: Copy the selected cell, use `formatRangeCellText` to customize the copied text

For more interfaces, please check the [API](/doc/api#method) page
</docs>

<template>
  <div>
    <a-button @click="addRange">Add Range</a-button>
    &nbsp;&nbsp;
    <a-button @click="clearRange">Clear Range</a-button>
  </div>
  <s-table
    ref="tableRef"
    v-model:pagination="pagination"
    class="mt-16px"
    :columns="columns"
    :data-source="data"
    :range-selection="true"
    :scroll="{ y: 400, x: 2000 }"
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
import { defineComponent, ref } from 'vue';
import type { STableExposeType, STableColumnType, STablePaginationConfig } from '@surely-vue/table';
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
export default defineComponent({
  setup() {
    const tableRef = ref<STableExposeType>(null);
    const columns: STableColumnType<DataItem>[] = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: true,
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
        title: 'Column 1',
        dataIndex: 'address',
        key: 'address-1',
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: 'address-2',
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: 'address-3',
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: 'address-4',
      },
      { title: 'Column 5', dataIndex: 'address', key: 'address-5' },
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
      data,
      columns,
      tableRef,
      pagination,
      clearRange: () => {
        tableRef.value.clearAllSelectedRange();
      },
      addRange: () => {
        tableRef.value.clearAllSelectedRange();
        tableRef.value.appendCellToSelectedRange({
          rowStartIndex: 1,
          rowEndIndex: 4,
          columnStartKey: 'age',
          columnEndKey: 'address',
        });
      },
    };
  },
});
</script>
