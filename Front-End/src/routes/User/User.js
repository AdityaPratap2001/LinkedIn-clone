import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileLevel from './UserComponents/ProfileLevel/ProfileLevel';
import Experience from './UserComponents/Experience/Experience';
import PopularDomains from './UserComponents/PopularDomains/PopularDomains';
import SuggestedUsers from "./UserComponents/SuggestedUsers/SuggestedUsers";
import ProfileBanner from './UserComponents/ProfileBanner/ProfileBanner';
import Skills from './UserComponents/Skills/Skills';
import {Redirect} from 'react-router-dom';
import './User.css';

class User extends Component {

  state = {
    userID : this.props.match.params.id,
  }

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
              <ProfileBanner userID={this.state.userID}/>
            </div>
            {/* <div className="profileLevel">
              <ProfileLevel userID={this.state.userID}/>
            </div> */}
            <div className="experience">
              <Experience userID={this.state.userID}/>
            </div>
            <div className="experience skills">
              <Skills userID={this.state.userID}/>
            </div>
          </div>

          <div className="profileRight">
            <div className="popularDomains">
              <PopularDomains userID={this.state.userID}/>
            </div>
            <div className="suggestions">
              <SuggestedUsers userID={this.state.userID}/>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default User;