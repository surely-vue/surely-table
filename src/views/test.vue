<template>
  <div>
    <s-table
      :columns="columns"
      :data-source="data"
      :row-selection="{ selectedRowKeys, fixed: 'right' }"
    >
      <template #expandedRowRender>
        <em>111</em>
      </template>
    </s-table>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedRowKeys = ref([]);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '12%',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        width: '30%',
        key: 'address',
      },
    ];
    const originData = [
      {
        key: 'a',
        name: 'John Brown sr.',
        age: 60,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: 'b',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    const data = ref(originData);
    return {
      data,
      columns,
      selectedRowKeys,
    };
  },
});
</script>
