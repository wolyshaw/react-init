export const setUser = data => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: 'SET_USER_INFO', data })
        resolve(null)
      }, 1000)
    })
  }
}
