export const userInfo = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.data
    case 'CLEAR_USER_INFO':
      return null
    default:
      return state
  }
}

export const login = (state = null, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return action.data
    case 'CLEAR_LOGIN':
      return null
    default:
      return state
  }
}
