<template>
  <div class="lay" style="padding: 50px">
    <s-table
      :columns="columns"
      bordered
      :data-source="data"
      :pagination="false"
      :scroll="{ y: 500 }"
      size="small"
    >
      <template #title>实时更新</template>
      <template #bodyCell="{ record, value, column }">
        <span :style="`color: ${record.colors[column.dataIndex]}`">{{ value }}</span>
      </template>
    </s-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { random } from 'lodash-es';

const values: any = new Array(20).fill(1).map((_, index) => ({
  title: `数值_${index}`,
  dataIndex: `number_${index}`,
  key: `number_${index}`,
  width: 100,
  align: 'center',
}));
const columns = [
  {
    title: '代码',
    dataIndex: 'code',
    key: 'code',
    fixed: true,
    width: 100,
    align: 'center',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    fixed: true,
    width: 100,
    align: 'center',
  },
].concat(values);

export default defineComponent({
  setup() {
    const data = ref<any>([]);
    const updateData = () => {
      const newData = [];
      for (let index = 0; index < 1000; index++) {
        const item = {
          code: 100000 + index,
          key: 100000 + index,
          name: `name ${index}`,
          colors: {},
        };
        let pre = 0;
        values.forEach(({ dataIndex }) => {
          item[dataIndex] = random(1000000);
          if (item[dataIndex] > pre) {
            item.colors[dataIndex] = '#52c41a';
          } else {
            item.colors[dataIndex] = '#f5222d';
          }
          pre = item[dataIndex];
        });
        newData.push(item);
      }
      data.value = newData;
    };
    updateData();
    setInterval(() => {
      updateData();
    }, 100);
    return {
      data,
      columns,
    };
  },
});
</script>
