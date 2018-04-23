import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.less'

export default class Header extends PureComponent {
  render() {
    return(
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <NavLink activeClassName={ styles.active } to='/'>首页</NavLink>
        </nav>
      </header>
    )
  }
}

