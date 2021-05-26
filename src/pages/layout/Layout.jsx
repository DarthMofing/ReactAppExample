import React from 'react'
import './Layout.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
                <Header></Header>
                {props.children}
                <Footer></Footer>
            </div>
        </React.Fragment>
    );
}

export default Layout;