import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { Switch, Route } from 'react-router-dom'
import { Provider } from "react-redux"


import Routes from './routes'
import store from './store/'
import history from '../App/routes/history'
import Login from './components/auth/login'
import firebase from './config/firebase'
import AuthRoute from './components/auth/authRoute'

function App() {
    const rrfProps = {
        firebase,
        config: {},
        dispatch: store.dispatch,
    }

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider { ...rrfProps }>
                <ConnectedRouter history={history}> 
                    <Switch>
                        {Routes.map((route, i) => <AuthRoute key={i} {...route} />)}
                        <Route path="/login" component={Login}/> 
                    </Switch>
                </ConnectedRouter>
            </ReactReduxFirebaseProvider>
        </Provider>
    )
}

export default App