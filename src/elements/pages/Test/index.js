import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Test extends PureComponent {
  render() {
    return (
      <div>Test<Link to='/'>go home</Link></div>
    )
  }
}
