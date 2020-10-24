import React, { Component } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import LoginForm from './LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';

class Login extends Component {

  state = {
    loading : null,
    showAlert : null,
    alertColor : null,
    alertData : null
  }

  login = (details) => {
    console.log('From parent!');
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

    let formData = (
      <LoginForm showAlert={this.showAlert} submitHandler={this.login}/>
    )
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
          <div className='loginForm'>
            {formData}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;