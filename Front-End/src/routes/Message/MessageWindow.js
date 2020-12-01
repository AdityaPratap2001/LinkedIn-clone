import React, { Component } from "react";
import defaultUserPic from "../../assets/defaultProfilePic.png";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { connect } from "react-redux";

const Message = ({ text, senderId, user, otherUserPicture, myPic }) => {
  let self = false;
  let MyId = localStorage.getItem('profileID');
  if (MyId == senderId) {
    self = true;
  }

  if (!self) {
    return (
      <div className="message other-message">
        <div>
          <img src={otherUserPicture} />
        </div>
        <div className="message-text">
          <span>{user}</span>
          <h6>{text}</h6>
        </div>
      </div>
    );
  }
  return (
    <div className="message self-message">
      <div className="message-text">
        <span>{user}</span>
        <h6>{text}</h6>
      </div>
      <div>
        <img src={myPic} />
      </div>
    </div>
  );
};

let accessToken = localStorage.getItem("accessToken");

class MessageWindow extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     chatId : props.user.profileID
  //   }
  // this.messageWindow = React.createRef();
  // }

  state = {
    chatId: this.props.chatId,
    // messages: this.props.messages,
    messages: [],
    typedMsg: "",
    counter: 0,
    chatId: this.props.chatId, 
  };

  // client = null;
  // if(this.props.user.profileID !== null){
  client = new W3CWebSocket(`ws://b84202b00c82.ngrok.io/ws/chat/${localStorage.getItem('profileID')}/${this.state.chatId}/`);
  // }

  onButtonClick = (e) => {
    e.preventDefault();
    console.log("Send msg!");
    this.client.send(
      JSON.stringify({
        // message: this.state.typedMsg,
        text: this.state.typedMsg,
        // is_my_msg: true,
      })
    );
    this.setState({ typedMsg: "" });
  };

  componentDidMount() {
    console.log(this.state);
    // const messageWindow = this.messageWindow.current;
    // if (messageWindow !== null) {
    //   messageWindow.scrollTop =
    //     messageWindow.scrollHeight - messageWindow.clientHeight;
    // }
    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    this.setState({counter : 0});
    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("got reply! ", dataFromServer);

      console.log(this.state.counter);

      if(this.state.counter === 0){
        let msgs = dataFromServer.messages;
        this.setState({messages : msgs.reverse(),counter : 1});
      }
      // if(this.state.counter !== 0){
      else{
        let newMsg = dataFromServer;
        let newMsgArray = this.state.messages;
        newMsgArray.push(newMsg);
        // this.setState({newMsgArray});
        this.setState({messages : newMsgArray})
        console.log(this.state.messages);
      }

      // let newMsg = dataFromServer;
      // let newMessages = this.state.messages;
      // newMessages.push(newMsg);
      // this.setState({ messages: newMessages });

      // let oldMsg = [];
      // if (this.state.counter === 0) {
      //   dataFromServer.messages.map((item) => {
      //     oldMsg = this.state.messages;
      //     oldMsg.push(item);
      //   });
      //   this.setState({ messages: newMessages });
      // }

      // dataFromServer.messages.map((item) => {
      //   let newMessages = this.state.messages;
      //   newMessages.push(item);
      //   // this.setState((state) => ({
      //   //   messages: [
      //   //     ...state.messages,
      //   //     {
      //   //       msg: item.content,
      //   //       user: item.sender,
      //   //       owner: item.owner,
      //   //     },
      //   //   ],
      //   // }));
      //   this.setState({ messages: newMessages });
      // });
    };
  }

  render() {
    if (this.props.user === null) {
      return <h6>Iniial screen</h6>;
    }

    let headerPic = this.props.user.user_avatar;
    if (headerPic === null) {
      headerPic = defaultUserPic;
    }

    let myPic = null;
    if (this.props.data !== null && this.props.data !== undefined) {
      myPic = this.props.data.img;
    }
    if (myPic === null) {
      myPic = defaultUserPic;
    }

    return (
      <>
        <div className="msgWindowHeader">
          <img src={headerPic} />
          <h6>{this.props.user.user_name}</h6>
        </div>
        <div className="msgWindowScreen" ref={this.messageWindow}>
          {this.state.messages.map((msg,index) => {
            // if(index === this.state.messages.length - 1){
            //   return null;
            // }
            return (
              <Message
                myPic={myPic}
                userPic={headerPic}
                text={msg.text}
                senderId={msg.sender_id}
                user={msg.sender}
                otherUserPicture={headerPic}
              />
            );
          })}
        </div>
        {/* <InputBar /> */}

        <div className="input-bar">
          <form onSubmit={this.onButtonClick}>
            <input
              type="text"
              placeholder="Send message..."
              value={this.state.typedMsg}
              onChange={(e) => this.setState({ typedMsg: e.target.value })}
            />
          </form>
          <div onClick={this.onButtonClick} className="sendMessage">
            <i class="fas fa-paper-plane"></i>
            {/* <i class="fas fa-location-arrow"></i> */}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.prof.userData,
  };
};

export default connect(mapStateToProps)(MessageWindow);
