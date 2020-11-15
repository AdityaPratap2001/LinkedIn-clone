import React, { Component } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import FormOne from "./ForgotPasswordForms/FormOne";
import FormTwo from "./ForgotPasswordForms/FormTwo";
import CustomAlert from "../../../components/CustomAlert/CustomAlert";
import { Redirect } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import checkSrc from "../../../assets/check.gif";
import axios from "../../../API/baseURL/baseURL";

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

  sendOTP = (details) => {
    localStorage.clear();
    let userData = {
      phone_number: details.phoneNumber,
    };
    console.log(userData);
    axios.post('/user/password/reset/',userData)
      .then((res)=>{
        console.log(res);
        let userId = res.data.user_id;
        localStorage.setItem('userID',userId);
        this.setState({
          showAlert : true,
          alertColor : 'success',
          alertData : 'OTP sent to entered phone number!'
        })
      })
      .catch((err)=>{
        if(err.response.status === 404){
          this.setState({
            showAlert : true,
            alertColor : 'danger',
            alertData : 'No account found, linked to entered number!'
          })
        }
      })

    //API call
    //if phone number doesn't exists for any user...
    // this.setState({
    //   showAlert : true,
    //   alertColor : 'danger',
    //   alertData : 'No account found linked to entered phone number!'
    // })

    // if phone number exists
    // this.setState({
    //   showAlert: true,
    //   alertColor: "success",
    //   alertData: "OTP has been sent to your registered phone number!",
    // });
  };

  verifyOTP = (details) => {
    console.log(details);
    this.setState({
      showAlert: true,
      alertColor: "success",
      alertData: "Wait while we verify your phone number...",
    });
    let verifyData = {
      phone_number: details.phoneNumber,
      otp: details.otp,
    };
    axios.post("/user/password/reset/otp/verify/", verifyData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          let resetAccessToken = res.data.access;
          localStorage.setItem('resetAccessToken',resetAccessToken);
          this.setState({
            showAlert: true,
            alertColor: "success",
            alertData:
              "Verified! Reset your password...Redirecting!",
          });
          setTimeout(() => {
            this.setState({ showAlert: false, redirect: true });
          }, 4000);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          this.setState({
            showAlert: true,
            alertColor: "danger",
            alertData: "OTP has expired!",
          });
        }
        if (err.response.status === 403) {
          this.setState({
            showAlert: true,
            alertColor: "danger",
            alertData: "OTP entered is incorrect!",
          });
        }
      });


    // API call
    //if OTP doesn't match
    // this.setState({
    //   showAlert : true,
    //   alertColor : 'danger',
    //   alertData : 'OTP entered is incorrect!'
    // })

    // if OTP did match
  };

  submitFormTwo = (details) => {

    console.log(details);
    let userId = localStorage.getItem('userID');
    let refreshToken = localStorage.getItem('resetAccessToken');

    this.setState({loading : true});

    // let resetDetails = {
    //   headers: {
    //     'Authorization': `Bearer ${refreshToken}`
    //   },
    //   user_id : userId,
    //   Password : details.password
    // }
    const config = {
      headers: { Authorization: `Bearer ${refreshToken}`},
    };
    let resetPassData = {
      user_id : userId,
      password : details.password
    }
    axios.patch('/user/password/reset/new_password/',resetPassData,config)
      .then((res)=>{
        console.log(res);
        if(res.status === 202){
          this.setState({
            completed : true,
            loading : false
          })
        }
      })
      .catch((err)=>{
        console.log(err);
        this.setState({loading : false});
        if(err.response.status === 406){
          this.setState({
            showAlert : true,
            alertData : "New password should not match your old password!",
            alertColor : 'danger',
          })
        }
      })


    // this.setState({ loading: true });
    // setTimeout(() => {
    //   this.setState({ loading: false, completed: true });
    // }, 2500);
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
