import React, { Component } from "react";
import { Link } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class LoginForm extends Component {
  state = {
    email: null,
    password: null,
    formErrors: {
      email: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.props.submitHandler(this.state);
    } else {
      // console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  forgotPass = () => {
    // if(this.state.email === null){
    //   let alertData = {
    //     alertData : 'Enter your Registered E-Mail!',
    //     alertColor : 'danger'
    //   }
    //   this.props.showAlert(alertData);
    //   return;
    // }
    this.props.redirectToOtpVerifcation();
    // alert('Will redirect to OTP verification!');
  };

  render() {
    const { formErrors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h5 className="formOneHead">We've missed you!</h5>
        <div className="form-group">
          <label>E-Mail :</label>
          <input
            type="email"
            className={
              formErrors.email.length > 0
                ? "form-control error"
                : "form-control"
            }
            name="email"
            placeholder="Enter your email"
            onChange={this.handleChange}
            required
          />
          {formErrors.email.length > 0 && (
            <span className="errorMessage">{formErrors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label>Password :</label>
          <input
            type="password"
            className={formErrors.password.length > 0 ? "form-control error" : "form-control"}
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
          />

          {formErrors.password.length > 0 && (
            <span className="errorMessage">{formErrors.password}</span>
          )}
          <h6 className="forgotPass" onClick={this.forgotPass}>
            Forgot password?
          </h6>
        </div>

        <button className='btn btn-dark' style={{width:'100%'}} type="submit">Sign In</button>
        <Link to="/userSignup/register" className="link">
          <h6 className='newAccount'>Create a new account?</h6>
        </Link>
      </form>
    );
  }
}

export default LoginForm;
