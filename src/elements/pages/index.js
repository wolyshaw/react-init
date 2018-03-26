import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Test from './Test'

export default class Pages extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact  path='/' component={ Home } />
          <Route exact  path='/test' component={ Test } />
        </Switch>
      </Router>
    )
  }
}
