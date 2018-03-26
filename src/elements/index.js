import React, { PureComponent } from 'react'
import Pages from './pages'

export default class Application extends PureComponent {
  render() {
    return (
      <div>
        <header>header</header>
        <Pages/>
        <footer>footer</footer>
      </div>
    )
  }
}
