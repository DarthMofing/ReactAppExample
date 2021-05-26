import React from 'react'
import './NewBadge.css'
import Badge from '../../components/Badge'
import Hero from '../../components/Hero'

class NewBadge extends React.Component{

    state = {
        loading : false,
        error : null,
        form : {
            header_picture : "",
            profile_picture : "",
            name : "",
            city : "",
            age : "",
            followers : "",
            likes : "",
            posts : "",
        }    
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={'15vh'}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                            header_picture={this.state.form.header_picture || "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                            profile_picture={this.state.form.profile_picture || "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                            name={this.state.form.name || "Saúl Bravo"}
                            age={this.state.form.age || "20"}
                            city={this.state.form.city || "Chihuahua"}
                            followers={this.state.form.followers || "0"}
                            likes={this.state.form.likes || "0"}
                            posts={this.state.form.posts || "0"}
                        >

                        </Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge