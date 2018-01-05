const user = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.data
      break
    default:
      return state
  }
}

export default user
