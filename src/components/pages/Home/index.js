import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { setUser } from 'actions/user'
import { dispatch } from 'util/store'

class Home extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <span onClick={ () => console.log(1) }>this is page1</span>
        <Link to={ '/learning' }>go react page</Link>
        <span onClick={ () => dispatch(setUser({user: 'user'})) }>test</span>
      </div>
    )
  }
}

export default connect(state => state)(Home)
