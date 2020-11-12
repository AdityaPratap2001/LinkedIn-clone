import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import defaultPic from "../../../../../assets/defaultProfilePic.png";

class ShowEndorsedList extends Component {
  render() {
    let userListData = null;
    if (this.props.data.list.length === 0) {
      userListData = null;
    }
    if (this.props.data.list.length !== 0) {
      userListData = this.props.data.list.map((user) => {
        let pic = user.profPic;
        if (pic === null) {
          pic = defaultPic;
        }
        return (
          <div className="skillUser">
            <div>
              <img src={pic} />
            </div>
            <NavLink to="/user/32">
              <h6 className="name">
                {user.firstName} {user.lastName}
              </h6>
              <h6 className="desc">
                {user.position} at {user.industry}
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
            <h6 className="skillHead">{this.props.data.skill}</h6>
            <hr />
            <i onClick={this.props.hideModal} class="fas fa-times"></i>

            {userListData}
          </div>
        </Modal>
      </>
    );
  }
}

export default ShowEndorsedList;
