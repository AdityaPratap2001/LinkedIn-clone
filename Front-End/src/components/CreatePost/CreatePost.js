import React, { Component } from "react";
import CreatePostModal from "./Modal/CreatePostModal";
import "./CreatePost.css";

class CreatePost extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    let modalData = null;
    if (this.state.showModal) {
      modalData = <CreatePostModal hideModal={this.hideModal}/>;
    }

    return (
      <div className="createPost">
        {modalData}
        <div className="createPostHead">
          <h6 onClick={this.showModal}>
            <i
              style={{ marginRight: "4.5px", transform: "translateY(-1.2px)" }}
              class="fas fa-edit"
            ></i>
            Create post
          </h6>
        </div>
        <div className="createPostBottom">
          <div onClick={this.showModal} className="button">
            <i style={{ color: "#70b5f9" }} class="fas fa-camera-retro"></i>
            Photo
          </div>
          <div onClick={this.showModal} className="button">
            <i style={{ color: "#e7a33e" }} class="fas fa-video"></i>
            Video
          </div>
          <div onClick={this.showModal} className="button">
            <i style={{ color: "#7FC15E" }} class="fas fa-camera-retro"></i>
            Article
          </div>
          <div onClick={this.showModal} className="button">
            <i class="fas fa-plus-square"></i>
            Post
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
