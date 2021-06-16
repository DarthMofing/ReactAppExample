import React, { Component } from 'react'
import './style/LoginForm.css'
import Button from './MainButton'
import {Link} from 'react-router-dom'

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
                        <p>New around? <Link to="/signup">Sign Up</Link></p>
                        <Button theme={"Button"} contentText={'Login'} link={"/badges"}></Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm