import React, { Component } from "react";
import ProfileSidebox from "../../../components/ProfileSidebox/ProfileSidebox";
import Posts from "../Posts/Posts";
import PopularDomains from "../../../components/PopularDomains/PopularDomains";
import CreatePost from "../../../components/CreatePost/CreatePost";
import "../Home.css";

class LoggedIn extends Component {
  render() {
    return (
      <div className="body feedBody">
        <ProfileSidebox />
        
        <div className="postColumn">
          <CreatePost/>
          <Posts />
        </div>
        
        <PopularDomains />
      </div>
    );
  }
}

export default LoggedIn;
