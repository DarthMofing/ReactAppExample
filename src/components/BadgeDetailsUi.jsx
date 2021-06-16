import React from 'react'
import Badge from './Badge'
import Hero from './Hero'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import DeleteBadgeModal from './DeleteBadgeModal'

const BadgeDetailsUi = props => {
    const badge = props.badge

    return(
        <React.Fragment>
            <Hero h={"10vh"}></Hero>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            hero_badge = {badge.hero_badge}
                            profile_pic = {badge.profile_pic}
                            name = {badge.name}
                            age = {badge.age}
                            city = {badge.city}
                            followers = {badge.followers || 0}
                            likes = {badge.likes || 0}
                            posts = {badge.posts || 0}
                        >
                        </Badge>
                    </div>
                <div className="col-6 mt-5">
                    <h2>Actions</h2>
                    <Link className="btn btn-success mx-3" to={`/${badge._id}/edit/`}>Edit</Link>
                    <button onClick={props.onOpenModal} className="btn btn-danger mx-3">Delete</button>
                    <DeleteBadgeModal
                        isOpen = {props.modalIsOpen}
                        onClose = {props.onCloseModal}
                        onDeleteBadge = {props.onDeleteBadge}
                    >
                    </DeleteBadgeModal>
                </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default BadgeDetailsUi