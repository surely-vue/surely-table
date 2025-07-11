<docs>
---
order: 24
title:
  en-US: Editable Rows
  zh-CN: 可编辑行
---

## zh-CN

带行编辑功能的表格。

## en-US

Table with editable rows.
</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="false"
    bordered
    :scroll="{ y: 200 }"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a @click="save(record.key)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.key)">Edit</a>
          </span>
        </div>
      </template>
    </template>
  </s-table>
</template>
<script lang="ts">
import { cloneDeep } from 'lodash-es';
import type { UnwrapRef } from 'vue';
import { defineComponent, reactive, ref } from 'vue';
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
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };
    const save = (key: string) => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
      dataSource.value = [].concat(dataSource.value);
    };
    const cancel = (key: string) => {
      delete editableData[key];
      dataSource.value = [].concat(dataSource.value);
    };
    return {
      dataSource,
      columns,
      editableData,
      edit,
      save,
      cancel,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
