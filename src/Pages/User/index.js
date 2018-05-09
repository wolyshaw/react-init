import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { openLogin } from '@/actions/user'

@withRouter
@connect(state => state)
export default class User extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    userInfo: PropTypes.any,
    login: PropTypes.any,
  }

  loginAfter = () => {
    this.props.dispatch(openLogin({cb: data => console.log(data), a: 'c'}))
  }

  componentDidMount() {
    if(this.props.userInfo === false) {
      this.loginAfter()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.userInfo !== nextProps.userInfo && nextProps.userInfo === false) {
      this.loginAfter()
    }
  }

  render() {
    return (
      <div>
        this is user page
        <div onClick={ () => this.props.dispatch({type: 'SET_USER_INFO', data: false}) }>设置未登录状态</div>
      </div>
    )
  }
}
