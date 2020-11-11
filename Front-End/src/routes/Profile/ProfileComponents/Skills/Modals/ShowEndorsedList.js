import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ShowEndorsedList extends Component {
  render() {

    return (
      <>
        <Modal
          show={true}
          animation={false}
          centered
          onHide={this.props.hideModal}
        >
          <div className="userAddAbout">
            <h5>{this.props.data.skill}</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>
          </div>
        </Modal>
      </>
    );
  }
}

export default ShowEndorsedList;
