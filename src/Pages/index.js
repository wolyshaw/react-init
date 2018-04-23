import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import Bundle from '@/Components/Bundle'
const HomeLazy = require('bundle-loader?lazy&name=Home!@/Pages/Home')

const Home = props => (
  <Bundle load={ HomeLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

export default class Pages extends PureComponent {
  render() {
    return (
      <span>
        <Switch>
          <Route exact  path='/' component={ Home } />
        </Switch>
      </span>
    )
  }
}
