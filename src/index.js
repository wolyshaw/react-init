import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Pages from 'components/Pages'
import './static/index.less'

export const Application = props => {
  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  )
}

render(
  <Application/>,
  document.getElementById('app')
)
