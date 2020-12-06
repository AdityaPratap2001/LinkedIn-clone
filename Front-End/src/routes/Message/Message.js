import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";
import profPic from "../../assets/profileSample.jpg";
import defaultProfPic from "../../assets/defaultProfilePic.png";
import msgImg from "../../assets/msg5.jpg";
import { NavLink,Redirect } from "react-router-dom";
import MessageWindow from "./MessageWindow";
import dummyData from "./dummyData";
import axios from "../../API/baseURL/baseURL";
import msgBackPic from "../../assets/msgBack2.png";

let List = dummyData;

class Message extends Component {
  state = {
    selectedUser: this.props.match.params.id,
    userList: [],
  };

  componentDidMount() {
    console.log(this.state.selectedUser);

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get('/chat/user/history/',config)
      .then((res)=>{
        console.log(res);
        this.setState({userList : res.data});
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  render() {

    let logStatus = localStorage.getItem("logStatus");
    if (logStatus === null) {
      return <Redirect to="/userLogin" />;
    }

    let listData = this.state.userList.map((user) => {
      let profPic = user.user_avatar;
      if (profPic === null) {
        profPic = defaultProfPic;
      }
      let customClass = "";
      if (user.user_id == this.state.selectedUser) {
        customClass = "selecteduser";
      }

      let prevMsg = null;
      if(user.text !== null ){
        prevMsg = user.text.slice(0, 40);
      }

      return (
        <div className={`chatUser ${customClass}`}>
          <NavLink to={`/message/${user.user_id}`}>
            <div>
              <img src={profPic} />
            </div>
            <div>
              <h6 className="name">{user.user_name}</h6>
              <h6 className="tagline">{prevMsg}</h6>
            </div>
          </NavLink>
        </div>
      );
    });

    let selectedUserData = null;
    let chatID = null;

    this.state.userList.map((user) => {
      console.log(user);
      console.log(this.state);
      if (user.user_id == this.state.selectedUser) {
        selectedUserData = user;

        if (selectedUserData !== null) {
          chatID = user.user_id;
        }
      }
      console.log(chatID)
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
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      // style={{ width: "40%", height: "40%"}}
                      style={{ width: "70%", height: "70%"}}
                      src={msgBackPic}
                    />
                    {/* <h6>
                      <i style={{color:'#788FA5'}}>Messages will appear here!</i>
                    </h6> */}
                  </div>
                ) : (
                  <MessageWindow 
                  user={selectedUserData} 
                  chatId={this.state.selectedUser} 
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
