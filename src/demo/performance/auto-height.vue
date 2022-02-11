<docs>
---
order: 0
title:
  zh-CN: 自动高度
  en-US: Auto Height
---

## zh-CN

拖动地址列，改变宽度，查看效果吧  

对想要自动行高的列设置 autoHeight，组件会获取最大高度，但我们不建议对每一列都设置，虽然你可以这么做，
对于大多数场景，一般只有少数几列会有自动行高的需求，如果没有设置的自动行高，但该列内容较多，多出最大高度，他就会出现截断现象

## en-US

Drag the address column, change the width, and check the effect.

You can set autoHeight for the column that you want to automatically row height, and the component will get the maximum height, but we don’t recommend setting it for every column, although you can do so.
For most scenes, there are generally only a few columns that have automatic row height requirements. If there is no automatic row height set, but the column contains more content and the maximum height is exceeded, it will be truncated. 

</docs>

<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 400 }"
    :pagination="false"
    :data-source="dataSource"
  ></s-table>
</template>

<script lang="ts">
import type { STableColumnsType } from '@surely-vue/table';
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
}

export default defineComponent({
  setup() {
    const columns: STableColumnsType = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        width: 100,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 100,
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        width: 100,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        width: 200,
      },
      { title: 'Address1', dataIndex: 'address', autoHeight: true, resizable: true },
      { title: 'Address2', dataIndex: 'address', autoHeight: true, resizable: true },
    ];
    const data: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        gender: 'Female',
        phone: '123456798665xxx',
        address: `xxx xxx xxx London Park no. ${i}`,
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
