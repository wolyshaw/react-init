import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Bundle from '@/Components/Bundle'
import HomeLazy from '@/Pages/Home'
import RouterInfoLazy from '@/Pages/RouterInfo'

const Home = props => (
  <Bundle load={ HomeLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const RouterInfo = props => (
  <Bundle load={ RouterInfoLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

export default class Pages extends Component {
  render() {
    return (
      <span>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/router-info' component={ RouterInfo } />
        </Switch>
      </span>
    )
  }
}
