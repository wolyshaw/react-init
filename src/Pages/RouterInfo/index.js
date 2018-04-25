import React, { PureComponent } from 'react'
import styles from './index.less'

export default class RouterInfo extends PureComponent {
  state = {}

  render() {
    return (
      <div className={ styles['router-info'] }>
        路由信息
      </div>
    )
  }
}
