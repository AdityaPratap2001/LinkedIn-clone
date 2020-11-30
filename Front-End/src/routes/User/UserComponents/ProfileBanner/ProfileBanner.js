import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import bannerSrc from "../../../../assets/coverBackground.jpeg";
import bannerSrc from "../../../../assets/linkedBack2.jpg";
// import bannerSrc from "../../../../assets/linkedBack3.jpg";
// import bannerSrc from "../../../../assets/linkedBack4.jpeg";
import defaultProfilePic from "../../../../assets/defaultProfilePic.png";
import "./ProfileBanner.css";
import defaultCompImg from "../../../../assets/defaultInstitute.png";
import axios from "../../../../API/baseURL/baseURL";

const userData = {
  firstName: "Aditya",
  lastName: "Pratap Singh",
  domain: "Web Developer",
  industry: "Software Incuabator (SDC-SI)",
  address: "Gautam Budh Nagar, Uttar Pradesh, India",
  connections: 293,
  profilePic: null,
  // userID : this.props.match.params.id,
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
    firstName: null,
    lastName: null,
    domain: null,
    industry: null,
    address: null,
    connections: null,
    about: null,
    bannerSrc: bannerSrc,
    profilePic: null,
    connectStatus: null,
    userID: this.props.userID,
    connectionId: null,
    redirect: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(`/user/profile/banner/${this.state.userID}/`, config)
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
          connectionId: res.data.connection_id,
        });
        let isConnected = res.data.is_connected;
        let isPending = res.data.is_pending;

        if (isConnected) {
          this.setState({ connectStatus: "connected" });
        }
        if (!isConnected) {
          this.setState({ connectStatus: "notConnected" });
        }
        if (!isConnected && isPending) {
          this.setState({ connectStatus: "pending" });
        }
        if (isConnected === null && isPending === null) {
          this.setState({ redirect: true });
        }
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  connectRequest = () => {
    // alert("Connection Request Sent!");
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const reqData = {
      field: "data",
    };
    axios
      .post(
        `/user/network/send/connection/${this.state.userID}/`,
        reqData,
        config
      )
      .then((res) => {
        console.log(res);
        this.setState({ connectStatus: "pending" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // unConnectPending = () => {
  //   alert("Withdraw pending request!");
  //   this.setState({ connectStatus: "notConnected" });
  // };

  // removeConnection = () => {
  //   alert("Will remove connection!");
  //   this.setState({ connectStatus: "notConnected" });
  // };

  removeConnection = () => {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(
        `/user/network/delete/connection/${this.state.connectionId}/`,
        config
      )
      .then((res) => {
        console.log(res);
        this.setState({ connectStatus: "notConnected" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }

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
        <h6>{this.state.about}</h6>
      </div>
    );

    if (
      this.state.about === null ||
      this.state.about === undefined ||
      this.state.about === ""
    ) {
      aboutUserData = (
        <div className="userAboutNull">
          {/* <h6 onClick={() => this.displayModal(2)}> */}
          <h6>
            <i>Nothing to show in about section</i>
          </h6>
        </div>
      );
    }

    let profilePic = this.state.profilePic;
    if (profilePic === null) {
      profilePic = defaultProfilePic;
    }

    let statusData = null;
    if (this.state.connectStatus === "notConnected") {
      statusData = (
        <button onClick={this.connectRequest} className="statusButton">
          Connect
        </button>
      );
    }
    if (this.state.connectStatus === "pending") {
      statusData = (
        <button onClick={this.removeConnection} className="statusButton">
          Pending
        </button>
      );
    }
    if (this.state.connectStatus === "connected") {
      statusData = (
        <>
          <button className="statusButton">Message</button>
          <button onClick={this.removeConnection} className="statusButton2">
            Remove
          </button>
        </>
      );
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
            <h6 className="userDomain">{this.state.tagline}</h6>
            <h6 className="userAddr">{this.state.address}</h6>
            <h6 className="userConn">
              {/* <NavLink to="/network"> */}
              {this.state.connections} connections
              {/* </NavLink> */}
            </h6>
          </div>

          <div className="institutes">{instituteData}</div>
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
