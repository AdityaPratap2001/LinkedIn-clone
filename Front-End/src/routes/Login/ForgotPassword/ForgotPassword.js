import React, { Component } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import FormOne from "./ForgotPasswordForms/FormOne";
import FormTwo from "./ForgotPasswordForms/FormTwo";
import CustomAlert from "../../../components/CustomAlert/CustomAlert";
import { Redirect } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import checkSrc from "../../../assets/check.gif";

class ForgotPassword extends Component {
  state = {
    stage: this.props.match.params.id,
    loading: null,
    showAlert: null,
    alertColor: null,
    alertData: null,
    redirect: null,
    completed: null,
  };

  sendOTP = () => {
    //API call
    //if phone number doesn't exists for any user...
    // this.setState({
    //   showAlert : true,
    //   alertColor : 'danger',
    //   alertData : 'No account found linked to entered phone number!'
    // })

    // if phone number exists
    this.setState({
      showAlert: true,
      alertColor: "success",
      alertData: "OTP has been sent to your registered phone number!",
    });
  };

  verifyOTP = () => {
    // API call
    //if OTP doesn't match
    // this.setState({
    //   showAlert : true,
    //   alertColor : 'danger',
    //   alertData : 'OTP entered is incorrect!'
    // })

    // if OTP did match
    this.setState({
      showAlert: true,
      alertColor: "success",
      alertData: "Verified! You need to reset your password...Redirecting!",
    });
    setTimeout(() => {
      this.setState({ showAlert: false, redirect: true });
    }, 4000);
  };

  submitFormTwo = () => {
    // API call
    // user successfully sets new password
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, completed: true });
    }, 2500);
  };

  showAlert = (alertDetails) => {
    this.setState({
      showAlert: true,
      alertData: alertDetails.alertData,
      alertColor: alertDetails.alertColor,
    });
  };

  hidePopup = () => {
    this.setState({ showAlert: null });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/forgotPassword/resetPassword" />;
    }

    let AlertData = null;
    if (this.state.showAlert) {
      AlertData = (
        <CustomAlert
          hidePop={this.hidePopup}
          color={this.state.alertColor}
          content={this.state.alertData}
        />
      );
    }

    let formData = null;
    if (this.state.stage === "otpVerification") {
      formData = (
        <FormOne
          showAlert={this.showAlert}
          sendOTP={this.sendOTP}
          verifyOTP={this.verifyOTP}
        />
      );
    }
    if (this.state.stage === "resetPassword") {
      formData = <FormTwo submitHandler={this.submitFormTwo} />;
    }
    if (this.state.loading) {
      formData = (
        <div className="loaderWindow" style={{ margin: "auto" }}>
          <Loader />
        </div>
      );
    }
    if (this.state.completed) {
      formData = (
        <>
          <h5 className="formOneHead">
            You've successfully changed your password!
          </h5>
          <div className="checkGif">
            <img src={checkSrc} />
          </div>
        </>
      );
    }

    return (
      <div>
        <Navbar />
        {AlertData}
        <div className="loginBody">
          <div className="loginForm">{formData}</div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
