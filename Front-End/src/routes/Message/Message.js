import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div>
        <Navbar shadow={true} />
        <div className="body feedBody">
          <h5 className='searchHead'>Messages will appear here</h5>
        </div>
      </div>
    );
  }
}

export default Message;