<docs>
---
order: 0
title:
  zh-CN: Grouping table head
  en-US: 表头分组
---

## zh-CN

`columns[n]` 可以内嵌 `children`，以渲染分组表头。

## en-US

Group table head with `columns[n].children`.

</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    bordered
    :scroll="{ y: 400, x: 'calc(700px + 50%)' }"
    :pagination="false"
  ></s-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 100,
        fixed: 'left',
      },
      {
        title: 'Other',
        children: [
          {
            title: 'Age',
            dataIndex: 'age',
            width: 150,
          },
          {
            title: 'Address',
            children: [
              {
                title: 'Street',
                dataIndex: 'street',
                width: 150,
              },
              {
                title: 'Block',
                children: [
                  {
                    title: 'Building',
                    dataIndex: 'building',
                    width: 100,
                  },
                  {
                    title: 'Door No.',
                    dataIndex: 'number',
                    width: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Company',
        children: [
          {
            title: 'Company Address',
            dataIndex: 'companyAddress',
          },
          {
            title: 'Company Name',
            dataIndex: 'companyName',
          },
        ],
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        width: 100,
        fixed: 'right',
      },
    ];
    const data: DataItem[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
