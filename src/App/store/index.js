import { createStore, applyMiddleware, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from  'redux-thunk'

import history from '../routes/history'

const middlewares = [
    thunk,
    routerMiddleware(history),
]

const store = createStore(
    combineReducers({
      router : connectRouter(history)
    }),
    applyMiddleware(...middlewares)
)

export default store