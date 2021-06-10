import React from 'react'
import './NotFound.css'
import Footer from '../../components/Footer'

class NotFound extends React.Component {
    render() {
        return(
            <React.Fragment>
                
                <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1881.jpg" alt="NotFound" className="notfound_img"/>
                
                <Footer s={{bottom:0}}></Footer>
            </React.Fragment>
        );
    }
}

export default NotFound