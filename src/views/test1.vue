<template>
  <my-example />
</template>
<script lang="ts" setup>
import test from './test.vue';
import { defineCustomElement, h } from 'vue';
const ExampleElement = defineCustomElement({
  setup() {
    return () => h(test);
  },
});
customElements.define('my-example', ExampleElement);
</script>
