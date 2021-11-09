const demos = [
  // {
  //   title: 'Ant Design Vue',
  //   enTitle: 'Ant Design Vue',
  //   type: 'antdv',
  //   children: [
  //     {
  //       id: 'antdv',
  //       title: 'Ant Design Vue',
  //       enTitle: 'Ant Design Vue',
  //     },
  //     {
  //       id: 'ele',
  //       title: 'Element Plus',
  //       enTitle: 'Element Plus',
  //     },
  //     {
  //       id: 'other',
  //       title: '更多',
  //       enTitle: 'More',
  //     },
  //   ],
  // },
  // {
  //   title: 'Element Plus',
  //   enTitle: 'Element Plus',
  //   type: 'element-plus',
  //   children: [
  //     {
  //       id: 'ing',
  //       title: '',
  //       enTitle: 'Ant Design Vue',
  //     },
  //   ],
  // },
  {
    title: '基本用法',
    enTitle: 'Basic',
    type: 'basic',
    children: [
      {
        id: 'basic',
        title: '简单表格',
        enTitle: 'Basic Table',
      },
      {
        id: 'fixed',
        title: '固定列',
        enTitle: 'Fixed Colunms',
      },
      {
        id: 'fixed-header',
        title: '固定表头',
        enTitle: 'Fixed Header',
      },
      {
        id: 'fixed-header-columns',
        title: '固定头和列',
        enTitle: 'Fixed Columns and Header',
      },
      {
        id: 'sticky',
        title: '表头吸顶',
        enTitle: 'Fixed header and scroll bar with the page',
      },
      {
        id: 'grouping-columns',
        title: '表头分组',
        enTitle: 'Grouping table head',
      },
      {
        id: 'bordered',
        title: '边框、title、footer',
        enTitle: 'border, title and footer',
      },
      {
        id: 'stripe',
        title: '斑马纹',
        enTitle: 'Stripe',
      },
      {
        id: 'summary',
        title: '总结栏',
        enTitle: 'Summary',
      },
    ],
  },
  {
    title: '分页',
    enTitle: 'Pagination',
    type: 'pagination',
    children: [
      {
        id: 'basic',
        title: '基本分页',
        enTitle: 'Basic Pagination',
      },
      {
        id: 'config',
        title: '分页配置',
        enTitle: 'Pagination Config',
      },
      {
        id: 'loading',
        title: '分页加载',
        enTitle: 'Pagination Loading',
      },
      {
        id: 'custom',
        title: '自定义分页',
        enTitle: 'Custom Pagination',
      },
    ],
  },
  {
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
        id: 'sort',
        title: '拖拽排序',
        enTitle: 'Drag sorting',
        disabled: true,
      },
      {
        id: 'multipe-sort',
        title: '多行拖拽',
        enTitle: 'Multipe drag sorting',
        disabled: true,
      },
    ],
  },
];

export default demos;
