<docs>
---
order: 4
title:
  en-US: ColSpan
  zh-CN: 列合并
---

## zh-CN

使用 customRender 里的单元格属性 colSpan，设值为 0 时，设置的单元格不会渲染。

## en-US

`colSpan` that set in `customRender` return object. When each of them is set to `0`, the cell will not be rendered.

</docs>

<template>
  <s-table v-model:columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a href="javascript:;">{{ text }}</a>
      </template>
      <template v-else>{{ text }}</template>
    </template>
  </s-table>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
      },
    ];
    const columns = ref([
      {
        title: 'Name',
        dataIndex: 'name',
        customRender: ({ index }) => {
          if (index < 3) {
            return;
          }
          if (index === 3) {
            return {
              props: {
                colSpan: 3,
              },
            };
          }
          return {
            props: {
              colSpan: 5,
            },
          };
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ]);
    return {
      data,
      columns,
    };
  },
});
</script>
