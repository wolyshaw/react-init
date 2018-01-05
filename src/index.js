import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Application from './components'
import { appStore } from 'util/store'

render(
  <Provider store={ appStore }>
    <BrowserRouter>
      <Application/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
