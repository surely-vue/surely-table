<docs>
---
order: 6
title:
  en-US: Export Merged Cells
  zh-CN: 导出合并单元格
---

## zh-CN

表格配置了 `customCell` 的合并单元格（`colSpan`、`rowSpan`）会自动在导出时处理。CSV 导出时被合并的单元格输出为空值；Excel 导出时会生成真实的单元格合并。同时支持分组表头（`children` 嵌套列）的合并导出。

## en-US

Merged cells configured via `customCell` (`colSpan` / `rowSpan`) are automatically handled during export. In CSV, merged-away cells are empty; in Excel, real cell merges are applied. Grouped column headers (nested `children` columns) are also exported with proper merges.

</docs>

<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-space>
        <a-button type="primary" @click="handleExportCsv">Export CSV</a-button>
        <a-button @click="handleExportExcel">Export Excel (with merges)</a-button>
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
  phone: string;
  workspace: string;
  address: string;
}

export default defineComponent({
  setup() {
    const tableRef = ref();

    const columns: STableColumnType[] = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Contact',
        children: [
          { title: 'Phone', dataIndex: 'phone', key: 'phone' },
          { title: 'Workspace', dataIndex: 'workspace', key: 'workspace' },
        ],
      },
      { title: 'Address', dataIndex: 'address', key: 'address' },
    ];

    const data: DataType[] = [
      {
        key: 1,
        name: 'John Brown',
        phone: '0571-22098909',
        workspace: 'Hangzhou',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: 2,
        name: 'Jim Green',
        phone: '0571-22098333',
        workspace: 'Hangzhou',
        address: 'London No. 1 Lake Park',
      },
      {
        key: 3,
        name: 'Joe Black',
        phone: '0575-22098909',
        workspace: 'Ningbo',
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: 4,
        name: 'Edward King',
        phone: '0575-22098909',
        workspace: 'Ningbo',
        address: 'Los Angeles No. 1 Lake Park',
      },
      {
        key: 5,
        name: 'Tom Smith',
        phone: '0571-22098909',
        workspace: 'Hangzhou',
        address: 'New York No. 2 Lake Park',
      },
    ];

    // Row merge: merge cells with same workspace in column "workspace"
    // Col merge: merge phone + workspace when workspace is 'Hangzhou'
    const customCell = ({
      record,
      column,
    }: {
      record: DataType;
      rowIndex: number;
      column: STableColumnType;
    }) => {
      if (column.dataIndex === 'workspace') {
        // Merge workspace rows: 0-1 (Hangzhou), 2-3 (Ningbo), 4 (Hangzhou alone)
        if (record.key === 1) return { rowSpan: 2 };
        if (record.key === 2) return { rowSpan: 0 };
        if (record.key === 3) return { rowSpan: 2 };
        if (record.key === 4) return { rowSpan: 0 };
      }
      if (column.dataIndex === 'address') {
        // Merge address across 2 columns (address + nothing, but here just colSpan demo)
        // Actually let's just show colSpan on phone: merge phone+workspace for row 5
        // to keep it simple
      }
      if (column.dataIndex === 'phone' && record.key === 5) {
        return { colSpan: 2 };
      }
      if (column.dataIndex === 'workspace' && record.key === 5) {
        return { colSpan: 0 };
      }
      return {};
    };

    const handleExportCsv = () => {
      tableRef.value.exportDataAsCsv({ fileName: 'merged-cells' });
    };

    const handleExportExcel = () => {
      tableRef.value.exportDataAsExcel({
        fileName: 'merged-cells',
        sheetName: 'Merged',
      });
    };

    return { tableRef, columns, data, customCell, handleExportCsv, handleExportExcel };
  },
});
</script>
