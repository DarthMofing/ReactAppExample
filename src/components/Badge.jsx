import React, { Component } from 'react';
import "./style/Badge.css";
import HeaderBackground from '../images/badge_header.jpg'
import ProfilePicture from '../images/profile.jpg'

class Badge extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="Badge m-5">
            <div className="Badge__header">
              <img src={HeaderBackground} alt="Header Background" />
            </div>
            <div className="Badge__userInfo container mt-5 mb-1">
                <div className="Badge__userImage">
                  <img src={this.props.picture} alt="Profile Picture" />
                </div>
                <h4 className="text-center mt-5">
                  Saúl Bravo <i>20</i>
                </h4>
                <p className="text-center">
                  Chihuahua México
                </p>
            </div>
            <div className="Badge__info container pt-3">
              <div className="row">
                <div className="col">
                  <h4 className="text-center fw bold">43M</h4>
                  <p className="text-center">Followers</p>
                </div>
                <div className="col">
                  <h4 className="text-center fw bold">102M</h4>
                  <p className="text-center">Likes</p>
                </div>
                <div className="col">
                  <h4 className="text-center fw bold">4</h4>
                  <p className="text-center">Pictures</p>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Badge;