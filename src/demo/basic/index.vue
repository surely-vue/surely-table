<template>
  <div>
    <Basic id="basic" />
    <Fixed id="fixed" />
    <FixedHeader id="fixed-header" />
    <FixedHeaderColumns id="fixed-header-columns" />
    <Sticky id="sticky" />
    <GroupingColumns id="grouping-columns" />
    <Bordered id="bordered" />
    <Stripe id="stripe" />
    <Summary id="summary" />
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
export default defineComponent({
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
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
