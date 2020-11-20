import React, { Component } from "react";
import Post from "./Post/Post";
import "./SavedPosts.css";
import myPic from "../../assets/profileSample.jpg";
import axios from "../../API/baseURL/baseURL";
import CreatePost from "../../components/CreatePost/CreatePost";
import PopularDomains from "../../components/PopularDomains/PopularDomains";
import ProfileSidebox from "../../components/ProfileSidebox/ProfileSidebox";
import Navbar from "../../components/Navbar/Navbar";
import { Redirect } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

class SavedPosts extends Component {
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
      // .get(`/user/post/view/${profId}/`, config)
      .get(`/user/post/bookmark/view/${profId}`, config)
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
    let logStatus = localStorage.getItem("logStatus");
    if (logStatus === null) {
      return <Redirect to="/userLogin" />;
    }

    let postsData = (
      <div className="post">
        <div
          className="postHeader"
          style={{ display: "flex", padding: "11.8px 14px" }}
        >
          <div>
            <Skeleton
              style={{ marginRight: "8px" }}
              circle={true}
              width={48}
              height={48}
            />
          </div>
          <div style={{ paddingTop: "5px" }}>
            <Skeleton height={12.5} width={200} />
            <br />
            <Skeleton
              style={{ paddingBottom: "0px" }}
              height={8.5}
              width={200}
            />
            <br />
          </div>
        </div>
        <Skeleton height={310} />
        <div style={{ padding: "11px", paddingTop: "7px" }}>
          <Skeleton height={22} width="100%" />
        </div>
      </div>
    );
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

export default SavedPosts;
