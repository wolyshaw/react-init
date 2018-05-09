import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { dispatch } from '@/utils/store'
import styles from './index.less'

@withRouter
export default class Home extends PureComponent {

  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }

  render() {
    return (
      <div className={ styles.home }>
        you react project bulid success!
        <span onClick={() => dispatch({type: 'SET_USER_INFO', data: false})}>重新渲染</span>
        <Link to='/test'>go Test</Link>
      </div>
    )
  }
}
