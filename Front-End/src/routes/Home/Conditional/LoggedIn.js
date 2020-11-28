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
        <div className="sideBox2">
          <ProfileSidebox />
        </div>

        <div className="postColumn">
          <CreatePost />
          <hr style={{ margin: "0px", marginBottom: "12px" }} />
          <Posts />
        </div>

        <div className='popDomains'>
          <PopularDomains />
        </div>
      </div>
    );
  }
}

export default LoggedIn;
