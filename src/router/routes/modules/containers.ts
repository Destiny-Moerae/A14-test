import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const CONTAINERS: AppRouteRecordRaw = {
  path: '/containers',
  name: 'containers',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.containers',
    requiresAuth: true,
    icon: 'icon-home',
    order: 0,
  },
  children: [
    {
      path: 'containerList',
      name: 'ContainerList',
      component: () => import('@/views/local/containers/index.vue'),
      meta: {
        locale: 'menu.containerList',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'containerDetails/:id',
      name: 'ContainerDetails',
      component: () => import('@/views/local/containers/details.vue'),
      meta: {
        locale: 'menu.containerDetails',
        requiresAuth: true,
        roles: ['*'],
        hideInMenu: true,
      },
    },
  ],
};

export default CONTAINERS;
