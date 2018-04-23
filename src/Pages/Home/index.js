import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.less'

export default class Home extends PureComponent {
  render() {
    return (
      <div className={ styles.home }>
        you react project bulid success!
        <Link to='/test'>go Test</Link>
      </div>
    )
  }
}
