import React, { Component } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import LoginForm from './LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    loading : null,
    showAlert : null,
    alertColor : null,
    alertData : null,
    redirect : null
  }

  login = (details) => {
    console.log('From parent!');
    console.log(details);
  }

  redirectToOtpVerifcation = () => {
    this.setState({redirect : true});
  }

  showAlert = (alertDetails) => {
    this.setState({showAlert : true , alertData : alertDetails.alertData , alertColor : alertDetails.alertColor});  
  }

  hidePopup = () => {
    this.setState({showAlert : null});
  }

  render() {

    let AlertData = null;
    if(this.state.showAlert){
      AlertData = (
        <CustomAlert hidePop={this.hidePopup} color={this.state.alertColor} content={this.state.alertData}/>
      )
    }

    let formData = (
      <LoginForm redirectToOtpVerifcation={this.redirectToOtpVerifcation} showAlert={this.showAlert} submitHandler={this.login}/>
    )
    if(this.state.loading){
      formData = (
        <div className='loaderWindow'>
          <Loader/>
        </div>
      )
    }

    if(this.state.redirect){
      return <Redirect to='/userSignup/otpVerification'/>
    }

    return (
      <div>
        <Navbar/>
        {AlertData}
        <div className='loginBody'>
          <div className='loginForm'>
            {formData}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;