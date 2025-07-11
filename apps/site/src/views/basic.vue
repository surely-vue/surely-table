<template>
  <introduction />
  <quick />
  <faq />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import introduction from '../doc/introduction.md';
import quick from '../doc/quick-start.md';
import faq from '../doc/faq.md';
// import changelog from '../doc/CHANGELOG.zh-CN.md';

export default defineComponent({
  name: '',
  components: {
    introduction,
    quick,
    faq,
    // changelog,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
