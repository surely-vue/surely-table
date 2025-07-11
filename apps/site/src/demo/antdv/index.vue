<template>
  <basic />
  <ajax />
  <custom-head />
  <bordered />
  <ellipsis />
  <colspan-rowspan />
  <custom-filter-panel />
  <edit-cell />
  <edit-row />
  <expand-children />
  <expand />
  <fixed-columns-header />
  <fixed-columns />
  <fixed-header />
  <grouping-columns />
  <multiple-sorter />
  <nested-table />
  <reset-filter />
  <row-selection-and-operation />
  <row-selection-custom />
  <row-selection />
  <size />
  <stripe />
  <custom-summary />
  <template-com />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import Ajax from './ajax.vue';
import Basic from './basic.vue';
import Bordered from './bordered.vue';
import ColspanRowspan from './colspan-rowspan.vue';
import CustomFilterPanel from './custom-filter-panel.vue';
import EditCell from './edit-cell.vue';
import EditRow from './edit-row.vue';
import ExpandChildren from './expand-children.vue';
import Expand from './expand.vue';
import FixedColumnsHeader from './fixed-columns-header.vue';
import FixedColumns from './fixed-columns.vue';
import FixedHeader from './fixed-header.vue';
import GroupingColumns from './grouping-columns.vue';
import CustomHead from './head.vue';
import NestedTable from './nested-table.vue';
import ResetFilter from './reset-filter.vue';
import RowSelectionAndOperation from './row-selection-and-operation.vue';
import RowSelectionCustom from './row-selection-custom.vue';
import RowSelection from './row-selection.vue';
import Size from './size.vue';
import Ellipsis from './ellipsis.vue';
import Stripe from './stripe.vue';
import MultipleSorter from './multiple-sorter.vue';
import CustomSummary from './summary.vue';
import TemplateCom from './template.vue';

export default {
  components: {
    Basic,
    Ellipsis,
    Ajax,
    Bordered,
    ColspanRowspan,
    CustomFilterPanel,
    EditCell,
    EditRow,
    ExpandChildren,
    Expand,
    FixedColumnsHeader,
    FixedColumns,
    FixedHeader,
    GroupingColumns,
    CustomHead,
    NestedTable,
    ResetFilter,
    RowSelectionAndOperation,
    RowSelectionCustom,
    RowSelection,
    Size,
    Stripe,
    MultipleSorter,
    CustomSummary,
    TemplateCom,
  },
};
</script>
