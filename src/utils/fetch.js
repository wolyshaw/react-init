import _JSON$stringify from 'babel-runtime/core-js/json/stringify'
import fetch from 'isomorphic-fetch'
import config from '../../config'
import { isClient } from './index'

export default (function (url) {
  var setting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

  if (setting.hint) {
    console.log(setting.hint)
  }
  if (setting.hide) {
    console.log(setting.hint)
  }
  var option = {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: _JSON$stringify(setting.body || {})
  }

  return fetch((isClient ? '' : config.ssr.apiHost) + url, option).then(function (res) {
    if (res.status === 200) {
      return res.json()
    } else {
      throw '网络服务器错误'
    }
  }).then(function (r) {
    if (r['return'] === 1) {
      return r
    } else {
      throw r.msg || r.errmsg
    }
  }).catch(function (error) {
    console.log(error)
    throw error
  })
})