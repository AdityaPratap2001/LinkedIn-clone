import React, { Component } from "react";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class FormOne extends Component {
  state = {
    input: {},
    errors: {},
  };

  handleChange = (event) => {
    let input = this.state.input;
    if(event.target.name === 'email'){
      this.state.errors['email'] = emailRegex.test(event.target.value) ? null : "Enter valid email"; 
    }
    if(event.target.name === 'password'){
      let pass = event.target.value;
      let spaceCount = 0;
      // pass.forEach(ch => {
      //   if(ch === ' '){
      //     spaceCount++;
      //   }
      // });
      for(let ch in pass){
        if(pass[ch]==' '){
          spaceCount++;
        }
      } 
      if(spaceCount > 0){
        this.state.errors['password'] = "Password cannot contain ' ' ";
      }
    }
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      
      this.props.submitHandler(this.state.input);

      let input = {};
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({ input: input });
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    let pass = input["password"];
    let spaceCount = 0;
      // pass.forEach(ch => {
      //   if(ch === ' '){
      //     spaceCount++;
      //   }
      // });
    for(let ch in pass){
      if(pass[ch]==' '){
        spaceCount++;
      }
    } 
    if(spaceCount > 0){
      errors['password'] = "Password cannot contain ' ' ";
      isValid = false;
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Enter valid email.";
    }

    // if (!emailRegex.test(input["email"])) {
    //   isValid = false;
    //   errors["email"] = "Enter valid email.";
    // }


    if (input["password"].length < 6) {
      isValid = false;
      errors["password"] = "Minimum 6 characters required!";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your new password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please confirm your password.";
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <>
        <h5 className="formOneHead">Make the most of your professional life</h5>
        <form className="signupFormOne" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              autoComplete='off'
              value={this.state.input.old_password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter your e-mail id"
              id="name"
              required
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter New password"
              id="password"
              required
            />

            <div className="text-danger">{this.state.errors.password}</div>
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirm_password"
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter confirm password"
              id="confirm_password"
              required
            />

            <div className="text-danger">
              {this.state.errors.confirm_password}
            </div>
          </div>

          {/* <div className="form-group">
            <input type='checkbox'/>
            <label style={{marginLeft : '6px'}}>I'm a student</label>
          </div> */}

          <button type="submit" className="btn btn-dark">
            Confirm
          </button>
        </form>
      </>
    );
  }
}

export default FormOne;
