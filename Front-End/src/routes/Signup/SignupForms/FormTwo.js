import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-date-picker";
import moment from "moment";

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

class FormTwo extends Component {
  state = {
    firstName: null,
    lastName: null,
    location: null,
    position: null,
    industry: null,
    startDate: new Date(),
    endDate: new Date(),
    selectedFile: null,
    isStudent: false,
    formErrors: {
      firstName: "",
      lastName: "",
      location: "",
      position: "",
      industry: "",
      startDate: "",
      endDate: "",
      // selectedFile: ""
    },
  };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(this.state);
      this.props.submitHandler(this.state);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  // handleStudentChange = () => {
  //   let isUserStudent = this.state.isStudent;
  //   this.setState({isStudent : !isUserStudent});
  //   console.log(this.state);
  // }

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

  // handleClick = (e) => {
  //   this.refs.fileUploader.click();
  // }

  render() {
    const { formErrors } = this.state;

    return (
      <>
        <h5 className="formOneHead formTwoHead">Personal Details</h5>
        {/* <i class="fas fa-plus-circle" onClick={this.handleClick} style={{cursor:'pointer'}}></i>
        <input type="file" id="file" ref="fileUploader" style={{display: "none"}}/> */}
        <form
          encType="multipart/form-data"
          className="signupFormTwo"
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
              <label>Position :</label>
              <br></br>
              <input
                type="text"
                className={
                  formErrors.position.length > 0
                    ? "error form-control"
                    : "form-control"
                }
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

          {/* <div className="form-group formTwoDateSection">
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
            </div> */}

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

            {/* <div className="form-group formTwoDateSection">
            <div
              className="formTwoDates formTwoDateOne"
              style={{ marginRight: "40px" }}
            >
              <div>
                <label>Start-Year :</label>
                <br></br>
                <DatePicker
                  format={"yyyy-MM-dd"}
                  onChange={(value) =>{
                    this.setState({ startDate: value });
                    setTimeout(()=>{
                      console.log(this.state.startDate);
                    },4000)
                  }
                    
                  } 
                  value={this.state.startDate}
                />
              </div>
              {formErrors.startDate.length > 0 && (
                <span className="errorMessage">{formErrors.startDate}</span>
              )}
            </div> */}

            {/* <div className="formTwoDates formTwoDateTwo">
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
            </div> */}
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

          <div className="form-group">
            <input
              type="checkbox"
              style={{ marginRight: "7px", transform: "translateY(1px)" }}
              // checked={!this.state.isStudent}
              // onChange={this.handleStudentChange}
              onChange={() => {
                this.setState({ isStudent: !this.state.isStudent });
                console.log(this.state);
              }}
              // defaultChecked={!this.state.isStudent}
            />
            <label>I'm a student</label>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-dark"
              style={{ width: "50%" }}
            >
              Sign up
            </button>
            <Link to="/userLogin" className="link">
              <h6
                style={{ fontSize: "12px", marginTop: "4px", color: "black" }}
              >
                Already have an account? Sign In!
              </h6>
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default FormTwo;
