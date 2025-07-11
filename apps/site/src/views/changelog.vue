<template>
  <changelog />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import changelog from '../../CHANGELOG.zh-CN.md';

export default defineComponent({
  name: '',
  components: {
    changelog,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
