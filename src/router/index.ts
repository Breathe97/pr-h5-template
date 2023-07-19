import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 静态路由
// 静态路由不会校验权限如果没有找到路由会跳转到404、403
const routes: any = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      keepAlive: false,
    },
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: () => import('@/views/home/home-index.vue'),
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录',
      keepAlive: false,
    },
    component: () => import('@/views/login/login-index.vue'),
  },
  {
    path: '/:path(.*)',
    meta: {
      title: '页面找不到',
      keepAlive: false,
    },
    component: () => import('@/views/error/error-404.vue'),
  },
]

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

const router = createRouter({
  history: true ? createWebHistory(`/${VITE_BASE_URL}`) : createWebHashHistory(`/${VITE_BASE_URL}`), // 路由模式
  routes,
})

export default router
