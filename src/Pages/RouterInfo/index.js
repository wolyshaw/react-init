import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of'
import _classCallCheck from 'babel-runtime/helpers/classCallCheck'
import _createClass from 'babel-runtime/helpers/createClass'
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn'
import _inherits from 'babel-runtime/helpers/inherits'
import React, { PureComponent } from 'react'
import styles from './index.less'

var RouterInfo = function (_PureComponent) {
  _inherits(RouterInfo, _PureComponent)

  function RouterInfo() {
    _classCallCheck(this, RouterInfo)

    return _possibleConstructorReturn(this, (RouterInfo.__proto__ || _Object$getPrototypeOf(RouterInfo)).apply(this, arguments))
  }

  _createClass(RouterInfo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: styles['router-info'] },
        '\u8DEF\u7531\u4FE1\u606F'
      )
    }
  }])

  return RouterInfo
}(PureComponent)

export default RouterInfo