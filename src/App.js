import React, { PureComponent } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('./pages/home'))

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    )
  }
}
