import React, { PureComponent, Children, cloneElement } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
// import Test from './Test'
import styles from './index.less'
let container

const cx = classnames.bind(styles)
// const popups = {
//   test: Test
// }

export default class Popups extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    header: PropTypes.node,
    footer: PropTypes.node,
    place: PropTypes.string
  }

  static defaultProps = {
    place: 'center'
  }

  componentWillMount() {
    if(!container) {
      container = document.createElement('div')
    }
    document.body.appendChild(container)
  }

  render() {
    const { children, place, header } = this.props
    return createPortal(
      <div className={ styles.popups }>
        <div className={ styles.container }>
          <div className={ cx({place: place === 'center'}) }>
            <header className={ styles.header }>
              <span>{header}</span>
              <span>关闭</span>
            </header>
            <div className={ styles.content }>{ typeof children === 'string' ? children : Children.map(children, child => cloneElement(child, { ... this.props })) }</div>
            <footer className={ styles.footer }>{header}</footer>
          </div>
        </div>
      </div>,
      container
    )
  }
}
