import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileSidebox from '../../components/ProfileSidebox/ProfileSidebox';
import ProfileBanner from './ProfileComponents/ProfileBanner/ProfileBanner';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar shadow={true}/>
        <div className='jobsBody'>
          
          <div className='profileBanner'>
            <ProfileBanner/>
          </div>
        
        </div>
      </div>
    );
  }
}

export default Profile;