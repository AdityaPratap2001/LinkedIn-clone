import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import bannerSrc from "../../../../assets/coverBackground.jpeg";
import bannerSrc from "../../../../assets/linkedBack2.jpg";
// import bannerSrc from "../../../../assets/linkedBack3.jpg";
// import bannerSrc from "../../../../assets/linkedBack4.jpeg";
import defaultProfilePic from "../../../../assets/defaultProfilePic.png";
import './ProfileBanner.css';
import defaultCompImg from '../../../../assets/defaultInstitute.png';

const userData = {
  firstName: "Aditya",
  lastName: "Pratap Singh",
  domain: "Web Developer",
  industry: "Software Incuabator (SDC-SI)",
  address: "Gautam Budh Nagar, Uttar Pradesh, India",
  connections: 293,
  profilePic: null,
  about:
    "I am an aspiring data scientist who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering, statistics, and machine learning.",
  // about: null,
};

class ProfileBanner extends Component {
  state = {
    showModal: false,
    modalNum: null,
    data: null,
    isLoading: true,
    firstName: userData.firstName,
    lastName: userData.lastName,
    domain: userData.domain,
    industry: userData.industry,
    address: userData.address,
    connections: userData.connections,
    about: userData.about,
    bannerSrc: bannerSrc,
    profilePic: userData.profilePic,
    connectStatus: 'connected'
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },2000)
  }

  connectRequest = () => {
    alert('Connection Request Sent!');
    this.setState({connectStatus : 'pending'});
  }

  unConnectPending = () => {
    alert('Withdraw pending request!');
    this.setState({connectStatus : 'notConnected'});
  }

  removeConnection = () => {
    alert('Will remove connection!');
    this.setState({connectStatus : 'notConnected'});
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Skeleton
            height={150}
            style={{
              borderRadius: "0px",
              transform: "translateY(-4px)",
            }}
          />
          <div style={{ position: "relative" }}>
            <Skeleton
              style={{
                border: "white 4px solid",
                position: "absolute",
                left: "35px",
                transform: "translateY(-70px)",
              }}
              circle={true}
              height={135}
              width={135}
            />
          </div>
          <Skeleton
            style={{
              marginTop: "78px",
              marginLeft: "35px",
              marginBottom:'4.4px'
            }}
            height={20}
            width={300}
          /><br/>
          <Skeleton
            style={{
              // marginTop: "78px",
              marginLeft: "35px",
            }}
            height={16}
            width={260}
          /><br/>
          <Skeleton
            style={{
              // marginTop: "78px",
              marginLeft: "35px",
            }}
            height={14}
            width={220}
          /><br/>
          <Skeleton
            style={{
              marginTop: "30px",
              marginLeft: "35px"
            }}
            height={12}
            width='91%'
          />
          <Skeleton
            style={{
              marginTop: "0px",
              marginLeft: "35px",
            }}
            height={12}
            width='91%'
          />
          <Skeleton
            style={{
              marginTop: "0px",
              marginLeft: "35px",
            }}
            height={12}
            width='91%'
          />
          <Skeleton
            style={{
              marginTop: "0px",
              marginLeft: "35px",
            }}
            height={12}
            width='91%'
          />
        </>
      );
    }

    let aboutUserData = null;
    if(this.state.about !== null){
      aboutUserData = (
        <div className="userAboutFilled">
          <h6>{this.state.about}</h6>
        </div>
      );
    }

    let profilePic = this.state.profilePic;
    if(profilePic === null){
      profilePic = defaultProfilePic;
    }

    let statusData = null;
    if(this.state.connectStatus === 'notConnected'){
      statusData = (
        <button onClick={this.connectRequest} className='statusButton'>
          Connect
        </button>
      )
    }
    if(this.state.connectStatus === 'pending'){
      statusData = (
        <button onClick={this.unConnectPending} className='statusButton'>
          Pending
        </button>
      )
    }
    if(this.state.connectStatus === 'connected'){
      statusData = (
        <>
        <button className='statusButton'>
          Message
        </button>
        <button onClick={this.removeConnection} className='statusButton2'>
          Remove
        </button>
        </>
      )
    }

    return (
      <>
        {/* {modalData} */}

        <div className="bannerImg">
          <img src={this.state.bannerSrc} />
        </div>

        <div className="profilePic">
          <img src={profilePic} />
          {statusData}
        </div>

        <div className="userDetails">
          <div>
            <h6 className="userName">
              {this.state.firstName} {this.state.lastName}
            </h6>
            <h6 className="userDomain">
              {this.state.domain} at {this.state.industry}
            </h6>
            <h6 className="userAddr">{this.state.address}</h6>
            <h6 className="userConn">
              {/* <NavLink to="/network"> */}
                {this.state.connections} connections
              {/* </NavLink> */}
            </h6>
          </div>

          <div className="institutes">
            <div className="institute">
              <div className="instituteLeft">
                <img src={defaultCompImg} />
              </div>
              <div className="instituteRight">
                <h6>Software Incubator (SDC-SI)</h6>
              </div>
            </div>
            <div className="institute">
              <div className="instituteLeft">
                <img src={defaultCompImg} />
              </div>
              <div className="instituteRight">
                <h6>Ajay Kumar Garg Engineering College</h6>
              </div>
            </div>
          </div>
        </div>

        {aboutUserData}
      </>
    );
  }
}

export default ProfileBanner;

// <button onClick={this.displayModal}>hwvehfver</button>
// <Modal
//   show={this.state.showModal}
//   animation={false}
//   centered
//   onHide={this.hideModal}
// >
//   <Modal.Header closeButton>
//     <h6>jsbchdfbj</h6>
//   </Modal.Header>
// </Modal>
