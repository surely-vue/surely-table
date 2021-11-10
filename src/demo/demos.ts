import basic from './basic/index.vue';
import pagination from './pagination/index.vue';
import dragable from './dragable/index.vue';

const allDemo = [basic, pagination, dragable].map(demo => {
  const { title, enTitle, type, children = [] } = demo;
  return {
    title,
    enTitle,
    type,
    children,
  };
});

export default allDemo;
