import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import LoggedIn from './Conditional/LoggedIn';

class Home extends Component {

  state = {
    isLoggedIn : true,
  }

  render() {
    return (
      <div>
        <Navbar shadow={true}/>
        <>
          {this.state.isLoggedIn ? <LoggedIn/> : <LandingPage/>}
        </>
      </div>
    );
  }
}

export default Home;