<template>
  <template v-if="isZhCN">
    <api-zh-c-n />
  </template>
  <template v-else><api-en-u-s /></template>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import apiZhCN from '../doc/api.zh-CN.md';
import apiEnUS from '../doc/api.en-US.md';
import { useInjectGlobalConfig } from '../context';

export default defineComponent({
  name: '',
  components: {
    apiEnUS,
    apiZhCN,
  },
  setup() {
    const globalConfig = useInjectGlobalConfig();
    return {
      isZhCN: globalConfig.isZhCN,
    };
  },
});
</script>
<style lang="less" scoped></style>
