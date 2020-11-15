import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../../assets/defaultProfilePic.png";

class Reply extends Component {
  state = {
    // isLiked: this.props.reply.isLiked,
  };

  likeReply = () => {
    this.setState({ isLiked: true });
    this.props.reply.isLiked = true;
    this.props.reply.numLikes = this.props.reply.numLikes + 1;
  };
  unlikeReply = () => {
    this.setState({ isLiked: false });
    this.props.reply.isLiked = false;
    this.props.reply.numLikes = this.props.reply.numLikes - 1;
  };

  render() {
    let reply = this.props.reply;
    let replyUserImgSrc = reply.userImg;
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
    if (!this.props.reply.isLiked) {
      likeButton = (
        <span onClick={this.likeReply} className="like">
          Like
        </span>
      );
    }

    return (
      <div className="comment reply">
        <img src={replyUserImgSrc} />
        <div className="commentBlock">
          <div className="commentData">
            <NavLink to={`/user/${reply.userId}`}>
              <h6 className="name">{reply.name}</h6>
              <h6 className="tag">{reply.tag}</h6>
            </NavLink>

            <h6 className="actualComment">{reply.reply}</h6>
          </div>

          <div>
            {likeButton}
            <i
              style={{ color: "#0a66c2" }}
              class="likeComment likeReply fas fa-thumbs-up"
            ></i>
            <span className="commentLikeNum">{this.props.reply.numLikes}</span>
            {/* <span className="commentLikeNum">{reply.numLikes}</span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Reply;
