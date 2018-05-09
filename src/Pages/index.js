import React, { Component, createRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from '@/Components/Bundle'
import PrivateRoute from '@/Components/PrivateRoute'
import HomeLazy from '@/Pages/Home'
import UserLazy from '@/Pages/User'
import RouterInfoLazy from '@/Pages/RouterInfo'

const Home = props => (
  <Bundle load={ HomeLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const User = props => (
  <Bundle load={ UserLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const RouterInfo = props => (
  <Bundle load={ RouterInfoLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

class Foreign extends Component {

  state = {
    iframeHeight: 0
  }

  iframe = createRef()

  iframeLoaded = () => {
    const ifrBody = this.iframe.current.contentWindow.document || this.iframe.current.contentWindow.body
    this.setState({iframeHeight: ifrBody.documentElement.scrollHeight})
  }

  render() {
    return (
      <iframe ref={this.iframe} scrolling="no" onLoad={this.iframeLoaded} style={{width: '100%', border: 'none', height: this.state.iframeHeight + 'px'}} src={'/events/web/caiwu/'}></iframe>
    )
  }
}

export default class Pages extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/user' component={ User } />
        <Route exact path='/foreign' component={ Foreign } />
        <PrivateRoute exact path='/router-info' component={ RouterInfo } />
      </Switch>
    )
  }
}
