
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import thunk from  'redux-thunk'

import * as AuthActions from './auth'
import history from '../routes/history'
import fbConfig from '../config/fbConfig'

const middlewares = [
    thunk,
    routerMiddleware(history),
    thunk.withExtraArgument({getFirebase})
]

const store = createStore (
    combineReducers({
      router: connectRouter(history),
      ...AuthActions, 
    }),
    compose(
        applyMiddleware(...middlewares),
        reactReduxFirebase(fbConfig)
    )
)

export default store