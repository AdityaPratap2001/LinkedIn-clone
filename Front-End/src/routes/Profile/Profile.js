import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import ProfileSidebox from '../../components/ProfileSidebox/ProfileSidebox';
import ProfileBanner from "./ProfileComponents/ProfileBanner/ProfileBanner";
import "./Profile.css";
import PopularDomains from "./ProfileComponents/PopularDomains/PopularDomains";
import ProfileLevel from "./ProfileComponents/ProfileLevel/ProfileLevel";
import Dashboard from "./ProfileComponents/Dashboard/Dashboard";
import Experience from "./ProfileComponents/Experience/Experience";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar shadow={true} />
        <div className="jobsBody profPage">
          <div className="profileLeft">
            <div className="profileBanner">
              <ProfileBanner />
            </div>
            <div className="profileLevel">
              <ProfileLevel />
            </div>
            <div className="dashboard">
              <Dashboard />
            </div>
            <div className="experience">
              <Experience/>
            </div>
          </div>

          <div className="profileRight">
            <div className="popularDomains">
              <PopularDomains />
            </div>
            <div className="suggestions">{/* <PopularDomains/> */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
