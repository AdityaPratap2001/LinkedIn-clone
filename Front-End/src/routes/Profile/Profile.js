import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import ProfileSidebox from '../../components/ProfileSidebox/ProfileSidebox';
import ProfileBanner from "./ProfileComponents/ProfileBanner/ProfileBanner";
import "./Profile.css";
import PopularDomains from "./ProfileComponents/PopularDomains/PopularDomains";
import ProfileLevel from "./ProfileComponents/ProfileLevel/ProfileLevel";
import Dashboard from "./ProfileComponents/Dashboard/Dashboard";
import Experience from "./ProfileComponents/Experience/Experience";
import Skills from "./ProfileComponents/Skills/Skills";
import SuggestedUsers from './ProfileComponents/SuggestedUsers/SuggestedUsers';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
  render() {
    let logStatus = localStorage.getItem('logStatus');
    if(logStatus === null){
      return <Redirect to='/userLogin'/>
    }
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
            <div className="experience skills">
              <Skills/>
            </div>
          </div>

          <div className="profileRight">
            <div className="popularDomains">
              <PopularDomains />
            </div>
            <div className="suggestions">
              <SuggestedUsers/>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Profile;
