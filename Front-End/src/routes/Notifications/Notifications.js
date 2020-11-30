import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import PopularDomains from "../../components/PopularDomains/PopularDomains";
import defaultUserPic from "../../assets/defaultProfilePic.png";
import "./Notifications.css";
import { NavLink, Redirect } from "react-router-dom";
import axios from "../../API/baseURL/baseURL";
import Skeleton from "react-loading-skeleton";

// let notificationsData = [
//   {
//     userImg : null,profileId : 2,message: 'sent you a connection request sent you a connection request sent you a connection request',profileName: 'Utakarsh Patel',posted_at: '2day'
//   },
//   {
//     userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
//   },
//   {
//     userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
//   },
//   {
//     userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
//   },
//   {
//     userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
//   },
//   {
//     userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
//   },
//   {
//     userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
//   },
// ]

class Notifications extends Component {
  state = {
    notifications: null,
    isLoading: true,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profID = localStorage.getItem("profileID");
    axios
      .get(`notifications/get/notification/${profID}/`, config)
      .then((res) => {
        console.log(res);
        this.setState({ notifications: res.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let logStatus = localStorage.getItem("logStatus");
    if (logStatus === null) {
      return <Redirect to="/userLogin" />;
    }

    let notificationsDisplay = null;
    if (this.state.notifications !== null) {
      notificationsDisplay = this.state.notifications.map((item, index) => {
        let userPic = item.source_avatar;
        if (userPic === null) {
          userPic = defaultUserPic;
        }
        let backgroundStyle = null;
        if (index < 4) {
          backgroundStyle = {
            backgroundColor: "#f2f7fc",
          };
        }
        if (item.action === "application_accepted") {
          return (
            <div style={backgroundStyle} className="notification">
              <img src={userPic} />
              <h6>
                <NavLink
                  style={{ fontWeight: "380" }}
                  to={`/job/${item.source_id}`}
                >
                  {item.detail}
                </NavLink>
              </h6>
              <span className="timeStamp">{item.created_at}</span>
            </div>
          );
        }
        return (
          <div style={backgroundStyle} className="notification">
            <img src={userPic} />
            <h6>
              <NavLink to={`/user/${item.source_id}`}>
                <b>{item.source_name} </b>
              </NavLink>
              {item.detail}
            </h6>
            <span className="timeStamp">{item.created_at}</span>
          </div>
        );
      });
    }
    if (this.state.notifications && this.state.notifications.length === 0) {
      notificationsDisplay = (
        <div className="emptyNotifications">
          <h6>
            <i>Nothing to show here!</i>
          </h6>
        </div>
      );
    }

    if (this.state.isLoading) {
      notificationsDisplay = (
        <>
          <div className="notification">
            <Skeleton
              style={{ marginRight: "10px" }}
              circle={true}
              width={56}
              height={56}
            />
            <h6>
              <Skeleton
                style={{ marginBottom: "10px" }}
                width={240}
                height={13}
              />
              <br />
              <Skeleton width={160} height={11} />
            </h6>
          </div>
          <div className="notification">
            <Skeleton
              style={{ marginRight: "10px" }}
              circle={true}
              width={56}
              height={56}
            />
            <h6>
              <Skeleton
                style={{ marginBottom: "10px" }}
                width={240}
                height={13}
              />
              <br />
              <Skeleton width={160} height={11} />
            </h6>
          </div>
          <div className="notification">
            <Skeleton
              style={{ marginRight: "10px" }}
              circle={true}
              width={56}
              height={56}
            />
            <h6>
              <Skeleton
                style={{ marginBottom: "10px" }}
                width={240}
                height={13}
              />
              <br />
              <Skeleton width={160} height={11} />
            </h6>
          </div>
          <div className="notification">
            <Skeleton
              style={{ marginRight: "10px" }}
              circle={true}
              width={56}
              height={56}
            />
            <h6>
              <Skeleton
                style={{ marginBottom: "10px" }}
                width={240}
                height={13}
              />
              <br />
              <Skeleton width={160} height={11} />
            </h6>
          </div>
        </>
      );
    }

    return (
      <div>
        <Navbar shadow={true} />
        <div className="body feedBody">

          {/* <ProfileSidebox /> */}
          <div className="sideBox2">
            <ProfileSidebox />
          </div>

          <div className="notificationColumn postColumn">
            <h6 className="heading">Notifications</h6>
            {notificationsDisplay}
          </div>

          {/* <PopularDomains /> */}
          <div className="popDomains">
            <PopularDomains />
          </div>
          
        </div>
      </div>
    );
  }
}

export default Notifications;
