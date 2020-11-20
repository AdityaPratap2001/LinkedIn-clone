import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../../assets/defaultProfilePic.png";
import Reply from "./Reply.js";
import axios from "../../../../API/baseURL/baseURL";

class Comment extends Component {
  state = {
    isLiked: this.props.comment.comment.is_liked_by_user,
    likeNum: this.props.comment.comment.likes_count,
    openReply: false,
    openReplyBar: false,
    openReplies: false,
    replies: this.props.comment.replies,
    newReply: "",
  };

  likeComment = () => {
    // let likesNumber = this.state.likeNum + 1;
    this.setState({
      // isLiked: true,
      // likeNum: likesNumber
    });

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let likeData = {
      vote: 1,
    };
    axios
      .post(`/user/post/comment/like/${this.props.commentId}/`, likeData, config)
      .then((res) => {
        console.log(res);
        this.setState({isLiked : true});
      })
      .catch((err) => {
        console.log(err);
      });

    this.props.comment.comment.is_liked = true;
    this.props.comment.comment.likes_count =
      this.props.comment.comment.likes_count + 1;
    // alert("Liked comment!");
  };

  unlikeComment = () => {
    // let likesNumber = this.state.likeNum - 1;
    this.setState({
      // isLiked: false,
      // likeNum: likesNumber
    });

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let likeData = {
      vote: -1,
    };
    axios
      .post(`/user/post/comment/like/${this.props.commentId}/`, likeData, config)
      .then((res) => {
        this.setState({isLiked : false});
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.props.comment.comment.is_liked = false;
    this.props.comment.comment.likes_count =
      this.props.comment.comment.likes_count - 1;
    // alert("Unliked comment!");
  };

  openReplyBox = () => {
    this.setState({ openReplyBar: true });
  };
  openReplies = () => {
    this.setState({ openReplies: true });
  };

  addReply = (e) => {
    e.preventDefault();
    let profID = localStorage.getItem("profileID");

    let commentId = this.props.commentId;
    let text = this.state.newReply;
    let replyData = {
      replied_by: profID,
      comment: this.props.commentId,
      text: text,
    };
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let replyId = null;
    console.log(replyData);
    axios
      .post(`/user/post/comment/reply/create/`, replyData, config)
      .then((res) => {
        console.log(res);
        replyId = res.data.id;
      })
      .catch((err) => {
        console.log(err);
      });

    let newReplies = [
      {
        author_id: this.props.viewerId,
        author_avatar: this.props.img,
        author_name: this.props.name,
        author_tagline: this.props.tagline,
        text: this.state.newReply,
        is_liked: false,
        posted_at: 'just now',
        id: replyId,
        likes_count: 0,
        liked_by: [],
        posted_at: "just now",
      },
    ];
    for (let index in this.state.replies) {
      newReplies.push(this.state.replies[index]);
    }
    this.setState({
      replies: newReplies,
      newReply: "",
    });
    // this.props.comment.comment.numReplies = this.props.comment.comment.numReplies + 1;
    this.props.comment.replies.length = this.props.comment.replies.length + 1;
  };

  render() {
    let comment = this.props.comment;
    let userImgSrc = this.props.img;

    let commentUserImgSrc = comment.comment.author_avatar;
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
    if (!this.state.isLiked) {
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
          <Reply replyId={reply.id} reply={reply} />
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
            <span className='timeStamp'>{comment.comment.posted_at}</span>
            <NavLink to={`/user/${comment.comment.author_id}`}>
              <h6 className="name">{comment.comment.author_name}</h6>
              <h6 className="tag">{comment.comment.author_tagline}</h6>
            </NavLink>

            <h6 className="actualComment">{comment.comment.text}</h6>
          </div>

          <div>
            {likeButton}
            <i
              style={{ color: "#0a66c2" }}
              class="likeComment fas fa-thumbs-up"
            ></i>
            {/* <span className="commentLikeNum">{this.state.likeNum}</span> */}
            <span className="commentLikeNum">
              {comment.comment.likes_count}
            </span>
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
              {this.props.comment.replies.length} replies
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
