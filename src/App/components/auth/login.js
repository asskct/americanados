import React from 'react'
import useForm from './useForm'

const Login = () => {

    const [values, handleChange] = useForm()

    const login = e => {
        e.preventDefault()
        console.log(values)
    }

    return (       
        <div className="column is-half is-offset-one-quarter">
          <form onSubmit={login}>
            <h1 className="is-size-1 has-text-left"> Login </h1>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email || ""}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password || ""}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
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