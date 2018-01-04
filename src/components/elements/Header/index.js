import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.less'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className={ style.header }>
        <nav>
          <li><NavLink to='/' exact activeClassName={ style.active }>首页</NavLink></li>
          <li><NavLink to='/learning' activeClassName={ style.active }>learning</NavLink></li>
          <li><NavLink to='/404' activeClassName={ style.active }>404不存在的页面</NavLink></li>
        </nav>
      </header>
    )
  }
}
