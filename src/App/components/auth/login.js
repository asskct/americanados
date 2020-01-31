import React from 'react'
import { connect, useSelector } from 'react-redux'

import validate from './validateLogin'
import useForm from '../common/useForm'
// import * as AuthActions from '../../store/auth'

const Login = () => {
    const signIn = useSelector(state => state.signIn)
    const [
        values,
        handleChange,
        handleSubmit,
        error
    ] = useForm(signIn, validate)
      
    return (
        <div className="column is-half is-offset-one-quarter">
            <form onSubmit={handleSubmit} noValidate>
            <h1 className="is-size-1 has-text-left"> Login </h1>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                <input
                    className={`input ${error.email && "inputError"}`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email || ""}
                />
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
                </p>
                {error.email && <p className="error">{error.email}</p>}
            </div>
            <div className="field">
                <p className="control has-icons-left">
                <input
                    className={`input ${error.password && "inputError"}`}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={values.password || ""}
                />
                <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                </span>
                </p>
                {error.password && <p className="error">{error.password}</p>}
            </div>
            <div className="field">
                <p className="control">
                <button
                    type="submit"
                    className="button is-success"
                    onClick={() => {}}> Login 
                </button>
                </p>
            </div>
            </form>
        </div>
    )
}

export default Login

// export default connect(
//     null,
//     AuthActions
// )(Login)