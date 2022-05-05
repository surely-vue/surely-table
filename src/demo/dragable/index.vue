<template>
  <div>
    <div class="markdown">
      <h3>
        拖拽是一个很酷的功能，但你要知道当用户刷新或重新获取数据后，状态会被重置，除非你做了相应的缓存
      </h3>
      <ul>
        <li>列宽拖拽：仅支持叶子结点拖拽；设置 minWidth 和 maxWidth 是一个不错的建议</li>
        <li>行拖拽：注意合并行的处理，或者通过使用函数形式的 rowDrag 属性，禁止该行的拖拽功能</li>
        <li>列拖拽：固定列和非固定列之间不可以互相拖拽；分组表头暂时只支持第一级拖拽。</li>
        <li>树结构：父节点无法一次拖拽直接成为子节点的子节点，当然你可以自定义处理逻辑;</li>
        <li>
          树结构：叶子节点不可以成为父节点，当然你可以将叶子节点改成非叶子节点(加个 children: [])
        </li>
        <li>
          子表格：不可以跨表格拖拽，即子表格只可以在子表格内拖拽，不可以将子表格内容拖拽到父表格
        </li>
        <li>`rowDragEnd` 事件返回 false 时，数据处理将被接管，组件内部不再做数据的移动操作</li>
      </ul>
    </div>
    <br />
    <Columns />
    <dragRowVue />
    <dragPromiseVue />
    <dragCustomGhostVue />
    <dragRowTreeVue />
    <dragColumnVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Columns from './columns.vue';
import dragRowVue from './drag-row.vue';
import dragPromiseVue from './drag-promise.vue';
import dragCustomGhostVue from './drag-custom-ghost.vue';
import dragRowTreeVue from './drag-row-tree.vue';
import dragColumnVue from './drag-column.vue';

export default defineComponent({
  components: {
    Columns,
    dragRowVue,
    dragPromiseVue,
    dragCustomGhostVue,
    dragRowTreeVue,
    dragColumnVue,
  },
  title: '拖拽',
  enTitle: 'Dragable',
  type: 'dragable',
  children: [
    {
      id: 'columns',
      title: '列宽拖拽',
      enTitle: 'Resize Width',
    },
    {
      id: 'drag-row',
      title: '行拖拽',
      enTitle: 'Drag sorting',
    },
    {
      id: 'drag-promise',
      title: '二次确认拖拽',
      enTitle: 'Second confirmation drag',
    },
    {
      id: 'drag-custom-ghost',
      title: '自定义拖拽提示',
      enTitle: 'Custom Drag Ghost',
    },
    {
      id: 'drag-row-tree',
      title: '树形拖拽',
      enTitle: 'Drag Tree Table',
    },
    {
      id: 'drag-column',
      title: '列拖拽',
      enTitle: 'column drag',
    },
    {
      id: 'multipe-sort',
      title: '多行拖拽',
      enTitle: 'Multipe drag sorting',
      disabled: true,
    },
  ],
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
