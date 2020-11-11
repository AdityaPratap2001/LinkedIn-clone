import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultProfilePic from "../../../../../assets/defaultProfilePic.png";
import "../SuggestedUsers.css";

class UserSuggestion extends Component {
  render() {
    let userData = this.props.data;
    let profileImg = userData.profilePic;
    if (profileImg === null) {
      profileImg = defaultProfilePic;
    }
    let aboutData = `${userData.position} at ${userData.industry}`;
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
        <NavLink to="/user/32">
          <div className="userDesc">
            <h6 className="userDescTop">
              {userData.firstName} {userData.lastName}
            </h6>
            <h6 className="userDescBottom">{aboutData}</h6>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default UserSuggestion;
