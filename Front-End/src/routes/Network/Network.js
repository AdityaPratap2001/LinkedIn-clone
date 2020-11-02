import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileSidebox from '../../components/ProfileSidebox/ProfileSidebox';

class Network extends Component {
  render() {
    return (
      <div>
        <Navbar shadow={true}/>
        <div className='body'>
          <ProfileSidebox/>
          <div>
            <h6>jxgbj</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Network;