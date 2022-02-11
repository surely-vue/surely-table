<docs>
---
order: 0
title:
  zh-CN: 二次确认拖拽
  en-US: Second confirmation drag
---

## zh-CN

`rowDragEnd` 事件返回 `promise`，可以做二次确认是否移动到目标位置。

## en-US
The `rowDragEnd` event returns a `promise`, which can be used to confirm whether to move to the target position twice.
</docs>

<template>
  <s-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="false"
    :scroll="{ y: 500, x: 2000 }"
    @row-drag-end="onRowDragEnd"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Action</a>
      </template>
    </template>
  </s-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Modal } from 'ant-design-vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const columns = ref([
      {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 150,
        resizable: true,
        rowDrag: true,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
        resizable: true,
      },
      {
        title: 'Column 1（minWidth： 100， maxWidth： 500）',
        dataIndex: 'address',
        key: 'address1',
        minWidth: 100,
        maxWidth: 500,
        resizable: true,
      },
      {
        title: 'Column 2',
        key: 'address2',
        dataIndex: 'address',
      },
      {
        title: 'Column 3',
        key: 'address3',
        dataIndex: 'address',
      },
      {
        title: 'Column 4',
        key: 'address4',
        dataIndex: 'address',
      },
      { title: 'Column 5', dataIndex: 'address', key: 'address5' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        resizable: true,
      },
    ]);
    const data: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    const onRowDragEnd = ({ record, preTargetInfo, nextTargetInfo }) => {
      return new Promise((reslove, reject) => {
        Modal.confirm({
          title: `Do you Want to drag ${record.name} to ${
            preTargetInfo?.record.name || nextTargetInfo?.record.name
          }?`,
          onOk() {
            reslove(true);
          },
          onCancel() {
            reject();
          },
        });
      });
    };
    return {
      dataSource: ref(data),
      columns,
      onRowDragEnd,
    };
  },
});
</script>
