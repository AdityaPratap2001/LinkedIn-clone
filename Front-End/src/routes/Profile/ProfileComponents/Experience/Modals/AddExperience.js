import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-date-picker";
import "../Experience.css";

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

class AddExperience extends Component {
  state = {
    position: null,
    industry: null,
    startDate: new Date(),
    endDate: new Date(),
    selectedFile: null,
    compLogo: null,
    headline: false,
    formErrors: {
      position: "",
      industry: "",
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
      setTimeout(() => {
        this.props.hideModal();
        this.props.addExperience(this.state);
      }, 1000);
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
      case "position":
        formErrors.position =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;

      case "industry":
        formErrors.industry =
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
            <h5>Add Experience!</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>
            <form
              encType="multipart/form-data"
              className="addExperienceModal"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <div>
                  <label>Position :</label>
                  <br></br>
                  <input
                    type="text"
                    className={
                      formErrors.position.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    autoComplete="off"
                    name="position"
                    placeholder="Your position"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.position.length > 0 && (
                  <span className="errorMessage">{formErrors.position}</span>
                )}
              </div>

              <div className="form-group">
                <div>
                  <label>Institute/Industry :</label>
                  <br></br>
                  <input
                    type="text"
                    autoComplete="off"
                    className={
                      formErrors.industry.length > 0
                        ? "error form-control"
                        : "form-control"
                    }
                    name="industry"
                    placeholder="Enter Institute or Industry"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                {formErrors.industry.length > 0 && (
                  <span className="errorMessage">{formErrors.industry}</span>
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
                    <DatePicker
                      selected={this.state.startDate}
                      // onChange={(date) => this.changeStartDate(date)}
                      onChange={(date) => this.setState({ startDate: date })}
                      required={true}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                  {formErrors.startDate.length > 0 && (
                    <span className="errorMessage">{formErrors.startDate}</span>
                  )}
                </div>

                <div
                  className="formTwoDates formTwoDateOne"
                  style={{ marginRight: "40px" }}
                >
                  <div>
                    <label>End-Year :</label>
                    <br></br>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={(date) => this.setState({ endDate: date })}
                      required={true}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                  {formErrors.startDate.length > 0 && (
                    <span className="errorMessage">{formErrors.endDate}</span>
                  )}
                </div>
              </div>

              {/* <div className="form-group">
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
              </div> */}

              <div className="form-group">
                <input
                  type="checkbox"
                  style={{ marginRight: "7px" , height:'fit-content', transform:'translatey(1px)'}}
                  // checked={!this.state.isStudent}
                  // onChange={this.handleStudentChange}
                  onChange={() => {
                    console.log(this.state);
                    this.setState({ headline: !this.state.headline });
                  }}
                  defaultChecked={this.state.headline}
                />
                <label style={{fontSize:'13px'}}>Make this my headline</label>
              </div>

              <div className="modalBottom">
                <h6 className="userCloseButton" onClick={this.props.hideModal}>
                  Close
                </h6>
                <button type="submit" className="userSaveButton">
                  Add
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

export default AddExperience;
