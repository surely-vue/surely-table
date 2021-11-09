<template>
  <s-table
    :columns="columns"
    :scroll="{ x: 2000, y: 400 }"
    :pagination="false"
    :data-source="dataSource"
  ></s-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const columns = [
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
    title: 'Column 1',
    dataIndex: 'address',
    width: 100,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    width: 100,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    width: 100,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    width: 100,
  },
  { title: 'Column 5', dataIndex: 'address', width: 100 },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
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
    };
  },
});
</script>
