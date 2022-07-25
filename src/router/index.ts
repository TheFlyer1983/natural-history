import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Routes } from './routes'

import SpacePage from '@/views/SpacePage/SpacePage.vue';

export const INITIAL_ROUTE = '/';

const routes: Array<RouteRecordRaw> = [
  {
    path: INITIAL_ROUTE,
    name: 'Index',
    redirect: () => ({ name: Routes.Space })
  },
  {
    path: '/space',
    name: Routes.Space,
    component: SpacePage
  },
  {
    path: '/oceans',
    name: Routes.Oceans,
    component: () => import('@/views/OceansPage/OceansPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(INITIAL_ROUTE),
  routes
})

export default router