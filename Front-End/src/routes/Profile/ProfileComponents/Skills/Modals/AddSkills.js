import React, { Component } from "react";
import { Modal } from "react-bootstrap";
// import '../Experience.css';

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

class AddSkills extends Component {
  state = {
    institute: null,
    location: null,
    startDate: null,
    endDate: null,
    selectedFile: null,
    compLogo : null,
    formErrors: {
      institute: "",
      location: "",
      startDate: "",
      endDate: "",
    },
  };

  fileChangedHandler = (event) => {
    this.setState({ 
      selectedFile: event.target.files[0],
      compLogo: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      setTimeout(()=>{
        this.props.hideModal();
        this.props.addEducation(this.state);
      },1000)
      console.log(this.state);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "institute":
        formErrors.institute =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;

      case "location":
        formErrors.location =
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
          <div className="userAddAbout">
            <h5>Add Skills!</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>
            {/* <form
              encType="multipart/form-data"
              className="addExperienceModal"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <div>
                  <label>Institute :</label>
                  <br></br>
                  <input
                    type="text"
                    className={
                      formErrors.institute.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    autoComplete="off"
                    name="institute"
                    placeholder="Your institute"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.institute.length > 0 && (
                  <span className="errorMessage">{formErrors.institute}</span>
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
                    placeholder="Enter Institute's location"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.location.length > 0 && (
                  <span className="errorMessage">{formErrors.location}</span>
                )}
              </div>

              <div className="form-group formTwoDateSection">
                <div
                  className="formTwoDates formTwoDateOne"
                  style={{ marginRight: "40px" }}
                >
                  <div>
                    <label>Start-Year :</label>
                    <br></br>
                    <input
                      type="number"
                      min="1970"
                      max="2022"
                      autoComplete="off"
                      className={
                        formErrors.startDate.length > 0
                          ? "error form-control"
                          : "form-control"
                      }
                      name="startDate"
                      placeholder="Year"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  {formErrors.startDate.length > 0 && (
                    <span className="errorMessage">{formErrors.startDate}</span>
                  )}
                </div>

                <div className="formTwoDates formTwoDateTwo">
                  <div>
                    <label>End-Year :</label>
                    <br></br>
                    <input
                      type="number"
                      min="1970"
                      max="2030"
                      autoComplete="off"
                      className={
                        formErrors.endDate.length > 0
                          ? "error form-control"
                          : "form-control"
                      }
                      name="endDate"
                      placeholder="Year"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  {formErrors.endDate.length > 0 && (
                    <span className="errorMessage">{formErrors.endDate}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Institute Logo : </label>
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
                  Add 
                </button>
              </div>
            </form> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default AddSkills;
