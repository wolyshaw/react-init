import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd'
import Pages from '@/Pages'
import Login from '@/Popups/Login'
import Header from '@/Components/Header'

@withRouter
@connect(state => state)
export default class Application extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    userInfo: PropTypes.any,
    login: PropTypes.any,
    history: PropTypes.object
  }

  componentWillMount() {
    // this.props.dispatch({type: 'SET_USER_INFO', data: false})
  }

  modalCancel = () => {
    if(this.props.userInfo === false) {
      this.props.history.push('/')
      this.props.dispatch({type: 'CLEAR_LOGIN'})
    }
  }

  render() {
    return (
      <span>
        <Header/>
        <Pages/>
        <footer>当前登录状态：{this.props.userInfo === false ? '未登录' : '已登录'}</footer>
        <Modal
          visible={this.props.userInfo === false && !!this.props.login}
          footer={null}
          onCancel={this.modalCancel}
        >
          <Login/>
        </Modal>
      </span>
    )
  }
}
