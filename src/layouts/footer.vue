<template>
  <a-layout-footer class="footer" style="text-align: center">
    Surely Vue ©2021 Created by Ant Design Vue Team
    <div style="padding: 10px 144px">
      备案号：
      <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备19034671号-2</a>
    </div>
  </a-layout-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: '',
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.footer {
  background-color: #000;
  position: relative;
  z-index: 100;
  color: #fff;
  a {
    color: #ffffffa6;
  }
}
</style>
