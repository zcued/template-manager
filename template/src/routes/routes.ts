import React, { lazy } from 'react'

interface Route {
  path?: string
  name?: string
  layout?: boolean
  hideInMenu?: boolean
  component?: React.ComponentType<any>
  routes?: Route[]
}

const routes: Route[] = [
  {
    path: '/login',
    name: '登录',
    layout: false,
    component: lazy(
      () => import(/* webpackChunkName: "login" */ '@/pages/login')
    ),
  },
  {
    path: '/',
    name: '欢迎',
    component: lazy(
      () => import(/* webpackChunkName: "home" */ '@/pages/home')
    ),
  },
  {
    path: '/user',
    name: '用户',
  },
  {
    path: '/user/sub-page1',
    name: '二级菜单1',
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "user_sub_page1" */ '@/pages/user/sub-page1'
        )
    ),
  },
  {
    path: '/user/sub-page1/edit',
    name: '编辑用户',
    hideInMenu: true,
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "user_sub_page1" */ '@/pages/user/sub-page1'
        )
    ),
  },
  {
    path: '/user/sub-page2',
    name: '二级菜单2',
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "user_sub_page2" */ '@/pages/user/sub-page2'
        )
    ),
  },
  {
    path: '/user/plop',
    name: 'plop模版',
    component: lazy(
      () => import(/* webpackChunkName: "user_plop" */ '@/pages/user/plop')
    ),
  },
  {
    path: '/about',
    name: '关于我们',
    component: lazy(
      () => import(/* webpackChunkName: "about" */ '@/pages/about')
    ),
  },
  /** PREPEND ITEMS HERE */
  {
    component: lazy(() => import(/* webpackChunkName: "404" */ '@/pages/404')),
  },
]

export default routes
