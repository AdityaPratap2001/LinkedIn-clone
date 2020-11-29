import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";
import profPic from "../../assets/profileSample.jpg";
import defaultProfPic from "../../assets/defaultProfilePic.png";
import msgImg from "../../assets/msg5.jpg";
import { NavLink } from "react-router-dom";
import MessageWindow from "./MessageWindow";
import InputBar from "./InputBar";
import dummyData from "./dummyData";
import axios from "../../API/baseURL/baseURL";

let List = dummyData;

class Message extends Component {
  state = {
    selectedUser: this.props.match.params.id,
    userList: List,
  };

  componentDidMount() {
    console.log(this.state.selectedUser);

    // axios.get('/recentChats')
    //   .then((res)=>{
    //     console.log(res);
    //     this.setState({userList : res.data});
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
  }

  render() {
    let listData = this.state.userList.map((user) => {
      let profPic = user.pic;
      if (profPic === null) {
        profPic = defaultProfPic;
      }
      let customClass = "";
      if (user.profileID == this.state.selectedUser) {
        customClass = "selecteduser";
      }

      return (
        <div className={`chatUser ${customClass}`}>
          <NavLink to={`/message/${user.profileID}`}>
            <div>
              <img src={profPic} />
            </div>
            <div>
              <h6 className="name">{user.name}</h6>
              <h6 className="tagline">{user.tagline.slice(0, 40)}...</h6>
            </div>
          </NavLink>
        </div>
      );
    });

    let selectedUserData = null;
    let chatId = null;
    
    this.state.userList.map((user) => {
      if (user.profileID == this.state.selectedUser) {
        selectedUserData = user;
    
        if (selectedUserData !== null) {
          chatId = user.profileID;
        }
        
      }
    });

    return (
      <div>
        <Navbar shadow={true} />
        <div className="body bodyy">
          <div className="messageBody">
            <div className="box1">
              <div className="list">
                <div className="listHeader">
                  <form className="barbox">
                    <i className="fas fa-search"></i>
                    <input
                      className="input_bar"
                      type="text"
                      // value={this.state.term}
                      // onChange={this.onInputChange}
                      placeholder="Search..."
                    />
                  </form>
                </div>

                <div className="actualList">{listData}</div>
              </div>

              <div className="msgBox">
                {this.state.selectedUser === undefined ? (
                  <h6>Initial Screen</h6>
                ) : (
                  <MessageWindow
                    user={selectedUserData}
                    chatId={chatId}
                  />
                )}
                {/* {this.state.selectedUser === undefined ? null : <InputBar />} */}
              </div>
            </div>

            <div className="box2">
              <h6 className="adHead">Message, Connect & Increase your reach</h6>
              <img src={msgImg} />
              <h6 className="adBot adBot1">Connect to opportunity</h6>
              <h6 className="adBot">
                Interact with your connections, help them know you better
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
