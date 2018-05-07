import fetch from 'isomorphic-fetch'
import config from 'config'
import { isClient } from './'

export default (url, setting = {}) =>  {

  var option = {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(setting.body || {})
  }

  return fetch((isClient ? '' : config.ssr.apiHost) + url, option)
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw '网络服务器错误'
      }
    })
    .then(r => {
      if (r['return'] === 1) {
        return r
      } else {
        throw r.msg || r.errmsg
      }
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}
