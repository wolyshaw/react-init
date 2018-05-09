import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (
        rest.userInfo !== false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      )}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  userInfo: PropTypes.any
}

export default connect(({userInfo}) => ({userInfo}))(PrivateRoute)
