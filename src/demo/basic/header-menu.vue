<docs>
---
order: 0
title:
  zh-CN: 表头单元格菜单（4.0+）
  en-US: Header Cell Menu(4.0+)
---

## zh-CN

你可以通过 `column.showMenu` 配置是否显示菜单，通过插槽 `menuIcon` `menuPopup` 分别自定义菜单图标和菜单内容。
> showMenu 支持 boolean | 'hover'，当为 'hover' 时，鼠标移入表头单元格时显示菜单，移出时隐藏。

## en-US

You can use `column.showMenu` to control the menu visibility, and use `menuIcon` `menuPopup` slot to customize the menu icon and menu content.
> showMenu support boolean | 'hover', when it is 'hover', the menu will show when the mouse hover the header cell, and hide when the mouse leave.
</docs>

<template>
  <s-table bordered :data-source="dataSource" :columns="columns">
    <template
      #menuPopup="{ column, filter: { setSelectedKeys, selectedKeysRef, confirm, clearFilters } }"
    >
      <div>
        <a-tabs>
          <a-tab-pane key="1">
            <template #tab>
              <span style="padding: 0 16px">
                <filter-outlined />
                过滤
              </span>
            </template>
            <div style="padding: 0 8px 16px">
              <a-input
                ref="searchInput"
                :value="selectedKeysRef.value[0]"
                :placeholder="`Search ${column.dataIndex}`"
                style="width: 188px; margin-bottom: 8px; display: block"
                @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                @pressEnter="handleSearch(selectedKeysRef.value, confirm, column.dataIndex)"
              />
              <a-button
                type="primary"
                size="small"
                style="width: 90px; margin-right: 8px"
                @click="handleSearch(selectedKeysRef.value, confirm, column.dataIndex)"
              >
                <template #icon><search-outlined /></template>
                搜索
              </a-button>
              <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                重置
              </a-button>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2">
            <template #tab>
              <span style="padding: 0 16px">
                <bars-outlined />
                列
              </span>
            </template>
            <div class="menu-popup-container">
              <ul class="menu-popup">
                <li class="menu-popup-item" style="border-bottom: 1px solid #f0f0f0">
                  <a-checkbox v-model:checked="checkedAll" :indeterminate="indeterminate">
                    全选 / 取消选择
                  </a-checkbox>
                </li>
                <template v-for="menu in menus" :key="menu.column">
                  <li class="menu-popup-item">
                    <a-checkbox
                      v-model:checked="menu.checked"
                      style="width: 100%"
                      :disabled="!!menu.disabled"
                    >
                      {{ menu.column }}
                    </a-checkbox>
                  </li>
                </template>
              </ul>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </template>
    <template #menuIcon="{ filtered }">
      <menu-outlined :class="filtered && 'filter-active'" />
    </template>
  </s-table>
</template>
<script lang="ts">
import type { Ref } from 'vue';
import { defineComponent, ref, reactive, computed } from 'vue';
import { Checkbox } from 'ant-design-vue';
import { SearchOutlined, BarsOutlined, FilterOutlined, MenuOutlined } from '@ant-design/icons-vue';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  components: {
    ACheckbox: Checkbox,
    SearchOutlined,
    BarsOutlined,
    FilterOutlined,
    MenuOutlined,
  },
  setup() {
    const menus = ref([
      {
        column: 'No.',
        checked: true,
        disabled: true,
      },
      { column: 'name', checked: true },
      { column: 'age', checked: true },
      { column: 'address', checked: true },
    ]);
    const checkedAll = computed({
      get() {
        return menus.value.every(menu => menu.checked);
      },
      set(value: boolean) {
        menus.value.forEach(menu => {
          if (!menu.disabled) {
            menu.checked = value;
          }
        });
      },
    });
    const indeterminate = computed(() => {
      const checkedCount = menus.value.filter(menu => menu.checked).length;
      return checkedCount > 0 && checkedCount < menus.value.length;
    });
    const columns = computed(() =>
      [
        {
          title: '',
          key: 'No.',
          showMenu: 'hover',
          width: 50,
          align: 'center',
          customRender: ({ text, record, index }) => index + 1,
        },
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          autoHeight: true,
          editable: true,
          showMenu: true,
          sorter: (a: DataItem, b: DataItem) => a.name.length - b.name.length,
          onFilter: (value, record) =>
            record.name.toString().toLowerCase().includes(value.toLowerCase()),
        },
        {
          title: 'age',
          dataIndex: 'age',
          showMenu: 'hover',
          onFilter: (value, record) =>
            record.age.toString().toLowerCase().includes(value.toLowerCase()),
        },
        {
          title: 'address',
          dataIndex: 'address',
          showMenu: 'hover',
          onFilter: (value, record) =>
            record.address.toString().toLowerCase().includes(value.toLowerCase()),
        },
      ].filter(
        item =>
          menus.value.find(menu => menu.column === item.dataIndex || menu.column === item.key)
            ?.checked,
      ),
    );
    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        name: 'Edward King 0',
        age: 32,
        address: 'London, Park Lane no. 0',
      },
      {
        key: '1',
        name: 'Edward King 1',
        age: 32,
        address: 'London, Park Lane no. 1',
      },
      {
        key: '2',
        name: 'Edward King 2',
        age: 32,
        address: 'London, Park Lane no. 2',
      },
    ]);
    const state = reactive({
      searchText: '',
      searchedColumn: '',
    });
    const searchInput = ref();
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };

    const handleReset = clearFilters => {
      clearFilters();
      state.searchText = '';
    };
    return {
      columns,
      dataSource,
      menus,
      checkedAll,
      indeterminate,
      searchInput,
      handleReset,
      handleSearch,
    };
  },
});
</script>
<style lang="less" scoped>
.filter-active {
  color: var(--surely-table-primary-color) !important;
  opacity: 1 !important;
}
.menu-popup-container {
  max-height: 200px;
  overflow-y: auto;
  padding: 4px 0;
}
.menu-popup {
  width: 100%;
  .menu-popup-item {
    width: 100%;
    padding: 4px 8px;
    &:hover {
      background-color: var(--surely-table-row-hover-bg);
    }
    &.disabled {
      color: var(--surely-table-disabled-color);
      cursor: not-allowed;
    }
  }
}
</style>
