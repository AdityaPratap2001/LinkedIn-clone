import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileLevel from './UserComponents/ProfileLevel/ProfileLevel';
import Experience from './UserComponents/Experience/Experience';
import PopularDomains from './UserComponents/PopularDomains/PopularDomains';
import SuggestedUsers from "./UserComponents/SuggestedUsers/SuggestedUsers";
import ProfileBanner from './UserComponents/ProfileBanner/ProfileBanner';
import Skills from './UserComponents/Skills/Skills';
import './User.css';

class User extends Component {

  state = {
    profileId : this.props.match.params.id,
  }

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

export default User;