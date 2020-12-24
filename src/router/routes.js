export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../pages/index'),
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../pages/info'),
  },
]
