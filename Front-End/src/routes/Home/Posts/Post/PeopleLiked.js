import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../../assets/defaultProfilePic.png";

class PeopleLiked extends Component {

  componentDidMount(){
    console.log(this.props.data);
  }

  render() {
    let userListData = null;
    if (this.props.data.length === 0) {
      userListData = null;
    }
    if (this.props.data.length !== 0) {
      userListData = this.props.data.map((user) => {
        let pic = user.voter_avatar;
        if (pic === null) {
          pic = defaultPic;
        }
        return (
          <div className="skillUser">
            <div>
              <img src={pic} />
            </div>
            <NavLink to={`/user/${user.id}`}>
              <h6 className="name">
                {user.voter_name}
              </h6>
              <h6 className="desc">
                {user.voter_tagline}
              </h6>
            </NavLink>
          </div>
        );
      });
    }

    return (
      <>
        <Modal
          show={true}
          animation={false}
          // centered
          onHide={this.props.hideModal}
        >
          <div className="userAddAbout">
            <h6 className="skillHead">People who liked the post</h6>
            <hr />
            <i onClick={this.props.hideModal} class="fas fa-times"></i>

            <div className='endorseDisplay'>{userListData}</div>
          </div>
        </Modal>
      </>
    );
  }
}

export default PeopleLiked;
