import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends PureComponent {
  render() {
    return (
      <div>home<Link to='/test'>go Test</Link></div>
    )
  }
}
