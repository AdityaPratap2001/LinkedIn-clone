import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../../assets/defaultProfilePic.png";

class Post extends Component {
  state = {
    post: this.props.data,
  };

  render() {
    let postData = this.state.post;
    let userPic = postData.userPic;
    if (userPic === null || userPic === undefined) {
      userPic = defaultPic;
    }

    return (
      <div className="post">
        <div className="postHeader">
          <div className="userDetails">
            <NavLink to={`/user/${postData.profileId}`}>
              <img src={userPic} />
              <div className="userAbout">
                <h6 className="name">{postData.userName}</h6>
                <h6 className="tag">{postData.userTag}</h6>
                <h6 className="tag">{postData.location}</h6>
              </div>
            </NavLink>

            <div className='bookmark'>
              <i class="far fa-bookmark"></i>
            </div>
          </div>

          <div className='strike'></div>


        </div>
      </div>
    );
  }
}

export default Post;
