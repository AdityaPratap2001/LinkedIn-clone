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
    //first API check 
    // if user doesNot exists -> 
    // this.setState({
    //   showAlert : true,
    //   alertData : 'No account found linked to this E-Mail!',
    //   alertColor : 'danger'
    // })

    // If user exists but has not filled 2nd signupForm
    // clear localStorage & set userID in localStorage
    // this.setState({
    //   showAlert : true,
    //   alertData : 'Complete your Profile forms! Redirecting...!',
    //   alertColor : 'danger'
    // })
    // setTimeout(()=>{
    //   this.setState({redirect : 'personalDetails'});
    // },4000)

    // If user exists but has not completed OTP verification
    //clear localStorage & set userID & profileID in localStorage
    this.setState({
      showAlert : true,
      alertData : 'Complete your Phone number verification! Redirecting...!',
      alertColor : 'danger'
    })
    setTimeout(()=>{
      this.setState({redirect : 'otpCompletion'});
    },4000)
  }

  redirectToOtpVerifcation = () => {
    this.setState({redirect : 'forgotPassword'});
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
        <div className='loaderWindow' style={{margin:'auto'}}>
          <Loader/>
        </div>
      )
    }

    if(this.state.redirect === 'personalDetails'){
      return <Redirect to='/userSignup/personalDetails'/>
    }
    if(this.state.redirect === 'otpCompletion'){
      return <Redirect to='/userSignup/otpVerification'/>
    }
    if(this.state.redirect === 'forgotPassword'){
      return <Redirect to='/forgotPassword/otpVerification'/>
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