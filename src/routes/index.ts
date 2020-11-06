import React, { lazy } from 'react'
import ReactRouterDom from 'react-router-dom'
import defaultRoutes from './routes'

export { default as renderRoutes } from './renderRoutes'

export interface ComponentProps {
  route: Route
}

export type RouteComponentProps = ReactRouterDom.RouteComponentProps<any> &
  ComponentProps

export interface Route extends ReactRouterDom.RouteProps {
  key?: React.Key
  name?: string
  component?:
    | React.ComponentType<RouteComponentProps>
    | React.ComponentType<any>
  render?: (props: RouteComponentProps) => React.ReactNode
  children?:
    | ((props: ReactRouterDom.RouteChildrenProps<any>) => React.ReactNode)
    | React.ReactNode
  routes?: Route[]
}

const routes: Route[] = []

const layoutRoute: Route = {
  path: '/',
  component: lazy(
    () => import(/* webpackChunkName: "layout" */ '@/components/Layout')
  ),
  routes: [],
}

defaultRoutes.forEach(({ path, name, layout = true, component }) => {
  const route = {
    path,
    name,
    component,
    exact: !!path,
  }

  if (layout) {
    layoutRoute.routes.push(route)
  } else {
    routes.push(route)
  }
})

routes.push(layoutRoute)

export default routes
