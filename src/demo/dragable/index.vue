<template>
  <div>
    <Columns id="columns" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Columns from './columns.vue';

export default defineComponent({
  components: {
    Columns,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
