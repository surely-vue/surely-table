<template>
  <component :is="com"></component>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/runtime-core';
import allDemo from './demos';
export default defineComponent({
  props: ['type'],
  setup(props) {
    const com = computed(() => {
      return allDemo.find(d => d.type === props.type)?.component || null;
    });
    return { com };
  },
});
</script>
