export const setUser = data => {
  return dispatch => {
    setTimeout(() => dispatch({ type: 'SET_USER_INFO', data }), 1000)
  }
}
