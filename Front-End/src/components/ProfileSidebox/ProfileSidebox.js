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
    },2000)
    // },0)
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

        <div style={{width:'100%',margin:'16px 0px'}}>
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
        </div>

        <NavLink to="/savedPosts" style={{ display:'flex', color: "black", width: "100%" }}>
          {/* <div style={{padding:'10px',border:'#ccc 1.8px solid'}}>
            <h6 style={{fontSize:'12.5px'}}>Bookmarks</h6>
          </div>
          <div style={{padding:'10px',border:'#ccc 1.8px solid'}}>
            <h6 style={{fontSize:'12.5px'}}>Premium</h6>
          </div> */}
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
          <Skeleton circle={true} style={{margin:'20px'}} height={65} width={65}/> 
          <Skeleton style={{marginLeft:'18px'}} width={180} height={12}/>
          <Skeleton style={{marginLeft:'18px',marginBottom:'25px'}} width={150} height={10}/> 
          {/* <Skeleton style={{marginLeft:'18px'}} width={150} height={10}/> */}
          {/* <Skeleton style={{marginLeft:'18px'}} width={180} height={12}/> */}
          <Skeleton style={{marginLeft:'18px'}} width={150} height={10}/> 
          <Skeleton style={{marginLeft:'18px'}} width={150} height={10}/>
          <Skeleton style={{marginLeft:'18px'}} width={150} height={10}/>
          <Skeleton style={{marginLeft:'18px',marginBottom:'18px'}} width={150} height={10}/>
          <Skeleton style={{marginLeft:'18px'}} width={150} height={12}/>
          <Skeleton style={{marginLeft:'18px',marginBottom:'15px'}} width={150} height={10}/>
        </>
      )
    }

    return <div className="profileSideBox">{data}</div>;
  }
}

export default ProfileSidebox;
