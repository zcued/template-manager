import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import dayjs from 'dayjs'
import { hot } from 'react-hot-loader/root'
import { ConfigProvider } from 'antd'
import routes, { renderRoutes } from '@/routes'
import '@/assets/styles/global.less'

import zhCN from 'antd/lib/locale/zh_CN'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const App = hot(() => (
  <Router>
    <ConfigProvider locale={zhCN}>{renderRoutes(routes)}</ConfigProvider>
  </Router>
))

ReactDOM.render(<App />, document.getElementById('root'))
