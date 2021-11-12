<docs>
---
order: 6
title:
  en-US: v-model edit
  zh-CN: v-model 编辑
---

## zh-CN

为了高性能，我们在组件内部对数据进行了处理，所以不可以直接使用插槽提供的数据源，如：`v-model:value="record"`，但是为了方便双向绑定数据。我们提供了数据索引 `recordIndexs`，
因为要支持树形数据，recordIndexs 是一个数组，你可以直接通过 `v-model:value="dataSource[recordIndexs[0]]"`, 绑定原始数据源

## en-US

Higher-performance editing mode

</docs>

<template>
  <s-table
    bordered
    :data-source="dataSource"
    :columns="columns"
    :pagination="false"
    :scroll="{ y: 500 }"
  >
    <template #bodyCell="{ column, text, record, recordIndexs }">
      <template v-if="column.dataIndex === 'name'">
        <div class="editable-cell">
          <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
            <a-input
              v-model:value="dataSource[recordIndexs[0]].name"
              @pressEnter="save(record.key)"
            />
            <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
          </div>
          <div v-else class="editable-cell-text-wrapper">
            {{ text || ' ' }}
            <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
          </div>
        </div>
      </template>
    </template>
  </s-table>
</template>
<script lang="ts">
import type { UnwrapRef } from 'vue';
import { defineComponent, reactive, ref } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        autoHeight: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
    ];

    const data: DataItem[] = [];
    for (let i = 0; i < 100000; i++) {
      data.push({
        key: String(i),
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    const dataSource = ref(data);
    const editableData: UnwrapRef<Record<string, boolean>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = true;
    };
    const save = (key: string) => {
      delete editableData[key];
    };

    return {
      columns,
      dataSource,
      editableData,
      edit,
      save,
    };
  },
});
</script>
<style lang="less">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: inline-block;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
