<docs>
---
order: 0
title:
  zh-CN: 右键菜单
  en-US: Contextmenu
---

## zh-CN

设置 contextmenuPopup 插槽，启用右键菜单功能，我们提供了足够多的参数供你自定义各种右键菜单项。

版本：2.5.0+

## en-US

Set the contextmenuPopup slot, enable the right-click menu function, we provide enough parameters for you to customize various right-click menu items.

Version：2.5.0+
</docs>
<template>
  <div style="padding: 50px">
    <s-table :columns="columns" :data-source="dataSource" :scroll="{ x: 2000 }" :pagination="false">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>Action</a>
        </template>
      </template>
      <template #tooltipTitle="{ value }">
        <home-two-tone />
        {{ value }}
      </template>
      <template #contextmenuPopup="args">
        <ul class="popup">
          <li
            class="popup-item"
            :class="args.column.key === 'operation' && 'disabled'"
            @click="copyClick(args, 'cell')"
          >
            <copy-outlined />
            复制
          </li>
          <li class="popup-item" @click="copyClick(args, 'record')">
            <copy-outlined />
            复制整行
          </li>
          <li
            class="popup-item"
            :class="args.column.key === 'operation' && 'disabled'"
            @click="copyClick(args, 'column')"
          >
            <copy-outlined />
            复制整列
          </li>
        </ul>
      </template>
    </s-table>
  </div>
</template>
<script lang="ts">
import type { STableProps, ContextmenuPopupArg } from '@surely-vue/table';
import { defineComponent, ref } from 'vue';
import { HomeTwoTone, CopyOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  components: { HomeTwoTone, CopyOutlined },
  setup() {
    const columns: STableProps['columns'] = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 150,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
      },

      {
        title: 'Column 1',
        dataIndex: 'address',
        ellipsis: { showTitle: false },
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
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
      },
    ];
    const data: DataItem[] = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    const copyValue = val => {
      console.log('copyValue', val);
      const input = document.createElement('input');
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', val);
      document.body.appendChild(input);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        message.info('复制成功');
      }
      document.body.removeChild(input);
    };
    const copyClick = (args: ContextmenuPopupArg<any, any>, type: 'cell' | 'column' | 'record') => {
      if (type === 'cell') {
        if (args.column.key === 'operation') return;
        copyValue(args.text);
      } else if (type === 'column') {
        if (args.column.key === 'operation') return;
        const { dataIndex } = args.column;
        copyValue(data.map(d => d[dataIndex]).join('\r\n'));
      } else {
        const record = args.record;
        copyValue(
          columns
            .map((c: any) => (c.dataIndex ? record[c.dataIndex] : ''))
            .filter(c => !!c)
            .join(' '),
        );
      }
      // 3.0.1 新增
      args.hidePopup();
    };
    return {
      dataSource: ref(data),
      columns: ref(columns),
      copyClick,
    };
  },
});
</script>
<style lang="less" scope>
.popup {
  width: 120px;
  .popup-item {
    cursor: pointer;
    padding: 8px;
    &:hover {
      background-color: #fafafa;
    }
    &.disabled {
      color: #00000040;
      cursor: not-allowed;
    }
  }
}
</style>
