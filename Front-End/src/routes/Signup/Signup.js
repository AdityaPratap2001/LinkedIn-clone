import React, { Component } from 'react';
import './Signup.css';
import Navbar from '../../components/Navbar/Navbar';
import FormOne from './SignupForms/FormOne';
import FormTwo from './SignupForms/FormTwo';
import FormThree from './SignupForms/FormThree';
import Loader from '../../components/Loader/Loader';
import CustomAlert from '../../components/CustomAlert/CustomAlert';

class Signup extends Component {

  state = {
    loading : null,
    stage : this.props.match.params.id,
    showAlert : null,
    alertColor : null,
    alertData : null
  }

  submitFormOne = (details) => {
    // alert('Reached parent!');
    let userData = {
      email : details.email,
      password : details.password,
    }
    console.log(userData);
    
    this.setState({ loading : true});
    setTimeout(()=>{
      this.setState({loading : false});
    },6000)
  }

  submitFormTwo = (details) => {
    alert('Reached parent!');
    let userId = localStorage.getItem('username');
    const personalDetails = {
      email : userId,
      firstName : details.firstName,
      lastName : details.lastName,
      location : details.location,
      positon : details.positon,
      industry : details.industry,
      image : details.selectedFile,
      startYear : Number(details.startYear),
      endYear : Number(details.endYear),
    }
    console.log(personalDetails);
  }

  sendOTP = (details) => {
    console.log('Parent');
    console.log(details);
  }
  
  verifyOTP = (details) => {
    console.log('Parent');
    console.log(details);
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

    let formData = <FormOne submitHandler={this.submitFormOne}/>;

    if(this.state.stage === 'register'){
      formData = <FormOne submitHandler={this.submitFormOne}/>
    }
    if(this.state.stage === 'personalDetails'){
      formData = <FormTwo submitHandler={this.submitFormTwo}/>
    }
    if(this.state.stage === 'otpVerification'){
      formData = <FormThree sendOTP={this.sendOTP} verifyOTP={this.verifyOTP} showAlert={this.showAlert}/>
    }

    if(this.state.loading){
      formData = (
        <div className='loaderWindow'>
          <Loader/>
        </div>
      )
    }

    return (
      <div>
        <Navbar/>
        {AlertData}
        <div className='body'>
          <div className='signupForm'>
            {formData}
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;