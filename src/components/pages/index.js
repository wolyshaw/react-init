import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Home from './Home'
import Learning from './Learning'
import NotFund from './NotFund'
import PrivateRoute from '../elements/PrivateRoute'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/learning',
    exact: true,
    component: Learning
  },
  {
    path: '*',
    component: NotFund
  }
]

export default class Pages extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div>
        {renderRoutes(routes)}
        {/* <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/learning' component={ Learning }/>
          <Route component={ NotFund }/>
        </Switch> */}
      </div>
    )
  }
}
