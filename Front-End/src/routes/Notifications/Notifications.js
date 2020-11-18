import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import PopularDomains from "../../components/PopularDomains/PopularDomains";

class Notifications extends Component {
  render() {
    return (
      <div>
        <Navbar shadow={true} />
        <div className="body feedBody">
          <ProfileSidebox />

          <div className="postColumn">
            {/* <CreatePost/> */}
            <hr style={{ margin: "0px", marginBottom: "12px" }} />
            {/* <Posts /> */}
          </div>

          <PopularDomains />
        </div>
      </div>
    );
  }
}

export default Notifications;
