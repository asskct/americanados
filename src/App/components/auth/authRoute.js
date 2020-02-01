import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

const AuthRoute = ({ component: Component, exact, path, ...rest }) => {
    const auth = useSelector(state => state.firebase.auth)
    return (
        isLoaded(auth) && !isEmpty(auth) ? (
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

