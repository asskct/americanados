import React from 'react'
import { Route, Redirect } from "react-router-dom"

import isAuth from './auth'

const AuthRoute = ({ component: Component, exact, path, ...rest }) => {
    return (
        isAuth() ? (
        <Route
          exact={exact}
          path={path}
          render={props => (<Component {...props} {...rest} />)}/>
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: rest.location } }}/>
      )    
    )
}

export default AuthRoute

