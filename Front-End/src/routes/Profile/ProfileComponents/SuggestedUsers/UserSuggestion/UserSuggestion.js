import Axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultProfilePic from "../../../../../assets/defaultProfilePic.png";
import "../SuggestedUsers.css";
import axios from '../../../../../API/baseURL/baseURL';

class UserSuggestion extends Component {

  render() {
    let userData = this.props.data;
    let profileImg = userData.avatar;
    if (profileImg === null) {
      profileImg = defaultProfilePic;
    }
    let aboutData = `${userData.tagline}`;
    if(aboutData.length>40){
      let newData = aboutData.slice(0,37);
      aboutData = `${newData}...`
    }

    return (
      <div className="user">
        {/* <h6>{userData.firstName}</h6> */}
        <div className="userPic">
          <img src={profileImg} />
        </div>
        <NavLink to={`/user/${userData.profile_id}`}>
          <div className="userDesc">
            <h6 className="userDescTop">
              {userData.name}
            </h6>
            <h6 className="userDescBottom">{aboutData}</h6>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default UserSuggestion;
