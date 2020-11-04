import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { PageLoading } from '@ant-design/pro-layout'
import { Route as RouteProps, RouteComponentProps } from './index'

export default function renderRoutes(
  routes: RouteProps[],
  extraProps = {},
  switchProps = {}
): React.ReactElement {
  return routes ? (
    <Suspense fallback={<PageLoading />}>
      <Switch {...switchProps}>
        {routes.map(
          (route, i) =>
            (route.component || route.render || route.children) && (
              <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props: RouteComponentProps) =>
                  route.render ? (
                    route.render({
                      ...props,
                      ...extraProps,
                      route,
                    })
                  ) : (
                    <route.component {...props} {...extraProps} route={route} />
                  )
                }
              />
            )
        )}
      </Switch>
    </Suspense>
  ) : null
}
