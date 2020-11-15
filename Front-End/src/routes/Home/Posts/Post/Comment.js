import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../../assets/defaultProfilePic.png";
import Reply from "./Reply.js";

class Comment extends Component {
  state = {
    isLiked: this.props.comment.comment.isLiked,
    likeNum: this.props.comment.comment.numLikes,
    openReply: false,
    openReplyBar: false,
    openReplies: false,
    replies: this.props.comment.replies,
    newReply: '',
  };

  likeComment = () => {
    // let likesNumber = this.state.likeNum + 1;
    this.setState({
      // isLiked: true,
      // likeNum: likesNumber
    });
    this.props.comment.comment.isLiked = true;
    this.props.comment.comment.numLikes =
      this.props.comment.comment.numLikes + 1;
    alert("Liked comment!");
  };
  unlikeComment = () => {
    // let likesNumber = this.state.likeNum - 1;
    this.setState({
      // isLiked: false,
      // likeNum: likesNumber
    });
    this.props.comment.comment.isLiked = false;
    this.props.comment.comment.numLikes =
      this.props.comment.comment.numLikes - 1;
    alert("Unliked comment!");
  };
  openReplyBox = () => {
    this.setState({ openReplyBar: true });
  };
  openReplies = () => {
    this.setState({ openReplies: true });
  };
  
  addReply = (e) => {
    e.preventDefault();
    let newReplies = [
      {
        replyId: 83,
        userImg: this.props.img,
        name: this.props.name,
        tag: this.props.tagline,
        reply: this.state.newReply,
        isLiked: false,
        numLikes: 0,
        likeList: [],
      },
    ];
    for(let index in this.state.replies){
      newReplies.push(this.state.replies[index]);
    }
    this.setState({
      replies : newReplies,
      newReply : '',
    });
    this.props.comment.comment.numReplies = this.props.comment.comment.numReplies + 1;
    
  };

  render() {
    let comment = this.props.comment;
    let userImgSrc = this.props.img;

    let commentUserImgSrc = comment.comment.userImg;
    if (commentUserImgSrc === null) {
      commentUserImgSrc = defaultPic;
    }

    let likeButton = (
      <span
        onClick={this.unlikeComment}
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
    // if (!this.state.isLiked) {
    if (!this.props.comment.comment.isLiked) {
      likeButton = (
        <span onClick={this.likeComment} className="like">
          Like
        </span>
      );
    }

    let replyInputData = null;
    if (this.state.openReplyBar) {
      replyInputData = (
        <form onSubmit={this.addReply} className="commentInputBar commentReply">
          <img src={userImgSrc} />
          <input
            value={this.state.newReply}
            type="text"
            placeholder="Add a reply..."
            onChange={(e) => this.setState({ newReply: e.target.value })}
          />
        </form>
      );
    }

    let repliesData = null;
    if (this.state.openReplies) {
      // repliesData = comment.replies.map((reply, index) => {
      repliesData = this.state.replies.map((reply, index) => {
        // let replyUserImgSrc = reply.userImg;
        // if (replyUserImgSrc === null) {
        //   replyUserImgSrc = defaultPic;
        // }
        return (
          <Reply reply={reply} />
          // <div className="comment reply">
          //   <img src={replyUserImgSrc} />
          //   <div className="commentBlock">
          //     <div className="commentData">
          //       <NavLink to={`/user/${comment.comment.userId}`}>
          //         <h6 className="name">{comment.comment.name}</h6>
          //         <h6 className="tag">{comment.comment.tag}</h6>
          //       </NavLink>

          //       <h6 className="actualComment">{comment.comment.comment}</h6>
          //     </div>

          //     <div>
          //       {likeButton}
          //       <i
          //         style={{ color: "#0a66c2" }}
          //         class="likeComment fas fa-thumbs-up"
          //       ></i>
          //       <span className="commentLikeNum">
          //         {comment.comment.numLikes}
          //       </span>
          //       <span style={{ fontWeight: "300" }}>|</span>
          //       <span onClick={this.openReplyBox} className="like">
          //         Reply
          //       </span>
          //       <span
          //         className="commentLikeNum"
          //         onClick={this.openReplies}
          //         style={{ cursor: "pointer" }}
          //       >
          //         {comment.comment.numLikes} comments
          //       </span>
          //     </div>
          //   </div>
          // </div>
        );
      });
    }

    return (
      <div className="comment">
        <img src={commentUserImgSrc} />

        <div className="commentBlock">
          <div className="commentData">
            <NavLink to={`/user/${comment.comment.userId}`}>
              <h6 className="name">{comment.comment.name}</h6>
              <h6 className="tag">{comment.comment.tag}</h6>
            </NavLink>

            <h6 className="actualComment">{comment.comment.comment}</h6>
          </div>

          <div>
            {likeButton}
            <i
              style={{ color: "#0a66c2" }}
              class="likeComment fas fa-thumbs-up"
            ></i>
            {/* <span className="commentLikeNum">{this.state.likeNum}</span> */}
            <span className="commentLikeNum">{comment.comment.numLikes}</span>
            <span style={{ fontWeight: "300" }}>|</span>
            <span onClick={this.openReplyBox} className="like">
              Reply
            </span>
            <span
              className="commentLikeNum"
              onClick={this.openReplies}
              style={{ cursor: "pointer" }}
            >
              {/* {comment.comment.numReplies} replies */}
              {this.props.comment.comment.numReplies} replies
            </span>
          </div>

          {repliesData}
          {replyInputData}
        </div>
      </div>
    );
  }
}

export default Comment;
