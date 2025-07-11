import Layout from './layouts/index.vue';
import demo from './demo/index.vue';
const routes = [
  {
    path: '/for-ant-demo',
    component: () => import('./views/for-ant-demo.vue'),
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('./views/home.vue'),
      },
      {
        path: 'doc/guide',
        component: () => import('./views/basic.vue'),
      },
      {
        path: 'doc/api',
        component: () => import('./views/api.vue'),
      },
      {
        path: 'doc/changelog',
        component: () => import('./views/changelog.vue'),
      },
      {
        path: 'pricing',
        component: () => import('./views/pricing.vue'),
      },
      {
        path: 'doc/antdv',
        component: () => import('./demo/antdv/index.vue'),
      },
      {
        path: 'doc/:type',
        props: true,
        component: demo,
      },
      { path: '/test', component: () => import('./views/test.vue') },
      { path: '/test1', component: () => import('./views/test1.vue') },
    ],
  },
  { path: '/:lang(.*)', redirect: '/' },
];

export default routes as any;
