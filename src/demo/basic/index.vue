<template>
  <div>
    <Basic />
    <Fixed />
    <FixedHeader />
    <FixedHeaderColumns />
    <Sticky />
    <heightVue />
    <GroupingColumns />
    <Bordered />
    <Stripe />
    <Summary />
    <ajax />
    <scroll />
    <tooltip />
    <autoHeaderHeightVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Fixed from './fixed.vue';
import Sticky from './sticky.vue';
import FixedHeader from './fixed-header.vue';
import FixedHeaderColumns from './fixed-header-columns.vue';
import GroupingColumns from './grouping-columns.vue';
import Bordered from './bordered.vue';
import Stripe from './stripe.vue';
import Summary from './summary.vue';
import heightVue from './height.vue';
import ajax from './ajax.vue';
import scroll from './scroll.vue';
import tooltip from './tooltip.vue';
import autoHeaderHeightVue from './auto-header-height.vue';
export default defineComponent({
  title: '基本用法',
  enTitle: 'Basic',
  type: 'basic',
  children: [
    {
      id: 'basic',
      title: '简单表格',
      enTitle: 'Basic Table',
    },
    {
      id: 'fixed',
      title: '固定列',
      enTitle: 'Fixed Colunms',
    },
    {
      id: 'fixed-header',
      title: '固定表头',
      enTitle: 'Fixed Header',
    },
    {
      id: 'fixed-header-columns',
      title: '固定头和列',
      enTitle: 'Fixed Columns and Header',
    },
    {
      id: 'sticky',
      title: '表头吸顶',
      enTitle: 'Fixed header and scroll bar with the page',
    },
    {
      id: 'height',
      title: '固定高度',
      enTitle: 'Table Height',
    },
    {
      id: 'grouping-columns',
      title: '表头分组',
      enTitle: 'Grouping table head',
    },
    {
      id: 'bordered',
      title: '边框、页头、页脚',
      enTitle: 'border, title and footer',
    },
    {
      id: 'stripe',
      title: '斑马纹',
      enTitle: 'Stripe',
    },
    {
      id: 'summary',
      title: '总结栏',
      enTitle: 'Summary',
    },
    {
      id: 'ajax',
      title: '服务端获取',
      enTitle: 'Ajax',
    },
    {
      id: 'scroll',
      title: '滚动指定位置',
      enTitle: 'scrollTo',
    },
    {
      id: 'tooltip',
      title: 'Tooltip 自定义提示',
      enTitle: 'Tooltip',
    },
    {
      id: 'auto-header-height',
      title: '自动表头高度',
      enTitle: 'Auto Header Height',
    },
  ],
  components: {
    Sticky,
    Basic,
    Fixed,
    FixedHeader,
    FixedHeaderColumns,
    GroupingColumns,
    Bordered,
    Stripe,
    Summary,
    heightVue,
    ajax,
    scroll,
    tooltip,
    autoHeaderHeightVue,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
