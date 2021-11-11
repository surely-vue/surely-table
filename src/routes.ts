import Layout from './layouts/index.vue';
import demo from './demo/index.vue';
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
        path: 'doc/:type',
        props: true,
        component: demo,
      },
      { path: '/test', component: () => import('./views/test.vue') },
    ],
  },
  { path: '/:lang(.*)', redirect: '/home' },
];

export default routes as any;
