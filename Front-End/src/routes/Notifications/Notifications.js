import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import PopularDomains from "../../components/PopularDomains/PopularDomains";
import defaultUserPic from "../../assets/defaultProfilePic.png";
import './Notifications.css';
import { NavLink,Redirect } from "react-router-dom";

let notificationsData = [
  {
    userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
  },
  {
    userImg : null,profileId : 2,message: 'sent you a connection request',profileName: 'Utakarsh Patel'
  }
]

class Notifications extends Component {

  state = {
    notifications: notificationsData, 
  }

  render() {
    let logStatus = localStorage.getItem('logStatus');
    if(logStatus === null){
      return <Redirect to='/userLogin'/>
    }

    let notificationsDisplay = null;
    if(this.state.notifications !== null){
      notificationsDisplay = this.state.notifications.map((item,index)=>{
        let userPic = item.userImg;
        if(userPic === null){
          userPic = defaultUserPic;
        }
        return(
          <div className='notification'>
            <img src={userPic}/>
            <h6>
              <NavLink to={`/user/${item.profileId}`}>
                <b>{item.profileName} </b>
              </NavLink>
              {item.message}
            </h6>
          </div>
        )
      })
    }
    if(this.state.notifications.length === 0){
      notificationsDisplay = (
        <div className='emptyNotifications'>
          <h6><i>Nothing to show here!</i></h6>
        </div>
      )
    }

    return (
      <div>
        <Navbar shadow={true} />
        <div className="body feedBody">
          <ProfileSidebox />

          <div className="notificationColumn postColumn">
            <h6 className='heading'>Notifications</h6>
            {notificationsDisplay}
          </div>

          <PopularDomains />
        </div>
      </div>
    );
  }
}

export default Notifications;
