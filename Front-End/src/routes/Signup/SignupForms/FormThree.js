import React, { Component } from "react";
import OtpInput from "react-otp-input";

class FormThree extends Component {
  state = {
    phoneNumber: "",
    otp: "",
    showOtpBox: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.phoneNumber);
  };

  handleOtpChange = (otp) => {
    this.setState({ otp : otp });
    // console.log(this.state.otp);
  };

  sendOTP = () => {
    console.log(this.state);
    if(this.state.phoneNumber.length < 1 || this.state.phoneNumber.length >10){
      alert("Enterder wrong phone number!");
      return;
    }
    alert("OTP Sent!");
    this.setState({ showOtpBox: true });
  };

  verifyOTP = () => {
    alert("OTP sent for verification!")
    console.log(this.state);
    this.setState({otp : ''});
  }

  render() {
    let OtpBox = null;
    if (this.state.showOtpBox) {
      OtpBox = (
        <>
          <div className="otpInputDiv">
            <label>Enter OTP:</label>
            <OtpInput
              value={this.state.otp}
              onChange={this.handleOtpChange}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>
          <button
            onClick={this.verifyOTP}
            style={{ marginTop: '20px', borderRadius: "0px", fontSize: "13px", width: "100%" }}
            className="btn btn-success"
          >
            Verify OTP
          </button>
        </>
      );
    }

    return (
      <>
        <h5 className="formOneHead">Verify your Phone Number</h5>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            style={{ fontSize: "14px" }}
            type="number"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter your phone number"
            id="phoneNumber"
            required
          />

          {/* <div className="text-danger">{this.state.errors.name}</div> */}
        </div>

        <button
          onClick={this.sendOTP}
          style={{ borderRadius: "0px", fontSize: "13px", width: "100%" }}
          className="btn btn-success"
        >
          Send OTP
        </button>

        {OtpBox}
      </>
    );
  }
}

export default FormThree;
