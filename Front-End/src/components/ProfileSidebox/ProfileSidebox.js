import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import defaultProfilePic from "../../assets/defaultProfilePic.png";
import { NavLink } from "react-router-dom";
import "./ProfileSidebox.css";
import axios from "../../API/baseURL/baseURL";

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
    details: null,
  };

  componentDidMount() {
    // setTimeout(()=>{
    //   this.setState({loading : false});
    // },2000)
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("/user/info/", config)
      .then((res) => {
        console.log(res);
        this.setState({ loading: false, details: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let style = null;
    if (this.props.isMoving) {
      style = {
        position: "absolute",
      };
    }

    let data = (
      <>
        <Skeleton
          circle={true}
          style={{ margin: "20px" }}
          height={65}
          width={65}
        />
        <Skeleton style={{ marginLeft: "18px" }} width={180} height={12} />
        <Skeleton
          style={{ marginLeft: "18px", marginBottom: "25px" }}
          width={150}
          height={10}
        />
        {/* <Skeleton style={{marginLeft:'18px'}} width={150} height={10}/> */}
        {/* <Skeleton style={{marginLeft:'18px'}} width={180} height={12}/> */}
        <Skeleton style={{ marginLeft: "18px" }} width={150} height={10} />
        <Skeleton style={{ marginLeft: "18px" }} width={150} height={10} />
        <Skeleton style={{ marginLeft: "18px" }} width={150} height={10} />
        <Skeleton
          style={{ marginLeft: "18px", marginBottom: "18px" }}
          width={150}
          height={10}
        />
        <Skeleton style={{ marginLeft: "18px" }} width={150} height={12} />{" "}
        <Skeleton
          style={{ marginLeft: "18px", marginBottom: "15px" }}
          width={150}
          height={10}
        />
      </>
    );

    if (!this.state.loading) {
      let imgSrc = this.state.details.user_avatar;
      if (imgSrc === null) {
        imgSrc = defaultProfilePic;
      }

      data = (
        <>
          <div className="coverImg"></div>

          <img className="profilePic" src={imgSrc} />

          <h5 className="profileName">
            <NavLink to="/profile">{this.state.details.user_name}</NavLink>
          </h5>

          <h6 className="profileStatus">{this.state.details.user_tagline}</h6>

          <div style={{ width: "100%", margin: "16px 0px" }}>
            <div className="profileVisits">
              <div>Connections : </div>
              <div style={{ color: "blue", fontSize: "13.3px" }}>
                {this.state.details.connection}
              </div>
            </div>

            <div className="profileVisits">
              <div>Bookmarked Items : </div>
              <div style={{ color: "blue", fontSize: "13.3px" }}>
                {this.state.details.bookmarks}
              </div>
            </div>
          </div>

          <NavLink
            to="/savedPosts"
            style={{ display: "flex", color: "black", width: "100%" }}
          >
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
    }

    return (
      <>
        <div style={style} className="profileSideBox">
          {data}
        </div>
        {/* <div className="profileSideBox2">
            <NavLink to='/postJob'>
              <div>
              Post Job
              </div>
            </NavLink>
            <NavLink to='/createPost'>
              <div>
                Create Post
              </div>
            </NavLink>
            <NavLink to='/createCompanyPage'>
              <div>
              Create Company page+
              </div>
            </NavLink>
        </div> */}
      </>
    );
  }
}

export default ProfileSidebox;
