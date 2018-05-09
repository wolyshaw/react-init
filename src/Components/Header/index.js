import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.less'

export default class Header extends Component {
  render() {
    return(
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <NavLink activeClassName={ styles.active } exact to='/'>首页</NavLink>
          <NavLink activeClassName={ styles.active } exact to='/router-info'>路由</NavLink>
          <NavLink activeClassName={ styles.active } exact to='/user'>用户</NavLink>
          <NavLink activeClassName={ styles.active } exact to={{pathname: '/foreign', search: '?url=/events/web/caiwu/'}}>嵌入</NavLink>
        </nav>
      </header>
    )
  }
}

