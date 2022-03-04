<docs>
---
order: 0
title:
  en-US: Fixed header with the page
  zh-CN: 随页面滚动的固定表头
---

## zh-CN

对于长表格，需要滚动才能查看表头，那么现在可以设置跟随页面固定表头。

设置 `sticky` 为 `true` 或通过 `{offsetHeader: number}` 指定距离。

>  虚拟滚动需要一个容器高度来决定渲染条数，我们可以传递一个略大于屏幕高度的数值来达到跟随页面滚动的效果。

>  注意：吸顶是使用的 `position: sticky` 实现，如果发现吸顶没有生效，请排查 table 父元素是否有元素设置了 `overflow`，具体原因请查看[规范](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

## en-US

For long table，need to scroll to view the header and scroll bar，then you can now set the fixed header and scroll bar to follow the page.

Table head suction and fixed table head are not the same thing, and they can exist at the same time.

Set `sticky` to `true` or specify the distance with `{offsetHeader: number}`.

> Note: Ceiling is implemented using `position: sticky`. If you find that the ceiling does not take effect, please check whether any element of the table parent element has set `overflow`. For specific reasons, please refer to [Specification](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :sticky="{ offsetHeader: 64 }"
    :scroll="{ y: clientHeight }"
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
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
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
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
      },
      { title: 'Column 5', dataIndex: 'address' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
      },
    ];
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
      dataSource: ref(data),
      columns: ref(columns),
      clientHeight: document.body.clientHeight,
    };
  },
});
</script>
