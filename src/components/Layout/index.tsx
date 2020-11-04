import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ProLayout, {
  SettingDrawer,
  ProSettings,
  MenuDataItem,
} from '@ant-design/pro-layout'
import { SmileOutlined, HeartOutlined, TableOutlined } from '@ant-design/icons'
import { renderRoutes, Route } from '@/routes'
import RightContent from './RightContent'
import Footer from './Footer'

// TODO: 后续通过接口获取
const mockMenu = [
  {
    path: '/user',
    name: '用户',
    icon: 'heart',
    children: [
      {
        path: '/user/sub-page1',
        name: '二级菜单1',
        icon: 'heart',
      },
      {
        path: '/user/sub-page2',
        name: '二级菜单2',
        icon: 'smile',
      },
    ],
  },
  {
    path: '/about',
    name: '关于',
    icon: 'table',
  },
]

const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  table: <TableOutlined />,
}

const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    children: children && loopMenuItem(children),
  }))

interface Props {
  route: Route
}

function Layout({ route }: Props): React.ReactElement {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixedHeader: true,
    menu: {
      locale: false,
    },
  })

  const history = useHistory()

  return (
    <>
      <ProLayout
        style={{
          maxHeight: '100vh',
        }}
        title="站酷海洛"
        logo="//static.hellorf.com/hellorf/images/hellorf-fav.png"
        onMenuHeaderClick={() => history.push('/')}
        postMenuData={() => loopMenuItem(mockMenu)}
        menuItemRender={(item, dom) => <Link to={item.path}>{dom}</Link>}
        rightContentRender={() => <RightContent />}
        itemRender={(breadcrumbRoute) => {
          return (breadcrumbRoute as any).component ? (
            <Link to={breadcrumbRoute.path}>
              {breadcrumbRoute.breadcrumbName}
            </Link>
          ) : (
            breadcrumbRoute.breadcrumbName
          )
        }}
        footerRender={() => <Footer />}
        route={{ path: '/', routes: route.routes as any }}
        {...settings}
      >
        {renderRoutes(route.routes)}
      </ProLayout>
      {process.env.NODE_ENV !== 'production' && (
        <SettingDrawer
          getContainer={() => document.getElementById('root')}
          settings={settings}
          onSettingChange={(changeSetting) => setSetting(changeSetting)}
        />
      )}
    </>
  )
}

export default Layout
