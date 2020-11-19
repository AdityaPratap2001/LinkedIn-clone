import React, { Component } from "react";
import { Modal } from "react-bootstrap";

const nameRegex = RegExp(/^[a-zA-Z_-]{0,30}$/);
const lastnameRegex = RegExp(/^[a-zA-Z\s]+$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  // console.log('Val :')
  Object.values(rest).forEach((val) => {
    //   // if(val !== 'selectedFile'){
    //     val === null && (valid = false);
    //   // }
  });

  return valid;
};

class ChangeUserDetailsModal extends Component {
  state = {
    firstName: null,
    lastName: null,
    location: null,
    tagline: null, 
    selectedFile: null,
    profilePic: null,
    formErrors: {
      firstName: "",
      lastName: "",
      location: "",
      tagline: ""
      // selectedFile: ""
    },
  };

  fileChangedHandler = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]));
    this.setState({ 
      selectedFile: event.target.files[0],
      // profilePic : event.target.result
      profilePic: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      setTimeout(() => {
        this.props.editUserDetails(this.state);
        this.props.hideModal();
      }, 1000);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          (value.length < 3 && value.length > 0
            ? "minimum 3 characaters required"
            : "") ||
          (formErrors.firstName = nameRegex.test(value)
            ? ""
            : "only characters allowed!");
        break;

      case "lastName":
        let spaceNum = 0;
        for (let ch in value) {
          if (value[ch] === " ") {
            spaceNum = spaceNum + 1;
          }
        }
        formErrors.lastName =
          (spaceNum > 1 ? "more than one space prohibited" : "") ||
          (value.length < 3 ? "minimum 3 characaters required" : "") ||
          (formErrors.lastName = lastnameRegex.test(value)
            ? ""
            : "only characters allowed!");
        break;

      case "location":
        formErrors.location =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "tagline":
        formErrors.tagline =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;


      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <>
        <Modal
          show={true}
          animation={false}
          centered
          onHide={this.props.hideModal}
        >
          <div className="userEditDetails">
            <h5>Edit personal details!</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>
            <form
              encType="multipart/form-data"
              className="editUserDetails"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <div>
                  <label>Firstname : </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className={
                      formErrors.firstName.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <div>
                  <label>Lastname :</label>
                  <br></br>
                  <input
                    type="text"
                    autoComplete="off"
                    className={
                      formErrors.lastName.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>

              <div className="form-group">
                <div>
                  <label>Location :</label>
                  <br></br>
                  <input
                    type="text"
                    autoComplete="off"
                    className={
                      formErrors.location.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    name="location"
                    placeholder="Your location"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.location.length > 0 && (
                  <span className="errorMessage">{formErrors.location}</span>
                )}
              </div>

              <div className="form-group">
                <div>
                  <label>Headline :</label>
                  <br></br>
                  <input
                    type="text"
                    className={
                      formErrors.tagline.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    name="tagline"
                    placeholder="Your position"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.tagline.length > 0 && (
                  <span className="errorMessage">{formErrors.tagline}</span>
                )}
              </div>

              <div className="form-group">
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

export default ChangeUserDetailsModal;
