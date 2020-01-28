import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthRoute from './components/auth/authRoute'
import Login from './components/auth/login'
import Routes from './routes'

const App = () => {
    return (
        <BrowserRouter> 
	        <Switch>
	          {Routes.map((route, i) => <AuthRoute key={i} {...route} />)}
	          <Route path="/login" component={Login}/> 
	        </Switch>
	   	</BrowserRouter>
    )
}

export default App