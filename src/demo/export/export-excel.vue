<docs>
---
order: 4
title:
  en-US: Excel Export
  zh-CN: 导出 Excel
---

## zh-CN

导出 Excel 需要先通过 `registerExcelExportModule` 注册一个 Excel 导出适配器。表格本身不内置 xlsx 库，由用户自行选择。以下示例使用 [SheetJS](https://sheetjs.com/) 作为 xlsx 库。

> 注意：使用前需要安装 `xlsx` 依赖：`npm install xlsx`

## en-US

Excel export requires registering an adapter via `registerExcelExportModule` first. The table does not bundle any xlsx library — you choose your own. The example below uses [SheetJS](https://sheetjs.com/).

> Note: Install the `xlsx` dependency first: `npm install xlsx`

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-space>
        <a-button type="primary" @click="handleExportExcel">Export Excel</a-button>
        <a-button @click="handleExportExcelPartial">Export Rows & Columns (Excel)</a-button>
      </a-space>
    </div>
    <s-table ref="tableRef" :columns="columns" :data-source="data" :pagination="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { registerExcelExportModule } from '@surely-vue/table';
import * as XLSX from 'xlsx';

registerExcelExportModule({
  createAndDownload({ fileName, sheetName, headerRows, dataRows, merges, suppressDownload }) {
    const ws = XLSX.utils.aoa_to_sheet([...headerRows, ...dataRows]);
    // Apply merge info
    if (merges.length > 0) {
      ws['!merges'] = merges.map(m => ({
        s: { r: m.row, c: m.col },
        e: { r: m.row + m.rowSpan - 1, c: m.col + m.colSpan - 1 },
      }));
    }
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    if (suppressDownload) return wb;
    XLSX.writeFile(wb, fileName);
  },
});

interface DataType {
  key: number;
  name: string;
  age: number;
  email: string;
  address: string;
}

export default defineComponent({
  setup() {
    const tableRef = ref();
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
    ];
    const data: DataType[] = [
      {
        key: 1,
        name: 'John Brown',
        age: 32,
        email: 'john@example.com',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: 2,
        name: 'Jim Green',
        age: 42,
        email: 'jim@example.com',
        address: 'London No. 1 Lake Park',
      },
      {
        key: 3,
        name: 'Joe Black',
        age: 28,
        email: 'joe@example.com',
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: 4,
        name: 'Edward King',
        age: 36,
        email: 'edward@example.com',
        address: 'Los Angeles No. 1 Lake Park',
      },
    ];

    const handleExportExcel = () => {
      tableRef.value.exportDataAsExcel({
        fileName: 'excel-export',
        sheetName: 'Employees',
      });
    };
    const handleExportExcelPartial = () => {
      tableRef.value.exportDataAsExcel({
        fileName: 'excel-partial',
        sheetName: 'Partial',
        rowKeys: [1, 3],
        columnKeys: ['name', 'age'],
      });
    };

    return { tableRef, columns, data, handleExportExcel, handleExportExcelPartial };
  },
});
</script>
