import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import bannerSrc from "../../../../assets/coverBackground.jpeg";
import bannerSrc from "../../../../assets/linkedBack2.jpg";
// import bannerSrc from "../../../../assets/linkedBack3.jpg";
// import bannerSrc from "../../../../assets/linkedBack4.jpeg";
import defaultProfilePic from "../../../../assets/defaultProfilePic.png";
import ChangeAboutModal from "./Modals/ChangeAboutModal";
import ChangeUserDetailsModal from "./Modals/ChangeUserDetailsModal";
import "./ProfileBanner.css";
import defaultCompImg from "../../../../assets/defaultInstitute.png";
import axios from "../../../../API/baseURL/baseURL";

// const userData = {
//   firstName: "Aditya",
//   lastName: "Pratap Singh",
//   domain: "Web Developer",
//   industry: "Software Incuabator (SDC-SI)",
//   address: "Gautam Budh Nagar, Uttar Pradesh, India",
//   connections: 293,
//   profilePic: null,
//   about:
//     "I am an aspiring data scientist who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering, statistics, and machine learning.",
//   // about: null,
// };

class ProfileBanner extends Component {
  state = {
    showModal: false,
    modalNum: null,
    // data: null,
    // isLoading: true,
    // firstName: userData.firstName,
    // lastName: userData.lastName,
    // domain: userData.domain,
    // industry: userData.industry,
    // address: userData.address,
    // connections: userData.connections,
    // about: userData.about,
    // bannerSrc: bannerSrc,
    // profilePic: userData.profilePic,
    data: null,
    isLoading: true,
    firstName: null,
    lastName: null,
    tagline: null, 
    address: null,
    connections: null,
    about: null,
    bannerSrc: bannerSrc,
    profilePic: null,
    experience: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profID = localStorage.getItem('profileID');

    axios.get(`/user/profile/banner/${profID}/`,config)
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          data: res.data,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          profilePic: res.data.avatar,
          tagline: res.data.tagline,
          connections: res.data.connection,
          address: res.data.location,
          about: res.data.about,
          experience: res.data.experience,
        });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  displayModal = (id) => {
    this.setState({ showModal: true, modalNum: id });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  changeAbout = (updatedAbout) => {
    
    this.setState({ about: updatedAbout });
    let aboutID = localStorage.getItem('aboutID');
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let aboutData = {
      bio : updatedAbout
    }
    axios.patch(`/user/profile/about/update/${aboutID}/`,aboutData,config)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  };
  
  editUserDetails = (details) => {
    console.log("Parent");
    console.log(details);
    // if (details.profilePic === null) {
    //   details.profilePic = profilePic;
    // }
    this.setState({
      firstName: details.firstName,
      lastName: details.lastName,
      tagline: details.tagline,
      address: details.location,
      profilePic: details.profilePic,
    });

    let token = localStorage.getItem("accessToken");
    let profID = localStorage.getItem("profileID");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    let updateData = new FormData;
    updateData.append('first_name',details.firstName);
    updateData.append('last_name',details.lastName);
    updateData.append('location',details.location);
    if(details.selectedFile !== null){
      updateData.append('avatar',details.selectedFile);
    }
    updateData.append('tagline',details.tagline);
    // let updateData = {
    //   first_name : details.firstName,
    //   last_name : details.lastName,
    //   location : details.location,
    //   avatar : details.selectedFile,
    //   position : details.position,
    //   organization_name : details.industry,
    // }
    axios.put(`/user/profile/banner/update/${profID}/`,updateData,config)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })

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
              marginBottom: "4.4px",
            }}
            height={20}
            width={300}
          />
          <br />
          <Skeleton
            style={{
              // marginTop: "78px",
              marginLeft: "35px",
            }}
            height={16}
            width={260}
          />
          <br />
          <Skeleton
            style={{
              // marginTop: "78px",
              marginLeft: "35px",
            }}
            height={14}
            width={220}
          />
          <br />
          <Skeleton
            style={{
              marginTop: "30px",
              marginLeft: "35px",
            }}
            height={12}
            width="91%"
          />
          <Skeleton
            style={{
              marginTop: "0px",
              marginLeft: "35px",
            }}
            height={12}
            width="91%"
          />
          <Skeleton
            style={{
              marginTop: "0px",
              marginLeft: "35px",
            }}
            height={12}
            width="91%"
          />
          <Skeleton
            style={{
              marginTop: "0px",
              marginLeft: "35px",
            }}
            height={12}
            width="91%"
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
        <h6 style={{whiteSpace:'pre-wrap'}}>{this.state.about}</h6>
      </div>
    );
    if ( this.state.about === null || this.state.about === undefined || this.state.about === '') {
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

    let profilePic = this.state.profilePic;
    if (profilePic === null) {
      profilePic = defaultProfilePic;
    }

    let instituteData = null;
    if (this.state.experience) {
      instituteData = this.state.experience.map((elem) => {
        return (
          <div className="institute">
            <div className="instituteLeft">
              <img src={defaultCompImg} />
            </div>
            <div className="instituteRight">
              <h6>{elem}</h6>
            </div>
          </div>
        );
      });
    }

    return (
      <>
        {modalData}

        <div className="bannerImg">
          <img src={this.state.bannerSrc} />
        </div>

        <div className="profilePic">
          <img src={profilePic} />
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
              {this.state.tagline}
            </h6>
            <h6 className="userAddr">{this.state.address}</h6>
            <h6 className="userConn">
              <NavLink to="/network">
                {this.state.connections} connections
              </NavLink>
            </h6>
          </div>

          <div className="institutes">
            {instituteData}
            {/* <div className="institute">
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
            </div> */}
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
