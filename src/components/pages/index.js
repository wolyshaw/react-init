import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Learning from './Learning'
import NotFund from './NotFund'

export default class Pages extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/learning' component={ Learning }/>
        <Route component={ NotFund }/>
      </Switch>
    )
  }
}
