<docs>
---
order: 0
title:
  en-US: scrollTo
  zh-CN: 滚动到指定位置
---

## zh-CN

通过 `scrollTo` 方法滚动到指定位置，默认不开启动画。

> 对于动态行高，虚拟滚动会动态修正行的位置，如果需要滚动到指定行，很有可能并没有滚动到预期位置。

## en-US

Use the `scrollTo` method to scroll to the specified position, the animation is not turned on by default.

> For dynamic row height, virtual scrolling will dynamically correct the position of the row. 
If you need to scroll to a specified row, it may not scroll to the expected position.

</docs>
<template>
  <h2>scroll to :</h2>
  <a-row :gutter="20" style="padding: 20px 0">
    <a-col><a-button @click="handleClick({ left: 0 })">left: 0</a-button></a-col>
    <a-col><a-button @click="handleClick({ top: 0 })">top: 0</a-button></a-col>
    <a-col><a-button @click="handleClick({ left: 500 })">left: 500</a-button></a-col>
    <a-col><a-button @click="handleClick({ top: 2000 })">top: 2000</a-button></a-col>
    <a-col>
      <a-button @click="handleClick({ left: 1000, top: 8000 })">left: 1000, top: 8000</a-button>
    </a-col>
    <a-col>
      <a-button @click="handleClick({ columnIndex: 5 })">columnIndex: 5</a-button>
    </a-col>
    <a-col>
      <a-button @click="handleClick({ columnKey: 'Column 3' })">columnKey: Column 3</a-button>
    </a-col>
    <a-col>
      <a-button @click="handleClick({ rowKey: 99 })">rowKey: 99</a-button>
    </a-col>
  </a-row>
  <h2>smooth scroll to :</h2>
  <a-row :gutter="20" style="padding: 20px 0">
    <a-col><a-button @click="handleClick({ left: 0 }, true)">left: 0</a-button></a-col>
    <a-col><a-button @click="handleClick({ top: 0 }, true)">top: 0</a-button></a-col>
    <a-col><a-button @click="handleClick({ left: 500 }, true)">left: 500</a-button></a-col>
    <a-col><a-button @click="handleClick({ top: 2000 }, true)">top: 2000</a-button></a-col>
    <a-col>
      <a-button @click="handleClick({ left: 1000, top: 8000 }, true)">
        left: 1000, top: 8000
      </a-button>
    </a-col>
    <a-col>
      <a-button @click="handleClick({ columnIndex: 5 }, true)">columnIndex: 5</a-button>
    </a-col>
    <a-col>
      <a-button @click="handleClick({ columnKey: 'Column 3' }, true)">columnKey: Column 3</a-button>
    </a-col>
    <a-col>
      <a-button @click="handleClick({ rowKey: 99 }, true)">rowKey: 99</a-button>
    </a-col>
  </a-row>
  <s-table
    ref="tableRef"
    :columns="columns"
    :data-source="dataSource"
    :scroll="{ y: 400 }"
    :pagination="false"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Action</a>
      </template>
    </template>
  </s-table>
</template>

<script lang="ts">
import type { ScrollPosition } from '@surely-vue/table';
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const incomes = new Array(200).fill(1).map((_, index) => ({
      title: `other ${index + 1}`,
      dataIndex: 'address',
      key: `other_${index + 1}`,
      width: 200,
    }));
    const columns = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 150,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        width: 200,
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        width: 200,
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: 'Column 3',
        width: 200,
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        width: 200,
      },
      { title: 'Column 5', children: incomes },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
      },
    ];
    const tableRef = ref();
    const data: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    return {
      tableRef,
      dataSource: ref(data),
      columns: ref(columns),
      handleClick: (pos: ScrollPosition, smooth = false) => {
        tableRef.value.scrollTo(pos, smooth ? 'smooth' : 'auto');
      },
    };
  },
});
</script>
