import React, { Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Modal } from "react-bootstrap";
import bannerSrc from "../../../../assets/coverBackground.jpeg";
import profilePic from "../../../../assets/profileSample.jpg";

const userData = {
  firstName: "Aditya",
  lastName: "Pratap Singh",
  domain: "Web Developer",
  industry: "Software Incuabator (SDC-SI)",
  address: "Gautam Budh Nagar, Uttar Pradesh, India",
};

class ProfileBanner extends Component {
  state = {
    showModal: false,
  };

  displayModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          animation={false}
          centered
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
            <h6>jsbchdfbj</h6>
          </Modal.Header>
        </Modal>
        
        <div className="bannerImg">
          <img src={bannerSrc} />
        </div>
        
        <div className="profilePic">
          <img src={profilePic} />
          <div onClick={this.displayModal} className="profileEditButton">
            <i class="fas fa-user-edit"></i>
          </div>
        </div>
        
        <div className="userDetails">
          <h6 className="userName">
            {userData.firstName} {userData.lastName}
          </h6>
          <h6 className="userDomain">
            {userData.domain} at {userData.industry}
          </h6>
          <h6 className="userAddr">{userData.address}</h6>
        </div>
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
