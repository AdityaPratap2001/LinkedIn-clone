import React, { Component } from 'react';
import './Signup.css';
import Navbar from '../../components/Navbar/Navbar';

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='body'>
          <h5>Signup form</h5>
        </div>
      </div>
    );
  }
}

export default Signup;