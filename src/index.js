import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Application from './components'

render(
  <BrowserRouter>
    <Application/>
  </BrowserRouter>,
  document.getElementById('app')
)
