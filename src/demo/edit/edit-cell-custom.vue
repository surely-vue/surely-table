<docs>
---
order: 6
title:
  en-US: custom editor cell(4.0.3+)
  zh-CN: 自定义编辑单元格(4.0.3+)
---

## zh-CN

当 editable 为 `cellEditorSlot` 或者返回值为 `cellEditorSlot` 时，使用 v-slot:cellEditor 自定义渲染编辑。

## en-US

When editable is `cellEditorSlot` or the return value is `cellEditorSlot`, use v-slot:cellEditor to customize the rendering edit.
</docs>
<template>
  <s-table bordered :data-source="dataSource" :columns="columns">
    <template #cellEditor="{ column, modelValue, save, closeEditor, editorRef, getPopupContainer }">
      <template v-if="column.dataIndex === 'date'">
        <a-date-picker
          :ref="editorRef"
          :bordered="false"
          :value="dayjs(modelValue.value)"
          style="width: 100%"
          :get-popup-container="getPopupContainer"
          open
          :allow-clear="false"
          @update:value="
            v => {
              modelValue.value = v?.format('YYYY-MM-DD') ?? '';
              save();
            }
          "
          @blur="closeEditor"
          @keydown.esc="closeEditor"
          @click.stop="closeEditor"
        ></a-date-picker>
      </template>
      <template v-else="column.dataIndex === 'gender'">
        <a-select
          :ref="editorRef"
          :bordered="false"
          :value="modelValue.value"
          style="width: 120px"
          :get-popup-container="getPopupContainer"
          :options="[
            {
              value: 'Male',
              label: 'Male',
            },
            {
              value: 'Female',
              label: 'Female',
            },
          ]"
          open
          @update:value="
            v => {
              modelValue.value = v;
              save();
            }
          "
          @blur="closeEditor"
          @keydown.esc="closeEditor"
          @click.stop="closeEditor"
        ></a-select>
      </template>
    </template>
  </s-table>
</template>
<script lang="ts">
import type { Ref, UnwrapRef } from 'vue';
import { defineComponent, reactive, ref } from 'vue';
import dayjs from 'dayjs';

interface DataItem {
  key: string;
  name: string;
  date: string;
  gender: 'Male' | 'Female';
}

export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        autoHeight: true,
        editable: true,
      },
      {
        title: 'date',
        dataIndex: 'date',
        editable: 'cellEditorSlot',
      },
      {
        title: 'gender',
        dataIndex: 'gender',
        editable: 'cellEditorSlot',
      },
    ];
    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        name: 'Edward King 0',
        date: '2023-12-12',
        gender: 'Male',
      },
      {
        key: '1',
        name: 'Edward King 1',
        date: '2023-10-10',
        gender: 'Female',
      },
      {
        key: '2',
        name: 'Edward King 2',
        date: '2023-11-11',
        gender: 'Female',
      },
      {
        key: '3',
        name: 'Edward King 3',
        date: '2023-11-11',
        gender: 'Female',
      },
      {
        key: '4',
        name: 'Edward King 4',
        date: '2023-11-11',
        gender: 'Female',
      },
      {
        key: '5',
        name: 'Edward King 5',
        date: '2023-11-11',
        gender: 'Female',
      },
      {
        key: '6',
        name: 'Edward King 6',
        date: '2023-11-11',
        gender: 'Female',
      },
    ]);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    return {
      columns,
      dataSource,
      editableData,
      dayjs,
    };
  },
});
</script>
