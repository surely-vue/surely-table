<template>
  <a-button @click="click1">click</a-button>
  <s-table
    :columns="columns"
    :scroll="{ y: 400 }"
    :pagination="false"
    :data-source="data"
  ></s-table>
</template>
<script lang="ts" setup>
import { STable } from '@surely-vue/table';

import { ref, triggerRef } from 'vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns = ref([
  {
    title: 'Full Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
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
]);
const data = ref<DataItem[]>([]);
for (let i = 0; i < 2; i++) {
  data.value.push({
    key: i,
    name: `Edrward ${i}`,
    age: i + 1,
    address: `London Park no. ${i}`,
  });
}

let key = 100;
const click1 = function () {
  data.value.push({
    key: key,
    name: `Edrward ${key}`,
    age: key + 1,
    address: `London Park no. ${key}`,
  });
  key++;
  // triggerRef(data);
  // data.value = [...data.value]
};
</script>
