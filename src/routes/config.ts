interface Route {
  path?: string
  name?: string
  layout?: boolean
  component?: string
}

const routes: Route[] = [
  {
    path: '/login',
    name: '登录',
    layout: false,
    component: 'login',
  },
  {
    path: '/',
    name: '欢迎',
    component: 'home',
  },
  {
    path: '/user',
    name: '用户',
  },
  {
    path: '/user/sub-page1',
    name: '二级菜单1',
    component: 'user/sub-page1',
  },
  {
    path: '/user/sub-page1/edit',
    name: '编辑用户',
    component: 'user/sub-page1',
  },
  {
    path: '/user/sub-page2',
    name: '二级菜单2',
    component: 'user/sub-page2',
  },
  {
    path: '/about',
    name: '关于我们',
    component: 'about',
  },
  {
    component: '404',
  },
]

export default routes
