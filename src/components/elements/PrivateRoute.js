import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

export default connect(({userinfo}) => ({userinfo}))((option) => {
  let Component = option.Component
  return (
  <Route { ...option } render={props => {
    return (
      option.userinfo !== false ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )
  }}/>
)})
