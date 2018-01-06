import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class Learning extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div>
        <Helmet title="Learning"/>
        react page
        <Link to={ '/' }>back</Link>
      </div>
    )
  }
}
