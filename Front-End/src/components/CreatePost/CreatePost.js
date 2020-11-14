import React, { Component } from "react";
import CreatePostModal from "./Modal/CreatePostModal";
import "./CreatePost.css";
import CustomAlert from "../CustomAlert/CustomAlert";

class CreatePost extends Component {
  state = {
    showModal: false,
    showAlert: false,
    alertColor : 'danger',
    alertData : 'Error'
  };

  showModal = () => {
    this.setState({ showModal: true });
  };
  
  hideModal = () => {
    this.setState({ showModal: false });
  };

  hidePop = () => {
    this.setState({ showAlert: false });
  };

  createPost = (details) => {
    // console.log(details);

    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    let mediaData = null;
    if (details.selectedType === "img") {
      mediaData = details.imgSelected;
    }
    if (details.selectedType === "video") {
      mediaData = details.videoSelected;
    }

    let postData = {
      mediaType: details.selectedType,
      postText: details.postText,
      media: mediaData,
    };

    console.log(postData);
    this.setState({
      showAlert : true,
      alertData : 'The post was successfully posted!',
      alertColor : 'success'
    });

    // axios.get("/user/profile/brief_info/", config)
  };

  render() {
    let modalData = null;
    if (this.state.showModal) {
      modalData = (
        <CreatePostModal
          createPost={this.createPost}
          hideModal={this.hideModal}
        />
      );
    }

    let alertData = null;
    if (this.state.showAlert) {
      alertData = (
        <CustomAlert
          hidePop={this.hidePop}
          color={this.state.alertColor}
          content={this.state.alertData}
          where='createPost'
        />
      );
    }

    return (
      <>
        {alertData}
        <div className="createPost">
          {modalData}
          <div className="createPostHead">
            <h6 onClick={this.showModal}>
              <i
                style={{
                  marginRight: "4.5px",
                  transform: "translateY(-1.2px)",
                }}
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
      </>
    );
  }
}

export default CreatePost;
