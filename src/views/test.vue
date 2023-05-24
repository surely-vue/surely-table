<template>
  <div style="display: flex">
    width
    <a-input-number v-model:value="width" />

    height
    <a-input-number v-model:value="height" />
    y
    <a-input-number v-model:value="y" />
  </div>
  <br />
  <div :style="{ display: 'flex', overflow: 'auto', width: `${width}px`, height: `${height}px` }">
    <s-table
      v-if="dataSource?.length > 0"
      :columns="columns"
      :pagination="false"
      :row-height="60"
      :x-virtual="false"
      :animate-rows="false"
      :default-expand-all-rows="true"
      :data-source="dataSource"
      :scroll="{ y: y }"
    ></s-table>
  </div>
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
        width: 400,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 500,
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
    ];
    const data: DataItem[] = [];
    for (let i = 0; i < 1; i++) {
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
      width: ref(1114),
      height: ref(400),
      y: ref(75),
    };
  },
});
</script>
