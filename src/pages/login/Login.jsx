import React from 'react'
import './Login.css'
import LoginForm from '../../components/LoginForm'
import Hero from '../../components/Hero'

class Login extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="loginForm">
                    <div className="content">
                        <LoginForm></LoginForm>
                    </div>
                <Hero h={'88vh'}></Hero>
                </div>
            </React.Fragment>
        );
    }
}

export default Login