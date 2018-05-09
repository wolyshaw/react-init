import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '@/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

export const dispatch = store.dispatch

export default store
