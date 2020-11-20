import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../assets/defaultProfilePic.png";
import axios from '../../../API/baseURL/baseURL';

class Reply extends Component {
  state = {
    isLiked: this.props.reply.is_liked_by_user,
  };

  likeReply = () => {
    this.setState({ isLiked: true });
    this.props.reply.is_liked = true;
    this.props.reply.likes_count = this.props.reply.likes_count + 1;
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let replyData = {
      vote: 1,
    };
    axios
      .post(`/user/post/comment/reply/like/${this.props.replyId}/`, replyData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  unlikeReply = () => {
    this.setState({ isLiked: false });
    this.props.reply.is_liked = false;
    this.props.reply.likes_count = this.props.reply.likes_count - 1;
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let replyData = {
      vote: -1,
    };
    axios
      .post(`/user/post/comment/reply/like/${this.props.replyId}/`, replyData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let reply = this.props.reply;
    let replyUserImgSrc = reply.author_avatar;
    if (replyUserImgSrc === null) {
      replyUserImgSrc = defaultPic;
    }

    let likeButton = (
      <span
        onClick={this.unlikeReply}
        style={{
          backgroundColor: "#edf0f5",
          borderRadius: "3px",
          color: "#0a66c2",
        }}
        className="like"
      >
        Like
      </span>
    );
    if (!this.state.isLiked) {
      likeButton = (
        <span onClick={this.likeReply} className="like">
          Like
        </span>
      );
    }

    return (
      <div className="comment reply">
        <img src={replyUserImgSrc} />
        <div className="commentBlock" style={{width:'100%'}}>
          <div className="commentData">
          <span className='timeStamp'>{reply.posted_at}</span>
            <NavLink to={`/user/${reply.author_id}`}>
              <h6 className="name">{reply.author_name}</h6>
              <h6 className="tag">{reply.author_tagline}</h6>
            </NavLink>

            <h6 className="actualComment">{reply.text}</h6>
          </div>

          <div>
            {likeButton}
            <i
              style={{ color: "#0a66c2" }}
              class="likeComment likeReply fas fa-thumbs-up"
            ></i>
            <span className="commentLikeNum">{this.props.reply.likes_count}</span>
            {/* <span className="commentLikeNum">{reply.numLikes}</span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Reply;
