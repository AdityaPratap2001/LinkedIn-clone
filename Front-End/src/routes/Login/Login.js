import React, { Component } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import LoginForm from './LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { Redirect } from 'react-router-dom';
import axios from '../../API/baseURL/baseURL';

class Login extends Component {

  state = {
    loading : null,
    showAlert : null,
    alertColor : null,
    alertData : null,
    redirect : null
  }

  login = (details) => {

    localStorage.clear();

    console.log(details);
    let userData = {
      email : details.email,
      password : details.password
    }
    this.setState({loading:true});
    axios.post('/user/login/',userData)
      .then((res)=>{
        console.log(res);
        if(res.status === 200){
          localStorage.setItem('accessToken',res.data.access);
          localStorage.setItem('refreshToken',res.data.refresh);
          localStorage.setItem('logStatus',true);
          localStorage.setItem('profileID',res.data.profile_id);
          localStorage.setItem('aboutID',res.data.about_id);
          this.setState({
            loading : false,
            showAlert : true,
            alertColor : 'success',
            alertData : 'LoggedIn successsfully!...Redirecting!'
          });
          setTimeout(()=>{
            this.setState({redirect : 'home'})
          },3000)
        }
      })
      .catch((err)=>{
        console.log(err.response.status);
        console.log(err.response);
        let errorStatus = err.response.status;
        this.setState({loading : false})
        if(errorStatus === 400){
          this.setState({
            showAlert : true,
            alertColor : 'danger',
            alertData : 'No account found, linked to this EMail!'
          })
        }
        if(errorStatus === 401){
          this.setState({
            showAlert : true,
            alertColor : 'danger',
            alertData : 'Password entered is incorrect!'
          })
        }
        if(errorStatus === 404){
          localStorage.setItem('userID',err.response.data.user_id);
          this.setState({
            showAlert : true,
            alertColor : 'danger',
            alertData : 'Complete your verification!',
          })
          setTimeout(()=>{
            this.setState({redirect : 'secondForm'});
          },3000)
        }
        if(errorStatus === 403){
          localStorage.setItem('userID',err.response.data.user_id);
          localStorage.setItem('profileID',err.response.data.profile_id);
          this.setState({
            showAlert : true,
            alertColor : 'danger',
            alertData : 'Complete your otp verification!',
          })
          setTimeout(()=>{
            this.setState({redirect : 'thirdForm'});
          },3000)
        }
      
        console.log(err);
      })

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
    // this.setState({
    //   showAlert : true,
    //   alertData : 'Complete your Phone number verification! Redirecting...!',
    //   alertColor : 'danger'
    // })
    // setTimeout(()=>{
    //   this.setState({redirect : 'otpCompletion'});
    // },4000)
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

    if(this.state.redirect === 'home'){
      return <Redirect to='/'/>
    }
    if(this.state.redirect === 'secondForm'){
      return <Redirect to='/userSignup/personalDetails'/>
    }
    if(this.state.redirect === 'thirdForm'){
      return <Redirect to='/userSignup/otpVerification'/>
    }

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