import React from 'react'
import { render } from 'react-dom'
import User from './User'
import { a } from './a'

const App = props => {
  return (
    <div onClick={ () => console.log(a, props) }>
      App
    </div>
  )
}

render(
  <div>
    <App/>
    <User/>
  </div>,
  document.getElementById('app')
)
