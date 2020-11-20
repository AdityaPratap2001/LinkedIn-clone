import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../assets/defaultProfilePic.png";
import mediaSrcI from "../../../assets/4.png";
import mediaSrcV from "../../../assets/sampleVideo.mp4";
import Comment from "./Comment";
import PeopleLiked from "./PeopleLiked";
import axios from "../../../API/baseURL/baseURL";

class Post extends Component {
  state = {
    post: this.props.data,
    comments: this.props.data.comments,
    showFullText: false,
    isLiked: this.props.data.is_liked_by_user,
    displayCommentSection: false,
    newComment: "",
    showModal: false,
    modalData: null,
    likedByList: this.props.data.liked_by,
    isBookmarked: this.props.data.is_saved_by_user,
  };

  showPeopleList = (data) => {
    console.log(data);
    let peopleList = data;
    let profID = localStorage.getItem("profileID");
    if (this.state.isLiked) {
      let newList = [
        {
          id: profID,
          voter_avatar: this.props.data.viewer_avatar,
          voter_name: this.props.data.viewer_name,
          voter_tagline: this.props.data.viewer_tagline,
        },
      ];
      for (let index in peopleList) {
        newList.push(peopleList[index]);
      }
      peopleList = newList;
    }
    console.log(this.state.isLiked);
    console.log(peopleList);
    this.setState({
      showModal: true,
      modalData: peopleList,
    });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  showFullText = () => {
    this.setState({ showFullText: true });
  };

  like = () => {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let likePost = {
      vote: 1,
    };
    axios
      .post(`/user/post/vote/${this.props.postId}/like/`, likePost, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ isLiked: true });
    this.state.post.likes_count = this.state.post.likes_count + 1;
  };

  unLike = () => {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
        // "Accept": "application/json",
      },
    };
    let likePost = {
      vote: -1,
    };
    axios
      .post(`/user/post/vote/${this.props.postId}/like/`, likePost, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ isLiked: false });
    this.state.post.likes_count = this.state.post.likes_count - 1;
  };

  displayCommentSection = () => {
    this.setState({ displayCommentSection: true });
  };

  bookmark = () => {
    this.setState({ isBookmarked: true });
    let token = localStorage.getItem("accessToken");
    const config = {
      // withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
        // "Accept": "application/json",
      },
    };
    const bookData = {
      field: "data",
    };
    axios
      .post(`/user/post/bookmark/${this.props.postId}/`, bookData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  unBookmark = () => {
    this.setState({ isBookmarked: false });
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bookData = {
      field: "data",
    };
    axios
      .delete(`/user/post/bookmark/${this.props.postId}/`, bookData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addComment = (e) => {
    e.preventDefault();
    let profID = localStorage.getItem("profileID");

    let postId = this.props.postId;
    let text = this.state.newComment;
    let commentData = {
      commented_by: profID,
      post: postId,
      text: text,
    };
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let commentId = null;
    console.log(commentData);
    axios
      .post(`/user/post/comment/create/`, commentData, config)
      .then((res) => {
        console.log(res);
        commentId = res.data.id;
      })
      .catch((err) => {
        console.log(err);
      });

    this.state.post.comment_count = this.state.post.comment_count + 1;
    let newComments = [
      // {
      //   userPic : this.props.data.selfUserPic,
      //   userName : this.props.data.selfName,
      //   tagline : this.props.data.tagLine,
      // }
      {
        comment: {
          author_id: profID,
          // commentId: null,
          author_avatar: this.props.data.viewer_avatar,
          is_liked: false,
          likes_count: 0,
          id: commentId,
          posted_at: 'just now',
          comment_count: 0,
          author_name: this.props.data.viewer_name,
          author_tagline: this.props.data.viewer_tagline,
          text: this.state.newComment,
        },
        replies: [],
      },
    ];

    for (let index in this.state.comments) {
      newComments.push(this.state.comments[index]);
    }
    // alert(this.state.newComment);
    this.setState({
      newComment: "",
      comments: newComments,
    });

    this.setState({
      newComment: "",
      comments: newComments,
    });
    setTimeout(() => {
      console.log(this.state.comments);
    }, 1000);
  };

  render() {
    let postData = this.state.post;
    // let userPic = postData.userPic;
    let userPic = postData.author_avatar;
    if (userPic === null || userPic === undefined) {
      userPic = defaultPic;
    }

    // let postTextData = postData.postText;
    let postTextData = postData.text;

    let textHeight = null;
    let seeMore = {
      display: "none",
    };
    if (!this.state.showFullText) {
      textHeight = {
        height: "65px",
        overflowY: "hidden",
      };
      seeMore = {
        display: "block",
      };
    }

    let mediaData = null;
    if (postData.media_type === "img") {
      mediaData = (
        <img src={postData.media} />
        // <img src={mediaSrcI} />
      );
    }
    if (postData.media_type === "video") {
      mediaData = (
        <video src={postData.media} controls />
        // <video src={mediaSrcV} controls />
      );
    }

    let iconData = (
      <div onClick={this.unLike} className="likeIcon">
        <i style={{ color: "#0a66c2" }} class="fas fa-thumbs-up"></i>
        <h6 style={{ color: "#0a66c2" }}>Like</h6>
      </div>
    );
    if (!this.state.isLiked) {
      iconData = (
        <div onClick={this.like} className="likeIcon">
          <i class="far fa-thumbs-up"></i>
          <h6>Like</h6>
        </div>
      );
    }

    let commentImgSrc = postData.viewer_avatar;
    if (commentImgSrc === null) {
      commentImgSrc = defaultPic;
    }

    let commentSection = null;
    if (this.state.displayCommentSection) {
      commentSection = (
        <form onSubmit={this.addComment} className="commentInputBar">
          <img src={commentImgSrc} />
          <input
            value={this.state.newComment}
            type="text"
            placeholder="Add a comment..."
            onChange={(e) => this.setState({ newComment: e.target.value })}
          />
        </form>
      );
    }

    let modalData = null;
    if (this.state.showModal) {
      modalData = (
        <PeopleLiked data={this.state.modalData} hideModal={this.hideModal} />
      );
    }

    let commentsData = null;
    if (this.state.displayCommentSection) {
      commentsData = this.state.comments.map((comment) => {
        let profID = localStorage.getItem("profileID");
        return (
          <Comment
            viewerId={profID}
            name={this.props.data.viewer_name}
            tagline={this.props.data.viewer_tagline}
            img={commentImgSrc}
            comment={comment}
            commentId={comment.comment.id}
          />
        );

        // let commentUserImgSrc = comment.comment.userImg;
        // if (commentUserImgSrc === null) {
        //   commentUserImgSrc = defaultPic;
        // }

        // let isCommentLiked = comment.comment.isLiked;

        // let likeComment = () => {
        //   isCommentLiked = true;
        //   alert('Liked comment!')
        // }

        // let likeButton = (
        //   <span
        //     onClick={this.unlikeComment}
        //     style={{
        //       backgroundColor: "#edf0f5",
        //       borderRadius: "3px",
        //       color: "#0a66c2",
        //     }}
        //     className="like"
        //   >
        //     Like
        //   </span>
        // );
        // if (!isCommentLiked) {
        //   likeButton = (
        //   <span onClick={likeComment} className="like">Like</span>
        //   );
        // }

        // return (
        //   <div className="comment">
        //     <img src={commentUserImgSrc} />

        //     <div className="commentBlock">
        //       <div className="commentData">
        //         <NavLink to={`/user/${comment.comment.userId}`}>
        //           <h6 className="name">{comment.comment.name}</h6>
        //           <h6 className="tag">{comment.comment.tag}</h6>
        //         </NavLink>

        //         <h6 className="actualComment">{comment.comment.comment}</h6>
        //       </div>

        //       <div>{likeButton}</div>
        //     </div>
        //   </div>
        // );
      });
    }

    let bookMarkIcon = <i onClick={this.bookmark} class="far fa-bookmark" />;
    if (this.state.isBookmarked) {
      bookMarkIcon = <i onClick={this.unBookmark} class="fas fa-bookmark" />;
    }

    let topMessage = (
      // <h6 className='message'>Utkarsh Patel liked this</h6>
      <h6 className="message">{postData.message}</h6>
    );
    if (postData.message === null || postData.message === undefined ) {
      topMessage = null;
    }

    return (
      <div className="post">
        {modalData}
        {topMessage}
        <div className="postHeader">
          <div className="userDetails">
            <NavLink to={`/user/${postData.author_id}`}>
              <img className="userPic" src={userPic} />
              <div className="userAbout">
                <h6 className="name">{postData.author_name}</h6>
                <h6 className="tag">{postData.author_tagline}</h6>
                {/* <h6 className="tag">{postData.location}</h6> */}
                <h6 className="tag">
                  {postData.posted_at}
                  <i style={{fontSize:'11.2px',marginLeft:'3.5px',transform:'translateY(0.6px)',color:'grey'}} class="fas fa-globe-americas"></i>
                </h6>
              </div>
            </NavLink>

            <div className="bookmark">{bookMarkIcon}</div>
          </div>

          <div className="strike"></div>

          <div
            style={{ whiteSpace: "pre-wrap" }}
            className="postText"
            style={textHeight}
          >
            {postTextData}
            <h6
              style={seeMore}
              onClick={this.showFullText}
              className="readmore"
            >
              ...see more
            </h6>
          </div>
        </div>

        <div className="mediaDisplay">{mediaData}</div>

        <div className="numDisplay">
          <h6>
            <span
              onClick={() => this.showPeopleList(this.state.likedByList)}
              className="likes"
            >
              <i class="fas fa-thumbs-up"></i>
              {postData.likes_count}
            </span>
            <span
              style={{
                transform: "translateY(-8px)",
                margin: "0px 6px",
                fontWeight: "500",
                color: "rgb(112, 112, 112)",
              }}
              className="dot"
            >
              ,
            </span>
            <span onClick={this.displayCommentSection} className="comments">
              {postData.comment_count} Comments
            </span>
          </h6>
        </div>

        <div className="strike"></div>

        <div className="bar">
          {iconData}

          <div onClick={this.displayCommentSection} className="commentIcon">
            <i class="far fa-comment-dots"></i>
            <h6>Comment</h6>
          </div>
        </div>

        {commentSection}
        {commentsData}
      </div>
    );
  }
}

export default Post;
