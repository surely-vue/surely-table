<template>
  <a-menu
    v-model:openKeys="openKeys"
    mode="inline"
    :selected-keys="[selectedKey]"
    :style="{ height: '100%', borderRight: 0 }"
    class="nav"
  >
    <a-sub-menu key="/doc/guide">
      <template #title>{{ isZhCN ? '必读' : 'Guide' }}</template>
      <a-menu-item :key="`/doc/guide#${isZhCN ? '简介' : 'introduction'}`">
        <router-link :to="`/doc/guide#${isZhCN ? '简介' : 'introduction'}`">
          {{ isZhCN ? '简介' : 'Introduction' }}
        </router-link>
      </a-menu-item>
      <a-menu-item :key="`/doc/guide#${isZhCN ? '快速开始' : 'Start'}`">
        <router-link :to="`/doc/guide#${isZhCN ? '快速开始' : 'Start'}`">
          {{ isZhCN ? '快速开始' : 'Getting Started' }}
        </router-link>
      </a-menu-item>
      <a-menu-item :key="`/doc/guide#${isZhCN ? '常见问题' : 'FAQ'}`">
        <router-link :to="`/doc/guide#${isZhCN ? '常见问题' : 'FAQ'}`">
          {{ isZhCN ? '常见问题' : 'FAQ' }}
        </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item :key="`/doc/api`">
      <router-link :to="`/doc/api`">API</router-link>
    </a-menu-item>
    <a-menu-item :key="`/doc/changelog`">
      <router-link :to="`/doc/changelog`">{{ isZhCN ? '更新日志' : 'Change Log' }}</router-link>
    </a-menu-item>
    <template v-for="demo in demos" :key="'/doc/' + demo.type">
      <a-sub-menu
        v-if="true"
        :key="'/doc/' + demo.type"
        :title="demo[isZhCN ? 'title' : 'enTitle']"
      >
        <a-menu-item v-if="true" :key="'/doc/' + demo.type">
          <router-link :to="`/doc/${demo.type}`">
            {{ isZhCN ? '概述' : 'Overview' }}
          </router-link>
        </a-menu-item>
        <template v-for="item in demo.children || []" :key="item.id">
          <a-menu-item
            v-if="true"
            :key="'/doc/' + demo.type + '#' + item.id"
            :disabled="item.disabled"
          >
            <router-link :to="`/doc/${demo.type}#${item.id}`" :disabled="item.disabled">
              {{ item[isZhCN ? 'title' : 'enTitle'] }}{{ item.disabled ? '（ing）' : '' }}
            </router-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </template>
    <!-- <a-sub-menu>
            <template #title>过滤和排序</template>
            <a-menu-item key="5-1">简单的筛选</a-menu-item>
            <a-menu-item key="5-2">自定义筛选</a-menu-item>
            <a-menu-item key="6-3">简单排序</a-menu-item>
            <a-menu-item key="6-4">多列排序</a-menu-item>
            <a-menu-item key="6-5">行拖拽排序</a-menu-item>
            <a-menu-item key="6-6">服务端排序</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>选择</template>
            <a-menu-item key="7-1">多选</a-menu-item>
            <a-menu-item key="7-2">单选</a-menu-item>
            <a-menu-item key="7-3">自定义选择</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>树形</template>
            <a-menu-item key="8-1">可展开</a-menu-item>
            <a-menu-item key="8-2">树形数据展示</a-menu-item>
            <a-menu-item key="8-3">嵌套子表格</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>各种合并</template>
            <a-menu-item key="9-1">合并行</a-menu-item>
            <a-menu-item key="9-2">合并列</a-menu-item>
            <a-menu-item key="9-3">表头合并</a-menu-item>
            <a-menu-item key="9-3">表头分组</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>编辑</template>
            <a-menu-item key="9-2">编辑行</a-menu-item>
            <a-menu-item key="9-2">编辑单元格</a-menu-item>
            <a-menu-item key="9-3">弹窗编辑</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>性能优化</template>
            <a-menu-item key="10-1">固定高度</a-menu-item>
            <a-menu-item key="10-2">动态高度</a-menu-item>
            <a-menu-item key="10-3">共享弹窗</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>导入导出</template>
            <a-menu-item key="11-1">导出 csv</a-menu-item>
            <a-menu-item key="11-1">导出 excel</a-menu-item>
            <a-menu-item key="11-2">导入数据</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>集成图表</template>
            <a-menu-item key="11-2">生成图表</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>更多工具栏</template>
            <a-menu-item key="11-2">全屏</a-menu-item>
            <a-menu-item key="11-2">刷新</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template #title>集成表单</template>
            <a-menu-item key="11-2">查询</a-menu-item>
            <a-menu-item key="11-2">展开更多</a-menu-item>
            <a-menu-item key="11-2">作为表单项</a-menu-item>
          </a-sub-menu> -->
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, toRef, ref } from 'vue';
import demos from '../demo/demos';
import { useInjectGlobalConfig } from '../context';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const globalConfig = useInjectGlobalConfig();
    const route = useRoute();
    return {
      demos,
      isZhCN: globalConfig.isZhCN,
      selectedKey: toRef(route, 'fullPath'),
      openKeys: ref<string[]>([...new Set(['/doc/guide', route.path])]),
    };
  },
});
</script>
<style lang="less" scoped>
.nav :deep(.ant-menu-item) {
  margin: 0;
}
</style>
