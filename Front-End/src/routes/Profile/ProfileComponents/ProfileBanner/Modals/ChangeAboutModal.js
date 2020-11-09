import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ChangeAbout extends Component {
  state = {
    about: null,
  };

  formSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      this.props.changeAbout(this.state.about);
      this.props.hideModal();
    }, 1000);
    console.log(this.state.about);
  };

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
            <h5>Let people know about you!</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>
            <form onSubmit={this.formSubmit}>
              <div class="form-group">
                <textarea
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
                />
              </div>
              <div className="modalBottom">
                <h6 className="userCloseButton" onClick={this.props.hideModal}>
                  Close
                </h6>
                <button type="submit" className="userSaveButton">
                  Save
                </button>
                {/* <h6 type='submit' className="userSaveButton">Save</h6> */}
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default ChangeAbout;
