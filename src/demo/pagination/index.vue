<template>
  <div>
    <Basic id="basic" />
    <Config id="config" />
    <Loading id="loading" />
    <Custom id="custom" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Config from './config.vue';
import Loading from './loading.vue';
import Custom from './custom.vue';

export default defineComponent({
  components: {
    Basic,
    Config,
    Loading,
    Custom,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
