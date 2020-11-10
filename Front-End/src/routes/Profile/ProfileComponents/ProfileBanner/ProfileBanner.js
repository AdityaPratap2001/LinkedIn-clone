import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import bannerSrc from "../../../../assets/coverBackground.jpeg";
import bannerSrc from "../../../../assets/linkedBack2.jpg";
// import bannerSrc from "../../../../assets/linkedBack3.jpg";
// import bannerSrc from "../../../../assets/linkedBack4.jpeg";
import profilePic from "../../../../assets/profileSample.jpg";
import ChangeAboutModal from "./Modals/ChangeAboutModal";
import ChangeUserDetailsModal from "./Modals/ChangeUserDetailsModal";
import './ProfileBanner.css';

const userData = {
  firstName: "Aditya",
  lastName: "Pratap Singh",
  domain: "Web Developer",
  industry: "Software Incuabator (SDC-SI)",
  address: "Gautam Budh Nagar, Uttar Pradesh, India",
  connections: 293,
  profilePic: profilePic,
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
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },2000)
  }

  displayModal = (id) => {
    this.setState({ showModal: true, modalNum: id });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  changeAbout = (updatedAbout) => {
    this.setState({ about: updatedAbout });
  };
  editUserDetails = (details) => {
    console.log("Parent");
    console.log(details);
    if (details.profilePic === null) {
      details.profilePic = profilePic;
    }
    this.setState({
      firstName: details.firstName,
      lastName: details.lastName,
      domain: details.position,
      industry: details.industry,
      address: details.location,
      profilePic: details.profilePic,
    });
  };

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
    aboutUserData = (
      <div className="userAboutFilled">
        <div onClick={() => this.displayModal(2)} className="profileEditButton">
          <i class="fas fa-pencil-alt"></i>
        </div>
        <h6>{this.state.about}</h6>
      </div>
    );
    if (this.state.about === null) {
      aboutUserData = (
        <div className="userAboutNull">
          <h6 onClick={() => this.displayModal(2)}>
            Add about yourself, so people get to know you better.
          </h6>
        </div>
      );
    }

    let modalData = null;
    if (this.state.showModal && this.state.modalNum === 1) {
      modalData = (
        <ChangeUserDetailsModal
          editUserDetails={this.editUserDetails}
          hideModal={this.hideModal}
        />
      );
    }
    if (this.state.showModal && this.state.modalNum === 2) {
      modalData = (
        <ChangeAboutModal
          hideModal={this.hideModal}
          changeAbout={this.changeAbout}
        />
      );
    }

    return (
      <>
        {modalData}

        <div className="bannerImg">
          <img src={this.state.bannerSrc} />
        </div>

        <div className="profilePic">
          <img src={this.state.profilePic} />
          <div
            onClick={() => this.displayModal(1)}
            className="profileEditButton"
          >
            <i class="fas fa-user-edit"></i>
          </div>
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
              <NavLink to="/network">
                {this.state.connections} connections
              </NavLink>
            </h6>
          </div>

          <div className="institutes">
            <div className="institute">
              <div className="instituteLeft">
                <img src={this.state.profilePic} />
              </div>
              <div className="instituteRight">
                <h6>Software Incubator (SDC-SI)</h6>
              </div>
            </div>
            <div className="institute">
              <div className="instituteLeft">
                <img src={this.state.profilePic} />
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
