import React from 'react'
import './NewBadge.css'
import Badge from '../../components/Badge'
import Hero from '../../components/Hero'
import BadgeForm from '../../components/BadgeForm'

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

    handleChange = event => {
        this.setState({
            form:{
                ... this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={'15vh'}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                header_picture={this.state.form.header_picture || "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                profile_picture={this.state.form.profile_picture || "https://i.pinimg.com/564x/26/82/78/2682787e9d8241a3164a67748ac505b6.jpg"}
                                name={this.state.form.name || "Name LastName"}
                                age={this.state.form.age || "XX"}
                                city={this.state.form.city || "City"}
                                followers={this.state.form.followers || "0"}
                                likes={this.state.form.likes || "0"}
                                posts={this.state.form.posts || "0"}
                            >

                            </Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}>
                            </BadgeForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge