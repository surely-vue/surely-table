declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'reqest' {}

/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module 'vue' {
  export interface GlobalComponents {
    STable: typeof import('@surely-vue/table')['STable'];
    STableColumn: typeof import('@surely-vue/table')['STableColumn'];
    STableColumnGroup: typeof import('@surely-vue/table')['STableColumnGroup'];
    STableSummary: typeof import('@surely-vue/table')['STableSummary'];
    STableSummaryCell: typeof import('@surely-vue/table')['STableSummaryCell'];
    STableSummaryRow: typeof import('@surely-vue/table')['STableSummaryRow'];
  }
}
export {};
