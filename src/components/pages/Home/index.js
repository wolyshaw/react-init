import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div>
        <span onClick={ () => console.log(1) }>this is page1</span>
        <Link to={ '/learning' }>go react page</Link>
      </div>
    )
  }
}
