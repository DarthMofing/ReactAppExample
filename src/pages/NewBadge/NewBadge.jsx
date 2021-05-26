import React from 'react'
import './NewBadge.css'
import Hero from '../../components/Hero'

class NewBadge extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={'15vh'}></Hero>
                <h1>New Badge</h1>
            </React.Fragment>
        );
    }
}

export default NewBadge