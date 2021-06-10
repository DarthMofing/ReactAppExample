import React from 'react'
import Hero from '../../components/Hero'
import "./Main.css"
import Button from '../../components/MainButton'
import Footer from '../../components/Footer'

const Main = props => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__tittle">{props.tittle || "Welcome Fella"}</h1>
                    <Button contentText={'Lets Start'} link={"/badges"}></Button>
                </div>
                <Hero h={'88vh'}></Hero>
            </div>
            <Footer s={{bottom:0}}></Footer>
        </React.Fragment>
    );
}

export default Main