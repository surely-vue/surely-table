import basic from './basic/index.vue';
import pagination from './pagination/index.vue';
import dragable from './dragable/index.vue';
import edit from './edit/index.vue';
import filter from './filter/index.vue';
import group from './group/index.vue';
import performance from './performance/index.vue';
import selection from './selection/index.vue';
import tree from './tree/index.vue';
import custom from './custom/index.vue';

const allDemo = [
  basic,
  pagination,
  dragable,
  edit,
  filter,
  selection,
  tree,
  group,
  custom,
  performance,
].map(demo => {
  const { title, enTitle, type, children = [], ...component } = demo;
  return {
    title,
    enTitle,
    type,
    children,
    component,
  };
});

export default allDemo;
