
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { firebaseReducer, getFirebase } from 'react-redux-firebase'

import thunk from  'redux-thunk'

import history from '../routes/history'

const initialState = {}

const middlewares = [ 
    routerMiddleware(history),
    thunk.withExtraArgument(getFirebase)
]

const store = createStore (
    combineReducers({
        router: connectRouter(history),
        firebase: firebaseReducer,
    }),
    initialState,
    compose (
        applyMiddleware(...middlewares)
    )
)

export default store