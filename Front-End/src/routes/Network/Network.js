import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileSidebox from '../../components/ProfileSidebox/ProfileSidebox';

class Network extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='body'>
          <ProfileSidebox/>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default Network;