import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import ProfileSidebox from '../../components/ProfileSidebox/ProfileSidebox';
import ProfileBanner from './ProfileComponents/ProfileBanner/ProfileBanner';
import './Profile.css';
import PopularDomains from './ProfileComponents/PopularDomains/PopularDomains';
import ProfileLevel from './ProfileComponents/ProfileLevel/ProfileLevel';
import Dashboard from './ProfileComponents/Dashboard/Dashboard';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar shadow={true}/>
        <div className='jobsBody profPage'>
          
          <div className='profileBanner'>
            <ProfileBanner/>
          </div>

          <div className='popularDomains'>
            <PopularDomains/>
          </div>

          <div className='profileLevel'>
            <ProfileLevel/>
          </div>

          <div className='suggestions'>
            {/* <PopularDomains/> */}
          </div>

          <div className='dashboard'>
            <Dashboard/>
          </div>
        
        </div>
      </div>
    );
  }
}

export default Profile;