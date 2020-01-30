import thunk from  'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from '../routes/history'

const middlewares = [
    thunk,
    routerMiddleware(history),
]

const store = createStore(
    connectRouter(history)(() => {}), applyMiddleware(...middlewares)
)

export default store