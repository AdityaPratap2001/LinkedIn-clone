import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class EditExperience extends Component {
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
            <h5>Edit Experience!</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>
            <form onSubmit={this.formSubmit}>
              <div class="form-group">
                {/* <textarea
                required
                value={this.state.about}
                onChange={(e) => {
                  this.setState({ about: e.target.value });
                }}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Add about yourself!"
              /> */}
              </div>
              <div className="modalBottom">
                <h6 className="userCloseButton" onClick={this.props.hideModal}>
                  Close
                </h6>
                <button type="submit" className="userSaveButton">
                  Save
                </button>
              </div>
            </form>
          </div>
          {/* <h6>Henlo!</h6> */}
        </Modal>
      </>
    );
  }
}

export default EditExperience;
