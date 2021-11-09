import Layout from './layouts/index.vue';
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('./views/home.vue'),
      },
      {
        path: 'doc/guide',
        component: () => import('./views/basic.vue'),
      },
      {
        path: 'doc/antdv',
        component: () => import('./demo/antdv/index.vue'),
      },
      {
        path: 'doc/basic',
        component: () => import('./demo/basic/index.vue'),
      },
      {
        path: 'doc/pagination',
        component: () => import('./demo/pagination/index.vue'),
      },
      {
        path: 'doc/dragable',
        component: () => import('./demo/dragable/index.vue'),
      },
      { path: 'test', component: () => import('./views/test.vue') },
    ],
  },
  { path: '/:lang(.*)', redirect: '/home' },
];

export default routes as any;
