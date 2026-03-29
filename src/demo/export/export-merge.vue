<docs>
---
order: 6
title:
  en-US: Export Merged Cells
  zh-CN: 导出合并单元格
---

## zh-CN

综合演示导出时各种合并场景：

- **表头 colSpan**：列 `colSpan: 2` / `colSpan: 0` 合并表头（Home phone + Phone）
- **分组表头 children**：`children` 嵌套多级表头（Contact 包含 Email、Workspace）
- **customRender colSpan**：第5行 `{ props: { colSpan: 6 } }` 整行合并
- **customRender rowSpan**：第3、4行 Home phone 列 `{ props: { rowSpan: 2 } }` 纵向合并
- **customCell rowSpan**：第3、4行 Address 列 `{ rowSpan: 2 }` 纵向合并

CSV 导出时被合并的单元格为空值；Excel 导出时生成真实的单元格合并。

## en-US

Comprehensive demo for all merge scenarios during export:

- **Header colSpan**: Column `colSpan: 2` / `colSpan: 0` merges header cells (Home phone + Phone)
- **Grouped headers**: Nested `children` columns produce multi-row headers (Contact → Email, Workspace)
- **customRender colSpan**: Row 5 merges all columns via `{ props: { colSpan: 6 } }`
- **customRender rowSpan**: Rows 3–4 Home phone merged via `{ props: { rowSpan: 2 } }`
- **customCell rowSpan**: Rows 3–4 Address merged via `{ rowSpan: 2 }`

CSV outputs empty cells for merged-away positions; Excel applies real cell merges.

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-space>
        <a-button type="primary" @click="handleExportCsv">Export CSV</a-button>
        <a-button @click="handleExportExcel">Export Excel</a-button>
      </a-space>
    </div>
    <s-table
      ref="tableRef"
      :columns="columns"
      :data-source="data"
      :custom-cell="customCell"
      :pagination="false"
      bordered
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { registerExcelExportModule } from '@surely-vue/table';
import type { STableColumnType } from '@surely-vue/table';
import * as XLSX from 'xlsx';

registerExcelExportModule({
  createAndDownload({ fileName, sheetName, headerRows, dataRows, merges, suppressDownload }) {
    const ws = XLSX.utils.aoa_to_sheet([...headerRows, ...dataRows]);
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
  tel: string;
  phone: number;
  email: string;
  workspace: string;
  address: string;
}

// 第5行：隐藏其他列（合并到 Name）
const renderHidden = ({ index }: any) => {
  if (index === 4) return { props: { colSpan: 0 } };
};

export default defineComponent({
  setup() {
    const tableRef = ref();

    const columns: STableColumnType[] = [
      // 普通列 + customRender colSpan（第5行整行合并）
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        customRender: ({ index }) => {
          if (index === 4) return { props: { colSpan: 6 } };
        },
      },
      // --- 表头 colSpan: 扁平列合并 ---
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        key: 'tel',
        // customRender rowSpan: 第3、4行纵向合并
        customRender: ({ index }) => {
          if (index === 2) return { props: { rowSpan: 2 } };
          if (index === 3) return { props: { rowSpan: 0 } };
          if (index === 4) return { props: { colSpan: 0 } };
        },
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        key: 'phone',
        customRender: renderHidden,
      },
      // --- 分组表头 (children) ---
      {
        title: 'Contact',
        children: [
          { title: 'Email', dataIndex: 'email', key: 'email', customRender: renderHidden },
          {
            title: 'Workspace',
            dataIndex: 'workspace',
            key: 'workspace',
            customRender: renderHidden,
          },
        ],
      },
      // 普通列 + customCell rowSpan
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        customRender: renderHidden,
      },
    ];

    const data: DataType[] = [
      {
        key: 1,
        name: 'John Brown',
        tel: '0571-22098909',
        phone: 18889898989,
        email: 'john@example.com',
        workspace: 'Hangzhou',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: 2,
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        email: 'jim@example.com',
        workspace: 'Hangzhou',
        address: 'London No. 1 Lake Park',
      },
      {
        key: 3,
        name: 'Joe Black',
        tel: '0575-22098909',
        phone: 18900010002,
        email: 'joe@example.com',
        workspace: 'Ningbo',
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: 4,
        name: 'Jim Red',
        tel: '0575-22098909',
        phone: 18900010002,
        email: 'red@example.com',
        workspace: 'Ningbo',
        address: 'London No. 2 Lake Park',
      },
      {
        key: 5,
        name: 'Jake White',
        tel: '0575-22098909',
        phone: 18900010002,
        email: 'jake@example.com',
        workspace: 'Hangzhou',
        address: 'Dublin No. 2 Lake Park',
      },
    ];

    // --- customCell rowSpan: 第3、4行 Address 纵向合并 ---
    const customCell = ({
      record,
      column,
    }: {
      record: DataType;
      rowIndex: number;
      column: STableColumnType;
    }) => {
      if (column.dataIndex === 'address') {
        if (record.key === 3) return { rowSpan: 2 };
        if (record.key === 4) return { rowSpan: 0 };
      }
      return {};
    };

    const handleExportCsv = () => {
      tableRef.value.exportDataAsCsv({ fileName: 'merge-all' });
    };

    const handleExportExcel = () => {
      tableRef.value.exportDataAsExcel({ fileName: 'merge-all', sheetName: 'Merged' });
    };

    return { tableRef, columns, data, customCell, handleExportCsv, handleExportExcel };
  },
});
</script>
