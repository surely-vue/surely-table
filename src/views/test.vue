<template>
  <div style="padding: 20px; height: 2000px">
    <h1>@surely-vue/table</h1>
    size：
    <select v-model="size">
      <option>default</option>
      <option>small</option>
      <option>middle</option>
    </select>
    <button @click="resizeRowsHeight">resizeRowsHeight</button>
    <button @click="changeAutoHeight">toggle autoRowHeight</button>
    <button @click="changeVirtual">toggle virtual</button>
    <button @click="changeLoading">toggle loading</button>
    <button @click="changeBordered">toggle bordered</button>
    <button @click="changeRowSelectionType">changeRowSelectionType</button>
    <button @click="goToPage(5)">goto page 5</button>
    <p>{{ dataSource.length }}</p>
    <br />
    <s-table
      ref="tableRef"
      v-model:pagination="pagination"
      v-model:selectedRowKeys="selectedRowKeys"
      :columns="columns"
      :bordered="bordered"
      :size="size"
      :height="400"
      :data-source="dataSource"
      :row-height="rowHeight"
      :auto-row-height="autoRowHeight"
      :wrap-text="autoRowHeight"
      :virtual="virtual"
      :loading="loading"
      stripe
      sticky
      summary-fixed
      :row-selection="rowSelection"
      :custom-row="getRowProps"
      @change="handleChange"
    >
      <template #filterIcon="{ filtered }">
        <SearchOutlined :style="{ color: filtered ? '#1890ff' : undefined }" />
      </template>
      <template #bodyCell="{ column, text, rowIndex }">
        <template v-if="column.key === 'operation'">
          <a>Action</a>
        </template>
        <template v-else-if="rowIndex < 2 && column.key === 'name'">
          <div
            v-if="!editableState[`${rowIndex}-${column.dataIndex}`]"
            class="editable-cell-value-wrap"
            @click="handleEditable(rowIndex, column.dataIndex, true)"
          >
            {{ text }}
          </div>
          <Input
            v-else
            ref="inputRef"
            v-model:value="dataSource[rowIndex][column.dataIndex]"
            @blur="handleEditable(rowIndex, column.dataIndex, false)"
            @pressEnter="handleEditable(rowIndex, column.dataIndex, false)"
          />
        </template>
        <template v-else>
          {{ text }}
        </template>
      </template>
      <template #summary>
        <s-table-summary-row>
          <s-table-summary-cell :index="1">Total</s-table-summary-cell>
          <s-table-summary-cell :index="2">
            <template #default="{ total }">{{ total }}</template>
          </s-table-summary-cell>
        </s-table-summary-row>
        <s-table-summary-row>
          <s-table-summary-cell :index="1">Blance</s-table-summary-cell>
          <s-table-summary-cell :index="2">
            <template #default="{ total }">{{ total + 999 }}</template>
          </s-table-summary-cell>
          <s-table-summary-cell :index="3" :col-span="3">
            <template #default="{ total }">{{ total }}</template>
          </s-table-summary-cell>
        </s-table-summary-row>
      </template>
    </s-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, nextTick } from 'vue';

import { Input } from 'ant-design-vue';
import type { RowHeight, STableColumnsType } from '@surely-vue/table';
import STable from '@surely-vue/table';
import 'ant-design-vue/es/input/style/index';
import SearchOutlined from '@ant-design/icons-vue/SearchOutlined';

const columns: STableColumnsType = [
  {
    title: 'Full Name',
    width: 200,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    maxWidth: 300,
    resizable: true,
    customRender: ({ record }: any) => {
      if (record.age === 2) {
        return 2;
      } else {
        return 1;
      }
    },
    onFilter: (value: any, record: any) => record.name.includes(value),
    slots: { filterIcon: 'filterIcon' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    sorter: (a: any, b: any) => a.age - b.age,
    resizable: true,
    //sortOrder: 'descend', //'ascend',
  },
  {
    title: 'ColumnColumnColumnColumnColumnColumn',
    children: [
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
        maxWidth: 150,
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
        resizable: true,
      },
    ],
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  // {
  //   title: 'Column 5',
  //   dataIndex: 'address',
  //   key: '5',
  //   width: 150,
  // },
  // {
  //   title: 'Column 6',
  //   dataIndex: 'address',
  //   key: '6',
  //   width: 150,
  // },
  // {
  //   title: 'Column 7',
  //   dataIndex: 'address',
  //   key: '7',
  //   width: 150,
  // },
  { title: 'Column 8', dataIndex: 'address', key: '8', width: 150 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    resizable: true,
  },
];

interface DataItem {
  rowKey: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 50; i++) {
  data.push({
    // key: i,
    rowKey: i,
    name: `Edrward ${i}`,
    age: i + 1,
    address: `London Park no. ${i}`,
  });
}
export default defineComponent({
  name: 'App',
  components: {
    Input,
    SearchOutlined,
    STable,
  },
  setup() {
    const tableRef = ref<any>();
    const autoRowHeight = ref(false);
    const virtual = ref(true);
    const loading = ref(false);
    const bordered = ref(true);
    const selectedRowKeys = ref([]);
    const expandedRowKeys = ref([]);
    const inputRef = ref();
    const editableState = reactive<Record<string, boolean>>({});
    const rowSelection = reactive({
      type: 'checkbox',
      getCheckboxProps: (record: any, index: number) => {
        if (index === 3) {
          return { disabled: true };
        }
        return { disabled: false };
      },
    });
    watch(rowSelection, () => {
      console.log(rowSelection);
    });
    const rowHeight = ref<RowHeight>((_data, _isExpandRow, baseHeight) =>
      autoRowHeight.value ? undefined : baseHeight,
    );
    const pagination = ref({
      current: 1,
      pageSize: data.length,
      showSizeChanger: true,
    });
    const changeAutoHeight = () => {
      autoRowHeight.value = !autoRowHeight.value;
    };
    const changeVirtual = () => {
      virtual.value = !virtual.value;
    };
    const changeLoading = () => {
      loading.value = !loading.value;
    };
    const changeBordered = () => {
      bordered.value = !bordered.value;
    };
    const goToPage = (num: number) => {
      pagination.value.current = num;
    };
    const handleEditable = (rowIndex: number, dataIndex: string, status: boolean) => {
      editableState[`${rowIndex}-${dataIndex}`] = status;
      if (status) {
        nextTick(() => {
          inputRef.value.focus();
        });
      }
    };
    const getRowProps = ({ rowIndex }: any) => {
      return rowIndex < 2
        ? {
            class: 'editable-row',
          }
        : {};
    };
    const changeRowSelectionType = () => {
      rowSelection.type = rowSelection.type === 'checkbox' ? 'radio' : 'checkbox';
    };
    const handleChange = (info: any) => {
      console.log(info);
    };
    return {
      tableRef,
      dataSource: ref(data),
      columns: ref(columns),
      size: ref(),
      rowHeight,
      autoRowHeight,
      changeAutoHeight,
      resizeRowsHeight: () => tableRef.value.resizeRowsHeight(),
      changeVirtual,
      changeLoading,
      virtual,
      loading,
      pagination,
      goToPage,
      bordered,
      changeBordered,
      selectedRowKeys,
      expandedRowKeys,
      rowSelection,
      changeRowSelectionType,
      getRowProps,
      editableState,
      handleEditable,
      inputRef,
      handleChange,
    };
  },
});
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-value-wrap {
  padding: 1px 12px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.super-table-row-hover.editable-row .editable-cell-value-wrap {
  padding: 0px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
</style>
