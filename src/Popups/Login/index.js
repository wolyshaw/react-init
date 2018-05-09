import React, { PureComponent } from 'react'
import { Button } from 'antd'
import PropsType from 'prop-types'
import { connect } from 'react-redux'
import { setUserInfo, clearLogin } from '@/actions/user'

@connect(state => state)
export default class Login extends PureComponent {

  static propTypes = {
    dispatch: PropsType.func,
    login: PropsType.object,
  }

  login = () => {
    const { login, dispatch} = this.props
    dispatch(setUserInfo({}))
    dispatch(clearLogin())
    login && login.cb && typeof login.cb === 'function' && login.cb(login)
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.login()}>登录</Button>
      </div>
    )
  }
}
