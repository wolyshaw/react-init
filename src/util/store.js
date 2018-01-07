import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import store from '../reducers'

const middleware = [ thunk ]

export const appStore = init => createStore(
  store,
  init,
  applyMiddleware(...middleware)
)

// export const { dispatch } = appStore
