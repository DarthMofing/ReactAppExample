import React from 'react'
import './Login.css'
import LoginForm from '../../components/LoginForm'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

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
                <Footer s={{bottom:0}}></Footer>
            </React.Fragment>
        );
    }
}

export default Login