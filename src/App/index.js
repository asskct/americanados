import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './routes'
import history from '../App/routes/history'
import Login from './components/auth/login'
import AuthRoute from './components/auth/authRoute'

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}> 
                <Switch>
                    {Routes.map((route, i) => <AuthRoute key={i} {...route} />)}
                    <Route path="/login" component={Login}/> 
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}

export default App