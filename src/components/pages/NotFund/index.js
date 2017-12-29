import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class NotFund extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div>
        NotFund
        <Link to={ '/' }>back home</Link>
      </div>
    )
  }
}
