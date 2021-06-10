import React from 'react'
import './Layout.css'
import Header from '../../components/Header'

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
                <Header></Header>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;