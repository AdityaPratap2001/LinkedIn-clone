import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import defaultPropfPic from "../../../assets/defaultProfilePic.png";
import axios from '../../../API/baseURL/baseURL';
import { connect } from 'react-redux';

class CreatePostModal extends Component {
  state = {
    userName: null,
    name: null,
    tagline: null,
    img: null,
    profilePic: null,
    postText: null,
    selectedType: null,
    videoSelected: null,
    videoSelectedSrc: null,
    imgSelected: null,
    imgSelectedSrc: null,
  };

  componentDidMount() {
    // let token = localStorage.getItem("accessToken");
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };
    // axios
    //   .get("/user/info/", config)
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       name: res.data.user_name,
    //       tagline: res.data.user_tagline,
    //       img: res.data.user_avatar
    //      });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  // handleImgClick = (e) => {
  //   this.refs.imgUploader.click();
  //   console.log(e);
  // }

  // imgChangeHandler = (event) => {
  //   console.log(event);
  //   console.log(URL.createObjectURL(event.target.files[0]));
  //   this.setState({
  //     imgSelected: event.target.files[0],
  //     // profilePic : event.target.result
  //     imgSelectedSrc: URL.createObjectURL(event.target.files[0]),
  //   });
  //   console.log(this.state);
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (formValid(this.state)) {
  //     setTimeout(() => {
  //       this.props.editUserDetails(this.state);
  //       this.props.hideModal();
  //     }, 1000);
  //   } else {
  //     console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  //   }
  // };

  handleSubmit= (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    setTimeout(()=>{
      this.props.hideModal();
    },500)
  }

  onChangeImg = (event) => {
    console.log(event);
    console.log(URL.createObjectURL(event.target.files[0]));
    this.setState({
      selectedType: "img",
      imgSelected: event.target.files[0],
      imgSelectedSrc: URL.createObjectURL(event.target.files[0]),
    });
    console.log(this.state);
  };

  onChangeVideo = (event) => {
    console.log(event);
    console.log(URL.createObjectURL(event.target.files[0]));
    this.setState({
      selectedType: "video",
      videoSelected: event.target.files[0],
      videoSelectedSrc: URL.createObjectURL(event.target.files[0]),
    });
    console.log(this.state);
  };

  render() {
    let userPic = this.props.data.img;
    if (userPic === null) {
      userPic = defaultPropfPic;
    }

    let displayData = null;
    if (this.state.selectedType === "img" && this.state.imgSelected !== null) {
      displayData = (
        <div className="displaySelected">
          <img src={this.state.imgSelectedSrc} />
        </div>
      );
    }
    if (
      this.state.selectedType === "video" &&
      this.state.videoSelected !== null
    ) {
      displayData = (
        <div className="displaySelected">
          <video src={this.state.videoSelectedSrc} controls/>
        </div>
      );
    }

    return (
      <>
        <Modal
          show={true}
          animation={false}
          onHide={this.props.hideModal}
          className="createPostModal"
        >
          <div className="postModal">
            <h5 className="postModalHead">Create post</h5>
            <i
              onClick={this.props.hideModal}
              class="fas closeModal fa-times"
            ></i>

            <form
              encType="multipart/form-data"
              className="editUserDetails"
              onSubmit={this.handleSubmit}
            >
              <div className="createPostModalHead">
                <div className="userPic">
                  <img src={userPic} />
                </div>

                <div className="userDesc">
                  {/* <h6 className="name">{this.state.name}</h6> */}
                  <h6 className="name">{this.props.data.name}</h6>
                  <h6 className="tagline">
                    {/* {this.state.tagline} */}
                    {this.props.data.tagline}
                  </h6>
                </div>

                <textarea
                  required
                  value={this.state.postText}
                  onChange={(e) => {
                    this.setState({ postText: e.target.value });
                  }}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="What do you want to talk about?"
                />

                {displayData}
              </div>

              {/* <div className="form-group">
                <label>Profile Img : </label>
                <br></br>
                <div>
                  <input
                    name="img"
                    onChange={this.fileChangedHandler}
                    type="file"
                    style={{ width: "100%" }}
                  ></input>
                </div>
              </div>  */}

              <div className="modalBottom">
                {/* <h6 className="userCloseButton" onClick={this.props.hideModal}>
                  Close
                </h6> */}
                <div>
                  {/* <i class="fas fa-image" onClick={this.handleImgClick}></i>
                  <input type='file' ref="imgUploader"></input> */}

                  <input
                    type="file"
                    id="file1"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={this.onChangeImg}
                  />
                  <label htmlFor="file1">
                    <i class="fas fa-image"></i>
                  </label>

                  {/* <input
                    name="img"
                    onChange={this.imgChangeHandler}
                    type="file"
                  ></input> */}

                  <input
                    type="file"
                    id="file2"
                    style={{ display: "none" }}
                    accept="video/*"
                    onChange={this.onChangeVideo}
                  />
                  <label htmlFor="file2">
                    <i class="fas fa-video"></i>
                  </label>
                </div>

                <button type="submit" className="userSaveButton">
                  Post
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
      data: state.prof.userData,
  }
};

export default connect(mapStateToProps)(CreatePostModal);
