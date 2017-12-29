import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div>
        react page
        <Link to={ '/' }>back</Link>
      </div>
    )
  }
}
