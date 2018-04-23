import React from 'react'
import { render } from 'react-dom'
import Application from './Application'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.less'

render(
  <Router>
    <Application/>
  </Router>,
  document.getElementById('app')
)
