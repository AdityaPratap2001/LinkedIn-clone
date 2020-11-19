import React, { Component } from "react";
import Post from "./Post/Post";
import "./MyPosts.css";
import myPic from "../../assets/profileSample.jpg";
import axios from "../../API/baseURL/baseURL";
import CreatePost from "../../components/CreatePost/CreatePost";
import PopularDomains from "../../components/PopularDomains/PopularDomains";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import Navbar from "../../components/Navbar/Navbar";
import {Redirect} from 'react-router-dom';

class MyPosts extends Component {
  state = {
    // posts: postsData,
    posts: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profId = localStorage.getItem("profileID");
    axios
      .get(`/user/post/view/${profId}/`, config)
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
        // this.setState({ posts: null });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    let logStatus = localStorage.getItem('logStatus');
    if(logStatus === null){
      return <Redirect to='/userLogin'/>
    }

    let postsData = null;
    if (this.state.posts) {
      postsData = this.state.posts.map((post, index) => {
        return <Post postId={post.id} data={post} />;
      });
    }

    return (
      // <div className="posts">{postsData}</div>
      <div>
        <Navbar shadow={true} />
        <div className="body feedBody">
          <ProfileSidebox />

          <div className="postColumn">
            {/* <CreatePost /> */}
            <div className="savedPostsPrivate">
              <h6 className="head">Saved Posts</h6>
              <h6 className="sub">
                <i>Anything you save is private</i>
              </h6>
            </div>
            <hr style={{ margin: "0px", marginBottom: "12px" }} />
            {postsData}
          </div>

          <PopularDomains />
        </div>
      </div>
    );
  }
}

export default MyPosts;
