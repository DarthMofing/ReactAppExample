import React, { Component } from 'react'
import './style/LoginForm.css'

class LoginForm extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="LoginForm m-5">
                    <form action="">
                        <div className="form-group mb-2">
                            <h1>Login</h1>
                            <label className="mb-1">
                                Email
                            </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="email"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input 
                            type="password" 
                            className="form-control"
                            name="password"/>
                        </div>
                        <a href="" className="new_password mb-2">
                            Forgot your password?
                        </a>
                        <p>New around? <a href="">Sign Up</a></p>
                        <button type="submit" className="Submit__button">
                            Submit
                        </button>

                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm