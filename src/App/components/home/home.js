import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthRoute from '../auth/authRoute'

const Home = ({ routes }) => {
    return (
        <BrowserRouter> 
            <Switch>
            {routes.map((route, i) => <AuthRoute key={i} {...route} />)}
            </Switch>
        </BrowserRouter>
    )
}

export default Home