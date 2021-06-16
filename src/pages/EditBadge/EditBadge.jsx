import React from 'react'
import Badge from '../../components/Badge'
import Hero from '../../components/Hero'
import BadgeForm from '../../components/BadgeForm'
import './EditBadge.css'
import '../NewBadge/NewBadge.css'
import api from '../../libs/fetch'
import Footer from '../../components/Footer'

class EditBadge extends React.Component{

    state = {
        loading : false,
        error : null,
        form : {
            hero_badge : "",
            profile_pic : "",
            name : "",
            //last_name: "",
            city : "",
            age : "",
            followers : "",
            likes : "",
            posts : "",
            //post: [],
        },
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, form:data})
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    handleChange = event => {
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true, error:null})

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/badges")
        } catch (error){
            this.setState({loading:false, error:error})
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={'10vh'}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                hero_badge={this.state.form.hero_badge || "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                profile_pic={this.state.form.profile_pic || "https://i.pinimg.com/564x/26/82/78/2682787e9d8241a3164a67748ac505b6.jpg"}
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
                <Footer s={{bottom:0}}></Footer>
            </React.Fragment>
        );
    }
}

export default EditBadge