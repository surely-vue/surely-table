<docs>
---
order: 6
title:
  en-US: Editable More
  zh-CN: 编辑更多内容
---

## zh-CN

当有很多列的时候，使用 Modal 弹窗进行编辑，或许是一个更好的选择

> 注：你不应该为每一行，都生成一个 Modal 弹窗，这将会影响表格性能，共用弹窗是更好的选择 

## en-US

Table with editable cells.

> Note: You should not generate a Modal pop-up window for each row, this will affect the performance of the table, sharing the pop-up window is a better choice

</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="false"
    bordered
    :scroll="{ y: 200 }"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <a @click="edit(record)">Edit</a>
        </div>
      </template>
    </template>
  </s-table>
  <a-modal v-model:visible="visible" title="Edit" @ok="onSubmit">
    <a-form
      :key="formState.key"
      ref="formRef"
      :label-col="labelCol"
      :model="formState"
      :rules="rules"
    >
      <a-form-item label="Name" name="name">
        <a-input v-model:value="formState.name" disabled />
      </a-form-item>
      <a-form-item label="Age" name="age">
        <a-input-number v-model:value="formState.age" />
      </a-form-item>
      <a-form-item label="Address" name="address">
        <a-input v-model:value="formState.address" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script lang="ts">
import { cloneDeep } from 'lodash-es';
import { defineComponent, ref } from 'vue';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}
export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        // width: '25%',
        width: 100,
      },
      {
        title: 'age',
        dataIndex: 'age',
        // width: '15%',
        width: 100,
      },
      {
        title: 'address',
        dataIndex: 'address',
        // width: '40%',
        width: 100,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        width: 300,
      },
    ];

    const data: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    const dataSource = ref(data);

    const visible = ref(false);

    const formRef = ref();
    const formState = ref<DataItem>({} as DataItem);
    const rules = {
      age: [{ required: true, message: 'Please input age', trigger: 'change', type: 'number' }],
      address: [{ required: true, message: 'Please input address', trigger: 'blur' }],
    };
    const edit = (record: DataItem) => {
      formState.value = cloneDeep(record);
      visible.value = true;
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          Object.assign(
            dataSource.value.filter(item => formState.value.key === item.key)[0],
            formState.value,
          );
          visible.value = false;
          dataSource.value = [].concat(dataSource.value);
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    return {
      labelCol: { style: { width: '100px' } },
      dataSource,
      columns,
      edit,
      visible,
      formRef,
      formState,
      rules,
      onSubmit,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
