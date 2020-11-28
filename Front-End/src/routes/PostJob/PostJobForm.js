import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    jobTitle: null,
    company: null,
    location: null,
    employmentType: "Fulltime",
    description: null,
    skillsRequired: null,
    industry: null,
    payRange: null,
    companyLogo: null,
    formErrors: {
      jobTitle: "",
      company: "",
      location: "",
      employmentType: "",
      description: "",
      skillsRequired: "",
      industry: "",
      payRange: "",
      companyLogo: "",
      // selectedFile: ""
    },
  };

  fileChangedHandler = (event) => {
    this.setState({ companyLogo: event.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.props.submitForm(this.state);
      console.log(this.state);
      this.setState({
        jobTitle: null,
        company: null,
        location: null,
        employmentType: "Fulltime",
        description: null,
        skillsRequired: null,
        industry: null,
        payRange: null,
        companyLogo: null,
        formErrors: {
          jobTitle: "",
          company: "",
          location: "",
          employmentType: "",
          description: "",
          skillsRequired: "",
          industry: "",
          payRange: "",
          companyLogo: "",
          // selectedFile: ""
        },
      });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  // handleStudentChange = () => {
  //   let isUserStudent = this.state.isStudent;
  //   this.setState({ isStudent: !isUserStudent });
  //   console.log(this.state);
  // };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      // case "firstName":
      //   formErrors.firstName =
      //     (value.length < 3 && value.length > 0
      //       ? "minimum 3 characaters required"
      //       : "") ||
      //     (formErrors.firstName = nameRegex.test(value)
      //       ? ""
      //       : "only characters allowed!");
      //   break;

      // case "lastName":
      //   let spaceNum = 0;
      //   for (let ch in value) {
      //     if (value[ch] === " ") {
      //       spaceNum = spaceNum + 1;
      //     }
      //   }
      //   formErrors.lastName =
      //     (spaceNum > 1 ? "more than one space prohibited" : "") ||
      //     (value.length < 3 ? "minimum 3 characaters required" : "") ||
      //     (formErrors.lastName = lastnameRegex.test(value)
      //       ? ""
      //       : "only characters allowed!");
      //   break;

      case "jobTitle":
        formErrors.jobTitle =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "company":
        formErrors.company =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "location":
        formErrors.location =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "employmentType":
        formErrors.employmentType =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "description":
        formErrors.description =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "skillsRequired":
        formErrors.skillsRequired =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;

      case "industry":
        formErrors.industry =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;

      // case "payRange":
      //   formErrors.payRange =
      //     value.length < 3 ? "minimum 3 characaters required" : "";
      //   break;

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
        {/* <h5 className="formOneHead formTwoHead">Personal Details</h5> */}
        {/* <i class="fas fa-plus-circle" onClick={this.handleClick} style={{cursor:'pointer'}}></i>
        <input type="file" id="file" ref="fileUploader" style={{display: "none"}}/> */}
        <form
          encType="multipart/form-data"
          className="signupFormTwo postJobForm"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div>
              <label>Job title *</label>
              <input
                type="text"
                autoComplete="off"
                value={this.state.jobTitle}
                className={
                  formErrors.jobTitle.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="jobTitle"
                placeholder="What domain are you looking for?"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.jobTitle.length > 0 && (
              <span className="errorMessage">{formErrors.jobTitle}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Company *</label>
              {/* <br></br> */}
              <input
                type="text"
                autoComplete="off"
                value={this.state.company}
                className={
                  formErrors.company.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="company"
                placeholder="Last Name"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.company.length > 0 && (
              <span className="errorMessage">{formErrors.company}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Location *</label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                value={this.state.location}
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
              <label>Employment Type *</label>
              {/* <input
                type="text"
                className={
                  formErrors.employmentType.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="employmentType"
                placeholder="Your position"
                onChange={this.handleChange}
                required
              /> */}
              <select
                name="employmentType"
                onChange={this.handleChange}
                className={
                  formErrors.employmentType.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                required
              >
                <option value="Fulltime">Full-Time</option>
                <option value="Parttime">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            {formErrors.employmentType.length > 0 && (
              <span className="errorMessage">{formErrors.employmentType}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Job Description *</label>
              <br></br>
              <textarea
                type="text"
                autoComplete="off"
                value={this.state.description}
                className={
                  formErrors.description.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="description"
                placeholder="Enter Institute or Industry"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.description.length > 0 && (
              <span className="errorMessage">{formErrors.description}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Skills Required *</label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                value={this.state.skillsRequired}
                className={
                  formErrors.skillsRequired.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="skillsRequired"
                placeholder="Enter Institute or Industry"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.skillsRequired.length > 0 && (
              <span className="errorMessage">{formErrors.skillsRequired}</span>
            )}
          </div>

          <div className="form-group">
            <div>
              <label>Related Industry *</label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                value={this.state.industry}
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

          <div className="form-group">
            <div>
              <label>Pay Scale :</label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                value={this.state.payRange}
                className={
                  formErrors.payRange.length > 0
                    ? "error form-control"
                    : "form-control"
                }
                name="payRange"
                placeholder="Enter Institute or Industry"
                onChange={this.handleChange}
              />
            </div>
            {formErrors.payRange.length > 0 && (
              <span className="errorMessage">{formErrors.payRange}</span>
            )}
          </div>

          <div className="form-group">
            <label>Comapny logo : </label>
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

          {/* <div className="form-group">
            <input
              type="checkbox"
              style={{ marginRight: "7px", transform: "translateY(1px)" }}
              // checked={!this.state.isStudent}
              // onChange={this.handleStudentChange}
              onChange={() => {
                console.log(this.state);
                this.setState({ isStudent: !this.state.isStudent });
              }}
              defaultChecked={!this.state.isStudent}
            />
            <label>I'm a student</label>
          </div> */}

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-dark"
              style={{ width: "50%" }}
            >
              Post Job
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default FormTwo;
