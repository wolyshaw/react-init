import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Application from './Application'
import store from '@/utils/store'
import './index.less'

render(
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <Router>
        <Application/>
      </Router>
    </Provider>
  </LocaleProvider>,
  document.getElementById('app')
)
