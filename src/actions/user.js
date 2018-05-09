export const openLogin = data => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      if(data) {
        dispatch({type: 'SET_LOGIN', data})
        resolve(data)
      } else {
        reject('no data')
      }
    })
  }
}

export const clearLogin = () => {
  return {type: 'CLEAR_LOGIN'}
}

export const setUserInfo = data => {
  return dispatch => {
    return Promise.resolve(data)
      .then(data => {
        dispatch({type: 'SET_USER_INFO', data: {}})
        return data
      })
  }
}
