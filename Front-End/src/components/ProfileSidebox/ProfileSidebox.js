import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import profilePic from "../../assets/profileSample.jpg";
import { NavLink } from "react-router-dom";
import "./ProfileSidebox.css";

const details = {
  firstname: "Aditya",
  lastname: "Pratap Singh",
  position: "Web developer",
  industry: "Software Incubator (SDC-SI)",
  visits: 270,
  postNum: 17,
};

class ProfileSidebox extends Component {
  state = {
    loading: true,
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({loading : false});
    },4000)
  }

  render() {
    let data = (
      <>
        <div className="coverImg"></div>

        <img className="profilePic" src={profilePic} />

        <h5 className="profileName">
          <NavLink to="/profile">
            {details.firstname} {details.lastname}
          </NavLink>
        </h5>

        <h6 className="profileStatus">
          {details.position} at {details.industry}
        </h6>

        <div className="profileVisits">
          <div>Profile visit : </div>
          <div style={{ color: "blue", fontSize: "13.3px" }}>
            {details.visits}
          </div>
        </div>

        <div className="profileVisits">
          <div>Posts you've created : </div>
          <div style={{ color: "blue", fontSize: "13.3px" }}>
            {details.postNum}
          </div>
        </div>

        <NavLink to="/savedPosts" style={{ color: "black", width: "100%" }}>
          <div className="savedPosts">
            <i class="fas fa-bookmark"></i>
            <h6 className="saved">Saved Posts</h6>
          </div>
        </NavLink>
      </>
    );
    if (this.state.loading) {
      data = (
        <>
          <Skeleton circle={true} style={{marginTop:'20px',marginBottom:'20px'}} height={65} width={65}/> 
          <Skeleton width={200} height={12}/>
          <Skeleton width={170} height={10}/> 
          <Skeleton width={170} height={10}/>
          <Skeleton width={200} height={12}/>
          <Skeleton width={170} height={10}/> 
          <Skeleton width={170} height={10}/>
          <Skeleton width={200} height={12}/>
          <Skeleton width={170} height={10}/> 
          <Skeleton width={170} height={10}/>
        </>
      )
    }

    return <div className="profileSideBox">{data}</div>;
  }
}

export default ProfileSidebox;

{
  /* <Skeleton circle={true} height={50} width={50}/> */
}
{
  /* <Skeleton width={200} height={12}/> */
}
