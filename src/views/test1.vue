<template>
  <my-example />
</template>
<script lang="ts" setup>
import test from './test.vue';
import { defineCustomElement, h } from 'vue';
import styleCss from '../../core/dist/index.min.css';
const ExampleElement = defineCustomElement({
  setup() {
    return () => h(test);
  },
  styles: [styleCss],
});
customElements.define('my-example', ExampleElement);
</script>
