import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from './Home'
import Learning from './Learning'
import NotFund from './NotFund'

export default class Pages extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div>
      <Helmet
					htmlAttributes={{lang: "en", amp: undefined}}
					titleTemplate="%s | React App"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/learning' component={ Learning }/>
          <Route component={ NotFund }/>
        </Switch>
      </div>
    )
  }
}
