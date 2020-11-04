import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import routes, { renderRoutes } from '@/routes'
import '@/assets/styles/global.less'

const App = hot(() => <Router>{renderRoutes(routes)}</Router>)

ReactDOM.render(<App />, document.getElementById('root'))
